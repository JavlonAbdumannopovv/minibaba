import prettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";

export default [
  ...configPrettier,
  {
    plugins: { prettier },
    rules: {
      "prettier/prettier": "warn",
      "@next/next/no-page-custom-font": "off",
    },
  },
];
