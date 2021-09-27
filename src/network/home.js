import { request } from "./request";
export function getHome() {
  return request({
    url: "/home/multidata",
  });
}

export function getdata(type, page) {
  return request({
    url: "/home/data",
    params: {
      type,
      page,
    },
  });
}
