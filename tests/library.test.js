
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const projectRoot = path.join(__dirname, "..");

test("main HTML file exists", () => {
  assert.ok(fs.existsSync(path.join(projectRoot, "index.html")));
});

test("HTML links to the stylesheet", () => {
  const html = fs.readFileSync(
    path.join(projectRoot, "index.html"),
    "utf8"
  );

  assert.match(html, /href=["']style\.css["']/);
});

test("HTML loads the JavaScript file", () => {
  const html = fs.readFileSync(
    path.join(projectRoot, "index.html"),
    "utf8"
  );

  assert.match(html, /src=["']script\.js["']/);
});

test("JavaScript file exists and is not empty", () => {
  const js = fs.readFileSync(
    path.join(projectRoot, "script.js"),
    "utf8"
  );

  assert.ok(js.trim().length > 0);
});

test("JavaScript has valid syntax", () => {
  const js = fs.readFileSync(
    path.join(projectRoot, "script.js"),
    "utf8"
  );

  assert.doesNotThrow(() => new Function(js));
});
