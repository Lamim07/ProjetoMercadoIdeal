import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT || 3000);
const mimeTypes = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "application/javascript; charset=utf-8", ".svg": "image/svg+xml", ".jpg": "image/jpeg", ".webp": "image/webp", ".png": "image/png" };

http.createServer(async (req, res) => {
  if (!["GET", "HEAD"].includes(req.method || "")) {
    res.writeHead(405, { Allow: "GET, HEAD" }); res.end(); return;
  }
  try {
    const url = new URL(req.url || "/", "http://localhost");
    const requestedPath = decodeURIComponent(url.pathname);
    const relative = requestedPath === "/" ? "index.html" : requestedPath.replace(/^\/+/, "");
    const isPublic = relative === "index.html" || relative === "styles.css" || relative === "phone.css" || relative === "script.js" || relative.startsWith("public/");
    const filePath = path.resolve(root, relative);
    if (!isPublic || !filePath.startsWith(root + path.sep)) {
      res.writeHead(404); res.end("Página não encontrada."); return;
    }
    const fileStat = await stat(filePath);
    if (!fileStat.isFile()) throw new Error("Not a file");
    const data = await readFile(filePath);
    res.writeHead(200, { "Content-Type": mimeTypes[path.extname(filePath)] || "application/octet-stream", "X-Content-Type-Options": "nosniff", "Cache-Control": "no-cache" });
    res.end(req.method === "HEAD" ? undefined : data);
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Página não encontrada.");
  }
}).listen(port, "127.0.0.1", () => console.log(`IDEAL disponível em http://localhost:${port}`));
