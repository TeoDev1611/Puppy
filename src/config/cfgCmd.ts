import { Command } from "https://deno.land/x/cliffy@v0.19.2/command/mod.ts";
import { dir, writeConfigDefault } from "./readJsoncfg.ts";
import * as log from "../utils/colors.ts";

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
      log.info(`The path of the configuration is ${dir}`);
    }
  }).option(
    "-s, --setup [type:boolean]",
    "Create the configuration directory and write the defaults options",
  ).action(
    ({ setup }) => {
      if (setup == true) {
        writeConfigDefault();
      }
    },
  );

export { cfgCmd };
