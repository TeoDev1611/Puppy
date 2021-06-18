import { Command } from "https://deno.land/x/cliffy@v0.19.2/command/mod.ts";

const installCmd = new Command()
  .description("Install the plugins from the puppy.json file");

export { installCmd };
