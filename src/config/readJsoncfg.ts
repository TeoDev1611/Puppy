import { projectDirs } from "https://deno.land/x/directories@v0.3.3/mod.ts";
import { existsSync } from "https://deno.land/std@0.99.0/fs/mod.ts";
import * as log from "../utils/colors.ts";
import { writeJson } from "../utils/writeJson.ts";

// Default content

const defaultConfig = {
  vimOrNeovim: "neovim",
  configPath: "example",
};

const dir = projectDirs.load("com", "TeoDev1611", "puppy").preferenceDir;

function writeConfigDefault() {
  if (existsSync(`${dir}`)) {
    console.log("Exisit");
    console.log(existsSync(`${dir}`));
  } else {
    log.info("Creating the configuration directory");
    Deno.mkdir(dir);
    log.info("Creating the default config values");
    writeJson(`${dir}/config.json`, defaultConfig);
    log.success("Succesfuly setup the configuration")
  }
}

export { writeConfigDefault };
