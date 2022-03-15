import request from "./request";

export function lyric(id) {
  return request({
    url: '/lyric',
    params: {
      id: id
    }
  })
}
