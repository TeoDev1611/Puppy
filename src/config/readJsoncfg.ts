import { projectDirs } from "https://deno.land/x/directories@v0.3.3/mod.ts";
import { existsSync } from "https://deno.land/std@0.99.0/fs/mod.ts";
import * as log from "@utils/colors.ts";
import { writeJson, getJson } from "@utils/json.ts";

// Default content

const defaultConfig = {
  vimOrNeovim: "neovim",
  configPath: "example",
  loggerFiles : true
};

const dir = projectDirs.load("com", "TeoDev1611", "puppy").preferenceDir;

function writeConfigDefault() {
  if (existsSync(`${dir}`)) {
    log.info("Configuration already");
  } else {
    log.info("Creating the configuration directory");
    Deno.mkdir(dir);
    log.info("Creating the default config values");
    writeJson(`${dir}/config.json`, defaultConfig);
    log.success("Succesfuly setup the configuration");
  }
}

function readCfgFile(): Record<string,unknown> {
    if (existsSync(`${dir}/config.json`)) {
        const data = getJson(`${dir}/config.json`)
        return data
    } else {
        log.error("Config file not exist generate one with the --setup")
        return {data: null, error: true}
    }
}


export { dir, writeConfigDefault, readCfgFile };
