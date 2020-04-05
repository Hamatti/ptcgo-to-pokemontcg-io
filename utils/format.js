const fs = require("fs");
const yargs = require("yargs");

const argv = yargs
  .option("debug", {
    alias: "d",
    description: "Run with debug option, don't write to file",
    type: "boolean",
  })
  .help()
  .alias("help", "h").argv;

if (argv._.length !== 3) {
  console.log(`Usage: node format.js [filename] [PTCGO set code] [API set code]

Example: node format.js cards/xy-primal-clash.csv PRC xy5`);

  process.exit(0);
}

const [filename, ptcgo, api] = argv._;
const file = fs.readFileSync(filename, "utf8");

const lines = file.split("\n");

const newLines = [
  "name,ptcgo,api,notes",
  ...lines
    .map((line) => {
      const regex = `\\*\\s\\d+\\s([A-Za-z0-9é' ?.&()♀♂#-]+)\\s(${ptcgo} (\\d+))`;
      const matches = line.match(regex);

      if (argv.debug) {
        console.log(`Looking at line: ${line}`);
        console.log(`Regex found: ${matches}`);
      }

      if (matches) {
        const [, name, fullset, number, ,] = matches;
        return `"${name}","${fullset}",${api}-${number},`;
      } else {
        return null;
      }
    })
    .filter((line) => line),
];

if (!argv.debug) {
  fs.writeFileSync(filename, newLines.join("\n"));
}
