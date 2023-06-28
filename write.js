import { readFileSync, writeFileSync } from "fs";
let content = JSON.parse(readFileSync("package.json", "utf8"));
writeFileSync("./dist/package.json", JSON.stringify(content, null, "\t"));
