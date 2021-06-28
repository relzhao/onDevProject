/*
 * @Author: rel zhao
 * @Date: 2021-06-10 17:23:20
 * @LastEditTime: 2021-06-25 17:15:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /onDevProject/src/store/getters.js
 */

const getters = {
  name: (state) => state.user.name,
  token: (state) => state.user.token,
  roles: (state) => state.user.roles,
};

export default getters;
