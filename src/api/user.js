import request from "@/utils/request";

export function login(data) {
  console.log("request:", data);
  request({
    url: "/yf-admin/user/login",
    method: "post",
    data,
  });
}
