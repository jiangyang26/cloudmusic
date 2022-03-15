import request from "./request";

export function banners() {
  return request({
    url: '/banner'
  })
}

export function songSheet() {
  return request({
    url: '/personalized',
    params: {
      limit: 10
    }
  })
}

export function sole() {
  return request({
    url: '/personalized/privatecontent'
  })
}

export function newMusic() {
  return request({
    url: '/personalized/newsong',
    params: {
      limit: 12
    }
  })
}

export function recommendMV() {
  return request({
    url: '/personalized/mv'
  })
}

export function getMusicUrl(id) {
  return request({
    url: '/song/url',
    params: {
      id
    }
  })
}

export function getNewSongExpress(type) {
  return request({
    url: '/top/song',
    params: {
      type
    }
  })
}

export function getNewSongGrounding(config) {
  return request({
    url: '/top/album',
    params: config
  })
}
