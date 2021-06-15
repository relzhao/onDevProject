/*
 * @Author: rel zhao
 * @Date: 2021-06-10 17:23:20
 * @LastEditTime: 2021-06-10 17:52:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /onDevProject/src/store/getters.js
 */

const getters = {
  name: (state) => state.user.name,
  token: (state) => state.user.token,
  role: (state) => state.user.role,
};

export default getters;
