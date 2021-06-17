import { exists } from "https://deno.land/std/fs/mod.ts";

function readContent() {
  const currentDir = Deno.cwd();
  const puppyPath = exists(`${currentDir}/puppy.json`);
  console.log(puppyPath);
}

export { readContent };
