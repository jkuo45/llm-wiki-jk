// graphify OpenCode plugin
// Injects a knowledge graph reminder before bash tool calls when the graph exists.
//
// IMPORTANT: keep the reminder string free of backticks and $(...) constructs.
// The hook prepends `echo "<reminder>" && <cmd>` to the user's bash command;
// backticks inside the double-quoted echo trigger bash command substitution,
// which both corrupts tool output and silently executes the very graphify
// command we are only suggesting. Plain words render fine in opencode's TUI.
import { existsSync } from "node:fs";
import { join } from "node:path";
import { Plugin } from "@opencode/plugin";

const REMINDER =
  "[graphify] knowledge graph at graphify-out/. For focused questions, run graphify query with your question (scoped subgraph, usually much smaller than GRAPH_REPORT.md) instead of grepping raw files. Read GRAPH_REPORT.md only for broad architecture context.";

export default Plugin.define({
  id: "graphify",
  async setup(ctx) {
    let reminded = false;

    // Skip registration entirely when the graph has not been built yet.
    if (!existsSync(join(ctx.location.directory, "graphify-out", "graph.json"))) return;

    await ctx.tool.hook("execute.before", (event) => {
      if (reminded) return;
      if (event.tool !== "bash") return;

      /** @type {{ command?: string } | undefined} */
      const input = event.input;
      if (!input?.command) return;

      // ';' not '&&' — Windows PowerShell 5.1 rejects '&&' as a statement
      // separator, breaking the first bash command of the session (#1646).
      input.command = `echo "${REMINDER}" ; ` + input.command;
      reminded = true;
    });
  },
});
