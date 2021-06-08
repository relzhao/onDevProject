/*
 * @Author: your name
 * @Date: 2021-04-01 21:49:22
 * @LastEditTime: 2021-06-08 23:59:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo-vue\my-app\.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:vue/essential", "@vue/prettier"],
  rules: {
    "generator-star-spacing": "off",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/no-parsing-error": [
      2,
      {
        "unexpected-solidus-in-tag": false,
      },
    ],
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 7,
    sourceType: "module",
    ecmaFeatures: {
      // 添加ES特性支持，使之能够识别ES6语法
      jsx: true,
    },
  },
};
2,
  {
    before: true,
    after: true,
  },
  (module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
      es6: true,
    },
    extends: ["eslint:recommended", "plugin:vue/essential", "@vue/prettier"],
    rules: {
      "generator-star-spacing": "off",
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
      "vue/no-parsing-error": [
        2,
        {
          "unexpected-solidus-in-tag": false,
        },
      ],
    },
    parserOptions: {
      parser: "babel-eslint",
      ecmaVersion: 7,
      sourceType: "module",
      ecmaFeatures: {
        // 添加ES特性支持，使之能够识别ES6语法
        jsx: true,
      },
    },
  });
