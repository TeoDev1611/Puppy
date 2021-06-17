import { Command } from "https://deno.land/x/cliffy/command/mod.ts";
import { writeConfigDefault } from "./readJsoncfg.ts";

// Create the config command
const cfgCmd = new Command()
  .description("Configuration command for options of the Puppy Manager")
  .option(
    "-p, --path [type:boolean]",
    "Get the configuration path for the config command",
    {
      standalone: true,
    },
  ).action(({ path }) => {
    if (path == true) {
      writeConfigDefault();
    }
  });

export { cfgCmd };
