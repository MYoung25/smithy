import React from "react";
import path from "path";
import fs from "node:fs/promises";
import { renderToString } from "react-dom/server";

import App from "@/App";
// get app root directory
const root = path.dirname(import.meta.dirname);
const distDir = path.resolve(root, "dist");
const indexhtml = path.resolve(distDir, "index.html");

await checkAssetsExist();
const html = await fs.readFile(indexhtml, "utf8");

// add the rendered string to the html output
const ssgHtml = html.replace(
  `<div id="root"></div>`,
  `<div id="root">${renderToString(<App />)}</div>`,
);

// Write the navbar file out for consumption
fs.writeFile(path.resolve(distDir, "index.html"), ssgHtml);

// throw a more useful error if the project hasn't been built
async function checkAssetsExist() {
  try {
    await fs.stat(indexhtml);
  } catch (e) {
    throw new Error(
      `Index not found: ${indexhtml}, have you built the project yet?`,
    );
  }
}
