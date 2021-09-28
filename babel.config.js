/*
 * @Author: your name
 * @Date: 2021-04-25 00:29:29
 * @LastEditTime: 2021-09-22 10:37:26
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /onDevProject/babel.config.js
 */
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        style: true,
      },
      "vant",
    ],
  ],
};
