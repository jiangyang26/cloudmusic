import axios from 'axios'

export default function request(config) {
  return axios({
    baseURL: 'http://localhost:3000/',
    method: config.method || 'get',
    data: config.data || {},
    params: config.params || {},
    url: config.url,
    timeout: 10000
  })
}