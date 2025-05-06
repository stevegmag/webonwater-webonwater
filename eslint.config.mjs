import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable the rule that flags unescaped entities if needed
      "react/no-unescaped-entities": [
        "error",
        {
          forbid: [
            {
              char: ">",
              alternatives: ["&gt;"]
            },
            {
              char: "}",
              alternatives: ["&#125;"]
            }
          ]
        }
      ],
      // Allow specific TypeScript types if needed
      "@typescript-eslint/no-explicit-any": "error"
    }
  }
];

export default eslintConfig;
