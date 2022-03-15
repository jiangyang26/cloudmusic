import request from './request'

export function login(phone, password) {
  return request({
    url: '/login/cellphone',
    method: 'post',
    params: {
      phone: phone,
      password: password
    }
  })
}

export function getUserInfo(id) {
  return request({
    url: '/user/detail',
    params: {
      uid: id
    }
  })
}
