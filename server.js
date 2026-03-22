/**
 * server.js - Simple Node.js Web Server
 * Assignment 6: Creating a Simple Web Server with Node.js
 *
 * This server uses the built-in `http` module to handle routing,
 * serve HTML pages, and return appropriate HTTP status codes.
 */

const http = require("http");
const fs = require("fs");
const path = require("path");

// ─── Configuration ────────────────────────────────────────────────────────────
const PORT = 3000;
const PAGES_DIR = path.join(__dirname, "pages");

// ─── Helper: Read and Serve an HTML File Asynchronously ───────────────────────
/**
 * Reads an HTML file from disk and writes it to the HTTP response.
 * Uses fs.readFile (async) so the event loop is never blocked.
 *
 * @param {http.ServerResponse} res   - The outgoing HTTP response object
 * @param {string}              file  - Filename inside the /pages directory
 * @param {number}              code  - HTTP status code to send (e.g. 200, 404)
 */
function servePage(res, file, code = 200) {
  const filePath = path.join(PAGES_DIR, file);

  // Asynchronously read the file — non-blocking I/O
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      // If the target file itself is missing, fall back to a plain-text error
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("500 Internal Server Error: Could not load page.");
      return;
    }

    // Send the HTML content with the specified status code
    res.writeHead(code, { "Content-Type": "text/html; charset=utf-8" });
    res.end(data);
  });
}

// ─── Router ───────────────────────────────────────────────────────────────────
/**
 * Maps URL pathnames to their corresponding HTML files and HTTP status codes.
 * Add new routes here to extend the server.
 */
const routes = {
  "/":        { file: "home.html",    code: 200 },
  "/home":    { file: "home.html",    code: 200 },
  "/about":   { file: "about.html",   code: 200 },
  "/contact": { file: "contact.html", code: 200 },
  "/services":{ file: "services.html",code: 200 },
};

// ─── Create the HTTP Server ───────────────────────────────────────────────────
const server = http.createServer((req, res) => {
  // Parse only the pathname (ignore query strings like ?foo=bar)
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const pathname = url.pathname;

  console.log(`[${new Date().toISOString()}]  ${req.method}  ${pathname}`);

  // Look up the route; serve 404 page for unknown paths
  const route = routes[pathname];

  if (route) {
    servePage(res, route.file, route.code);
  } else {
    // 404 — route not found
    servePage(res, "404.html", 404);
  }
});

// ─── Start Listening ──────────────────────────────────────────────────────────
server.listen(PORT, () => {
  console.log("─".repeat(50));
  console.log(`  🚀  Server running at http://localhost:${PORT}`);
  console.log("─".repeat(50));
  console.log("  Routes available:");
  Object.keys(routes).forEach((r) => console.log(`    GET ${r}`));
  console.log("─".repeat(50));
});

// ─── Graceful Shutdown ────────────────────────────────────────────────────────
process.on("SIGINT", () => {
  console.log("\n  Server shutting down gracefully…");
  server.close(() => process.exit(0));
});