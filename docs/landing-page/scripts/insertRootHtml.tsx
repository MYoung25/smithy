import React from "react";
import { useSSR, I18nextProvider } from "react-i18next";
import path from "path";
import fs from "node:fs/promises";
import { renderToString } from "react-dom/server";
import i18n from "@/i18n/ssr";
import App from "@/App";

// get app root directory
const root = path.dirname(import.meta.dirname);
const distDir = path.resolve(root, "dist");
const indexhtml = path.resolve(distDir, "index.html");

await checkAssetsExist();
const html = await fs.readFile(indexhtml, "utf8");

const ssgHtml = html.replace(
  `<div id="root"></div>`,
  `<div id="root">${renderToString(
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>,
  )}</div>`,
);

// Write index.html for consumption
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
