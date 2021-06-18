import * as log from "../utils/colors.ts";

function writeJson(path: string, data: Record<string, unknown>) {
  try {
    Deno.writeTextFile(path, JSON.stringify(data));
    log.success("Succesfuly writed the data");
  } catch (e) {
    log.error(e.message);
  }
}

function getJson(filePath: string): Record<string, unknown> {
  const content = JSON.parse(Deno.readTextFileSync(filePath));
  return content;
}

export { getJson, writeJson };
