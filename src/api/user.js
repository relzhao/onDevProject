import request from "@/utils/request";

export function login(data) {
  request({
    url: "/yf-admin/user/login",
    method: "post",
    data,
  });
}
