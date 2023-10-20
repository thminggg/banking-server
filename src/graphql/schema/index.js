import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";
import path from "path";
import { fileURLToPath } from "url";

// Load and merge type definitions from the typeDefs folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const typesArray = loadFilesSync(path.join(__dirname, "typeDefs"), {
  extensions: ["graphql"],
});
const mergedTypeDefs = mergeTypeDefs(typesArray);

export default mergedTypeDefs;
