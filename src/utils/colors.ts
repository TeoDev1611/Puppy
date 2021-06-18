import * as Colors from "https://deno.land/std@0.99.0/fmt/colors.ts";

const error = (text: string) => {
  console.log(
    Colors.red(`[ERROR] `) + text,
  );
  Deno.exit(1);
};

const info = (text: string) => {
  console.log(
    Colors.blue(`[INFO] `) + text,
  );
};

const success = (text: string) => {
  console.log(
    Colors.green(`[SUCCESS] `) + text,
  );
};

const warn = (text: string) => {
  console.log(
    Colors.yellow("[WARN] ") + text,
  );
};

export { error, info, success, warn };
