import { Command } from "https://deno.land/x/cliffy/command/mod.ts";
import { cfgCmd } from "./config/cfgCmd.ts";

await new Command()
  // Default options for the program
  .name("puppy")
  .version("0.0.1")
  .description("A Vim Package Manager powered by Deno and Dogs :p")
  // Config Command
  .command("config", cfgCmd)
  // Parsing elements
  .parse(Deno.args);
