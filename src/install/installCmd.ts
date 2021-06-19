import { Command } from "https://deno.land/x/cliffy@v0.19.2/command/mod.ts";
import { readContent } from "@install/readPuppyFile.ts";

const installCmd = new Command()
  .description("Install the plugins from the puppy.json file")
  .option(
    "-l, --list [type:boolean]",
    "List the packages from the puppy.json",
  ).action(
    ({ list }) => {
      if (list == true) {
        readContent();
      }
    },
  );

export { installCmd };
