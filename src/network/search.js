import request from "./request";

export function search(config) {
  return request({
    url: '/cloudsearch',
    params: {
      keywords: config.keywords,
      limit: config.limit || 30,
      offset: config.offset || 0,
      type: config.type || 1
    }
  })
}