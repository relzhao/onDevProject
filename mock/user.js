const tokens = {
  admin: {
    token: "admin-token",
  },
  editor: {
    token: "editor-token",
  },
};

// const users = {
//   "admin-token": {
//     roles: ["admin"],
//     introduction: "I am super administrator",
//     avatar:
//       "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
//     name: "Super Admin",
//   },
//   "editor-token": {
//     roles: ["editor"],
//     introduction: "I am just an editor",
//     avatar:
//       "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
//     name: "Normal Editor",
//   },
// };

module.exports = [
  {
    url: "/vue-demo/user/login",
    type: "get",
    name: "rel",
    data: {
      name: "reld",
    },
    Response: (res) => {
      const { username } = res.body;
      const token = tokens[username];

      if (!token) {
        return {
          code: 6001,
          msg: "账号和密码错误",
        };
      }
      return {
        code: 2000,
        data: token,
      };
    },
  },
];
