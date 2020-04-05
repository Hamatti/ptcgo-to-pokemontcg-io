var csvLoader = require("csv-load-sync");
const fs = require("fs");

INPUT_FOLDER = "./cards";
OUTPUT_FILE = "cards.json";

const csvFiles = fs
  .readdirSync(INPUT_FOLDER)
  .filter((filename) => filename.endsWith(".csv"));

const mapping = {};

csvFiles.forEach((filename) => {
  console.log(`Reading ${filename}`);

  var csv = csvLoader(`${INPUT_FOLDER}/${filename}`);

  csv.forEach((row) => {
    const { name, ptcgo, api, notes } = row;
    if (name === "name") {
      return;
    }

    mapping[ptcgo] = { api, notes: notes !== "" ? notes : null };
  });
});

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(mapping, null, 2));
console.log(`Created a JSON file with ${Object.values(mapping).length} cards`);
