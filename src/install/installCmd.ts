import { Command } from "https://deno.land/x/cliffy/command/mod.ts";

const installCmd = new Command()
  .description("Install the plugins from the puppy.json file");
