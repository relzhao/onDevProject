/*
 * @Author: rel zhao
 * @Date: 2021-06-10 17:23:20
 * @LastEditTime: 2021-09-15 08:40:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /onDevProject/src/store/getters.js
 */

const getters = {
  name: (state) => state.user.name,
  token: (state) => state.user.token,
  roles: (state) => state.user.roles,
  permission_routes: (state) => state.permission.routes,
  customers: (state) => state.customer.customers,
  sidebar: (state) => state.app.sidebar,
};

export default getters;
