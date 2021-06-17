import { projectDirs } from "https://deno.land/x/directories/mod.ts";

function writeConfigDefault() {
  const dir = projectDirs.load("com", "TeoDev1611", "puppy");
  console.log(dir.preferenceDir);
}

export { writeConfigDefault };
