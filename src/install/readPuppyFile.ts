import { existsSync } from "https://deno.land/std@0.99.0/fs/mod.ts";

async function readContent() {
  const currentDir = Deno.cwd();
  const puppyPath = await existsSync(`${currentDir}/puppy.json`);
  console.log(puppyPath);
}

export { readContent };
