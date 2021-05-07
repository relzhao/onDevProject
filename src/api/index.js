import request from "../utils/request";

function getMock(data) {
  return request({
    url: "/vue-demo/user/login",
    method: "get",
    data,
  });
}
export { getMock };
