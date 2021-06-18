import { exec, OutputMode } from "https://deno.land/x/exec@0.0.5/mod.ts";

async function clonePlugin(url: string) {
  const resp = await exec(`git clone https://github.com/${url}.git`, {
    output: OutputMode.Capture,
    continueOnError: false,
  });
  console.log(resp);
}

export { clonePlugin };
