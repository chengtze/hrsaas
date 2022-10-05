import request from '@/utils/request'

export function login(data) {
  //返回一个promise对象
  return request({
    url: '/sys/login',
    method: 'post',
    data: data
  })
}

export function getInfo(token) {
  // return request({
  //   url: '/vue-admin-template/user/info',
  //   method: 'get',
  //   params: { token }
  // })
}

export function logout() {
  // return request({
  //   url: '/vue-admin-template/user/logout',
  //   method: 'post'
  // })
}
