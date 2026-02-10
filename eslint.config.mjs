import next from "eslint-config-next";
import prettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";

const eslintConfig = [
  ...next, // bu array (flat config), spread OK
  configPrettier, // bu object, SPREAD QILINMAYDI

  {
    plugins: { prettier },
    rules: {
      "prettier/prettier": "warn",
      "@next/next/no-page-custom-font": "off",
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;
