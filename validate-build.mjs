import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

async function listFiles(directory, prefix = "") {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const name = prefix + entry.name;
    if (entry.isDirectory()) {
      files.push(...await listFiles(path.join(directory, entry.name), name + "/"));
    } else if (entry.isFile()) {
      files.push(name);
    }
  }
  return files;
}

export async function validateBuild(directory) {
  const files = new Set(await listFiles(directory));
  if (!files.has("index.html")) throw new Error("O build não contém index.html.");

  const references = new Set();
  for (const file of files) {
    if (!/\.(html|css)$/.test(file)) continue;
    const content = await readFile(path.join(directory, file), "utf8");
    const matches = file.endsWith(".html")
      ? content.matchAll(/\b(?:src|href)\s*=\s*["']([^"']+)["']/gi)
      : content.matchAll(/url\(\s*["']?([^\s"')]+)["']?\s*\)/gi);

    for (const match of matches) {
      const url = match[1];
      if (/^(?:#|[a-z][a-z\d+.-]*:|\/\/)/i.test(url)) continue;
      const pathname = decodeURIComponent(url.split(/[?#]/)[0]);
      const reference = path.posix.normalize(pathname.startsWith("/")
        ? pathname.slice(1)
        : path.posix.join(path.posix.dirname(file), pathname));
      if (!files.has(reference)) {
        throw new Error(`Recurso ausente ou com capitalização incorreta: ${file} → ${url}`);
      }
      references.add(reference);
    }
  }
  console.log(`Validação: ${files.size} arquivos de saída e ${references.size} recursos locais encontrados.`);
}
