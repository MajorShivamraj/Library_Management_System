
import js from "@eslint/js";

export default [
  {
    files: ["script.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      globals: {
        window: "readonly",
        document: "readonly",
        localStorage: "readonly",
        console: "readonly",
        alert: "readonly",
        confirm: "readonly",
        Blob: "readonly",
        URL: "readonly",
        Date: "readonly",
        Math: "readonly",
        JSON: "readonly",
        Array: "readonly",
        Object: "readonly",
        String: "readonly",
        Number: "readonly",
        Set: "readonly",
        Map: "readonly",
        Intl: "readonly",
        Error: "readonly",
        RegExp: "readonly",
        parseInt: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly"
      }
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-unused-vars": "warn"
    }
  }
];
