// Self-check for plugins/ponytail.js — the V2 shim around opencode-ponytail.
// Run: node .opencode/tests/ponytail.test.mjs
//
// Lives outside .opencode/plugins/ so OpenCode does not auto-discover it as a
// plugin. It exercises setup() against a stub V2 context: command
// registration, system injection per mode, and /ponytail <level> persistence.
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import assert from "node:assert";
import { fileURLToPath } from "node:url";

const shim = (await import(fileURLToPath(new URL("../plugins/ponytail.js", import.meta.url)))).default;

// Stub V2 context: records command registrations, system pushes, and prompts.
function makeCtx() {
  const commands = new Map();
  const skills = new Map();
  const hooks = [];
  const prompts = [];
  return {
    commands,
    skills,
    hooks,
    prompts,
    ctx: {
      command: { transform: async (cb) => cb({ add: (d) => commands.set(d.name, d) }) },
      skill: { transform: async (cb) => cb({ add: (d) => skills.set(d.name, d) }) },
      session: {
        hook: async (_kind, cb) => {
          hooks.push(cb);
          return { dispose() {} };
        },
        prompt: async (p) => prompts.push(p),
      },
    },
  };
}

const t = makeCtx();
await shim.setup(t.ctx);

// Commands registered from the package command dir.
assert.deepEqual([...t.commands.keys()].sort(), [
  "ponytail",
  "ponytail-audit",
  "ponytail-debt",
  "ponytail-help",
  "ponytail-review",
]);
console.log("ok  5 commands registered");

// Skills registered from the package skills dir, with folded descriptions.
assert.deepEqual([...t.skills.keys()].sort(), [
  "ponytail",
  "ponytail-audit",
  "ponytail-debt",
  "ponytail-help",
  "ponytail-review",
]);
const review = t.skills.get("ponytail-review");
assert.equal(review.id, "ponytail-review");
assert.ok(review.path.endsWith("skills/ponytail-review/SKILL.md"));
assert.match(review.description, /over-engineering/);
assert.match(review.content, /\S/);
console.log("ok  5 skills registered with descriptions and content");

const statePath = path.join(
  process.env.XDG_CONFIG_HOME || path.join(os.homedir(), ".config"),
  "opencode",
  ".ponytail-active"
);
const original = fs.existsSync(statePath) ? fs.readFileSync(statePath, "utf8") : null;
const restore = () =>
  original === null ? fs.rmSync(statePath, { force: true }) : fs.writeFileSync(statePath, original);

try {
  // System injection at full, silence at off.
  fs.writeFileSync(statePath, "full");
  const event = { system: [] };
  t.hooks[0](event);
  assert.equal(event.system.length, 1);
  assert.equal(event.system[0].type, "text");
  assert.match(event.system[0].text, /Ponytail/);
  console.log("ok  full mode injects a text system part");

  fs.writeFileSync(statePath, "off");
  const off = { system: [] };
  t.hooks[0](off);
  assert.equal(off.system.length, 0);
  console.log("ok  off mode injects nothing");

  // /ponytail <level> persists the mode and forwards the prompt.
  fs.writeFileSync(statePath, "full");
  await t.commands.get("ponytail").execute({
    sessionID: "ses_test",
    prompt: { text: "Switch to ponytail ultra mode." },
    delivery: "steer",
  });
  assert.equal(fs.readFileSync(statePath, "utf8"), "ultra");
  assert.equal(t.prompts.length, 1);
  assert.equal(t.prompts[0].sessionID, "ses_test");
  assert.equal(t.prompts[0].delivery, "steer");
  assert.equal(t.prompts[0].text, "Switch to ponytail ultra mode.");
  console.log("ok  /ponytail ultra persisted and forwarded the prompt");

  // Unrelated commands must not change the mode.
  await t.commands.get("ponytail-help").execute({
    sessionID: "ses_test",
    prompt: { text: "help" },
    delivery: "queue",
  });
  assert.equal(fs.readFileSync(statePath, "utf8"), "ultra");
  assert.equal(t.prompts.length, 2);
  console.log("ok  other commands leave the mode alone");
} finally {
  restore();
}
