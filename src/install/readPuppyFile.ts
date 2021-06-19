import { existsSync } from "https://deno.land/std@0.99.0/fs/mod.ts";
import { getJson } from "@utils/json.ts";
import * as log from "@utils/colors.ts";

const currentDir = Deno.cwd();
function readContent(): Record<string, unknown> {
  if (existsSync(`${currentDir}/puppy.json`)) {
    const data = getJson(`${currentDir}/puppy.json`);
    return data;
  } else {
    log.error("File not found check if the **puppy.json** exists");
    return { "error": "File not found" };
  }
}

export { currentDir, readContent };
