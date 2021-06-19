import * as Colors from "https://deno.land/std@0.99.0/fmt/colors.ts";
import { baseDirs } from "https://deno.land/x/directories@v0.3.3/mod.ts";
import { existsSync } from "https://deno.land/std@0.99.0/fs/mod.ts";
import { createHash } from "https://deno.land/std@0.99.0/hash/mod.ts";
import { writeJson } from "@utils/json.ts";
import { time } from "https://deno.land/x/time.ts@v2.0.1/mod.ts";
import {readCfgFile } from "@config/readJsoncfg.ts";

const cacheDir = baseDirs.setup().cacheDir;

function writeLogs(type: string, msg: string){
    const hash = createHash("md5")
    hash.update("test")
    const randPrefix = hash.toString

    const data: Record<string,unknown> = {
        logDate: time.toString(),
        message: msg,
        type: type,
        dir: cacheDir
    }
    writeJson(`${cacheDir}/${randPrefix}-puppylogs.json`, data)
}


const logger = ( type: string, msg: string) => {
    const createLogs = readCfgFile().loggerFiles
    if (createLogs){
        if (existsSync(cacheDir)){
            Deno.mkdir(cacheDir)
            info("Created the logsDir")
            writeLogs(type,msg)
        } else {
            writeLogs(type,msg)
        }
    }
};

const error = (text: string) => {
  console.log(
    Colors.red(`[ERROR] `) + text,
  );
  logger("ERROR", text)
  Deno.exit(1);
};

const info = (text: string) => {
  console.log(
    Colors.blue(`[INFO] `) + text,
  );
  logger("INFO",text)
};

const success = (text: string) => {
  console.log(
    Colors.green(`[SUCCESS] `) + text,
  );
  logger("INFO", text)
};

const warn = (text: string) => {
  console.log(
    Colors.yellow("[WARN] ") + text,
  );
  logger("WARN", text)
};

export { error, info, success, warn };
