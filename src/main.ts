import { Command } from "https://deno.land/x/cliffy@v0.19.2/command/mod.ts";
import { cfgCmd } from "./config/cfgCmd.ts";
import { installCmd } from "./install/installCmd.ts";

await new Command()
  // Default options for the program
  .name("puppy")
  .version("0.0.1")
  .description("A Vim Package Manager powered by Deno and Dogs :p")
  // Config Command
  .command("config", cfgCmd)
  // Install command
  .command("install", installCmd)
  // Parsing elements
  .parse(Deno.args);
