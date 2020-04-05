const fs = require("fs");

if (process.argv.length !== 5) {
  console.log(`Usage: node format.js [filename] [PTCGO set code] [API set code]

Example: node format.js cards/xy-primal-clash.csv PRC xy5`);

  process.exit(0);
}

const [, , filename, ptcgo, api] = process.argv;

const file = fs.readFileSync(filename, "utf8");

const lines = file.split("\n");

const newLines = [
  "name,ptcgo,api,notes",
  ...lines
    .map((line) => {
      const regex = "\\*\\s\\d+\\s([A-Za-z0-9é' .&()♀♂#-]+)\\s(PRC (\\d+))";
      const matches = line.match(regex);

      if (matches) {
        const [, name, fullset, number, ,] = matches;
        return `"${name}","${fullset},${api}-${number},`;
      } else {
        return null;
      }
    })
    .filter((line) => line),
];

fs.writeFileSync(filename, newLines.join("\n"));
