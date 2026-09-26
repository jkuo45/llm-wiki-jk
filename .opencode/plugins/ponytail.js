// ponytail — OpenCode V2 plugin shim.
//
// opencode-ponytail@4.7.3 is a V1-era plugin: its default export is an async
// function returning a hook map. V2 rejects that with
// `Plugin must export a default definition with an id and an effect or setup
// function` (SchemaError at ["default"]), so the package cannot be loaded
// directly. Upstream has no V2 release (last publish 2026-06-24, V2 shipped
// 2026-09-12), so this shim re-registers the package's behavior through the V2
// plugin API while keeping the npm package as the single source of truth for
// the instruction text, mode resolution, and command templates.
//
// V1 -> V2 mapping applied here:
//   config                            -> ctx.command.transform
//   experimental.chat.system.transform-> ctx.session.hook("context")
//   command.execute.before            -> ctx.command.transform (the plugin owns
//                                        the `ponytail` command, so V2's
//                                        command transform is the documented
//                                        destination; there is no global
//                                        command.execute.before hook in V2)
//   skills/ auto-discovery            -> ctx.skill.transform (V1 relied on
//                                        OpenCode finding `skills/` on disk;
//                                        V2 only scans configured directories,
//                                        so the package's skills are registered
//                                        explicitly)
//
// The persisted mode stays in the package's own flag file rather than
// ctx.storage, because ponytail's Claude Code / pi hooks and statusline read
// that same file.

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { createRequire } from "node:module";
import { parse as parseYaml } from "yaml";
import { Plugin } from "@opencode/plugin";

// The package's helpers are CommonJS, and its `exports` map only exposes "." and
// "./plugin", so resolve the entrypoint and reach the files by path — the same
// relative hop the package's own entrypoint uses.
const require = createRequire(import.meta.url);
const packageDir = path.resolve(path.dirname(require.resolve("opencode-ponytail")), "..", "..");
const { getPonytailInstructions } = require(path.join(packageDir, "hooks", "ponytail-instructions"));
const { getDefaultMode, normalizePersistedMode, VALID_MODES } = require(
  path.join(packageDir, "hooks", "ponytail-config")
);

const commandDir = path.join(packageDir, ".opencode", "command");
const skillDir = path.join(packageDir, "skills");

// OpenCode has no flag-file convention of its own; keep mode beside its config.
const statePath = path.join(
  process.env.XDG_CONFIG_HOME || path.join(os.homedir(), ".config"),
  "opencode",
  ".ponytail-active"
);

function readMode() {
  try {
    return normalizePersistedMode(fs.readFileSync(statePath, "utf8").trim()) || getDefaultMode();
  } catch {
    return getDefaultMode();
  }
}

function writeMode(mode) {
  fs.mkdirSync(path.dirname(statePath), { recursive: true });
  fs.writeFileSync(statePath, mode);
}

function parseCommandFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return null;
  const description = match[1].match(/description:\s*(.+)/)?.[1]?.trim();
  return { description, template: match[2].trim() };
}

// Same frontmatter split as parseCommandFile, but the skill bodies use folded
// YAML descriptions, so the frontmatter goes through a real parser.
function parseSkillFile(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return null;
  const meta = parseYaml(match[1]) ?? {};
  if (!meta.name) return null;
  return { name: String(meta.name), description: meta.description, content: match[2] };
}

export default Plugin.define({
  id: "ponytail",
  async setup(ctx) {
    const log = (message) => console.log(`[ponytail] ${message}`);

    // Register slash commands so they appear even when installed from npm.
    // The command dir is absent in some bundled/stripped builds — degrade to no
    // commands rather than failing plugin setup.
    await ctx.command.transform((editor) => {
      let files = [];
      try {
        files = fs.readdirSync(commandDir).filter((file) => file.endsWith(".md"));
      } catch {
        return;
      }

      for (const file of files) {
        const name = path.basename(file, ".md");
        const parsed = parseCommandFile(path.join(commandDir, file));
        if (!parsed) continue;

        editor.add({
          name,
          description: parsed.description,
          async execute({ sessionID, prompt, delivery }) {
            // V2 hands the command its arguments already substituted into
            // prompt.text, and has no equivalent of V1's `input.arguments`, so
            // the level is recovered from the substituted template. `/ponytail`
            // falls back to the configured default, matching V1.
            if (name === "ponytail") {
              const requested = VALID_MODES.find((mode) =>
                new RegExp(`\\b${mode}\\b`, "i").test(prompt.text)
              );
              const mode = normalizePersistedMode(requested ?? "") || getDefaultMode();
              writeMode(mode);
              log(`mode ${mode}`);
            }

            await ctx.session.prompt({ ...prompt, sessionID, delivery });
          },
        });
      }
    });

    // Register the package's skills (ponytail, ponytail-review, ponytail-audit,
    // ponytail-debt, ponytail-help) so the `skill` tool can load them. Without
    // this only the slash commands exist — V2 has no implicit skill discovery
    // for npm-installed packages, the way V1 read `skills/` from disk.
    await ctx.skill.transform((editor) => {
      let files = [];
      try {
        files = fs
          .readdirSync(skillDir, { withFileTypes: true })
          .filter((entry) => entry.isDirectory())
          .map((entry) => path.join(skillDir, entry.name, "SKILL.md"))
          .filter((file) => fs.existsSync(file));
      } catch {
        return;
      }

      for (const file of files) {
        const parsed = parseSkillFile(file);
        if (!parsed) continue;
        editor.add({
          id: parsed.name,
          name: parsed.name,
          description: parsed.description,
          path: file,
          content: parsed.content,
        });
      }
    });

    // Append the ruleset to the system prompt of every agent-loop model request.
    // `context` runs for the agent loop including tool-driven continuations; the
    // persisted mode is read per request so a mode switch takes effect on the
    // next message.
    await ctx.session.hook("context", (event) => {
      const mode = readMode();
      if (mode === "off") return;
      event.system.push({ type: "text", text: getPonytailInstructions(mode) });
    });
  },
});
