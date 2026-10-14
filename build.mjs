import { mkdir, cp, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const destination = path.join(root, "dist");
if (path.dirname(destination) !== root || path.basename(destination) !== "dist") {
  throw new Error("Destino de build inválido.");
}
await rm(destination, { recursive: true, force: true });
await mkdir(destination, { recursive: true });
for (const name of ["index.html", "styles.css", "phone.css", "script.js", "public", "THIRD-PARTY-NOTICES.md"]) {
  await cp(path.join(root, name), path.join(destination, name), { recursive: true });
}
console.log("Build estático concluído em dist/.");
