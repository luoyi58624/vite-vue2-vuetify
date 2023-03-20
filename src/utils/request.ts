import axios from 'axios'
import { Notify } from 'vuetify-message-snackbar'
import { isEmpty } from '@/utils/commons'
import router from '@/router'

const request = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000
})

// 请求拦截
request.interceptors.request.use(
  request => {
    if (!isEmpty(localStorage.getItem('token'))) {
      request.headers.token = localStorage.getItem('token')
    }
    return request
  },
  error => {
    return error
  }
)

// 响应拦截
request.interceptors.response.use(
  response => {
    // 如果为200直接返回服务器对象
    if (response.data.code == 200) {
      return response.data
    }
    if (response.data.code == 401) {
      router.replace('/login').then(() => {
        Notify.error(response.data.message)
      })
      return
    }
    Notify.error(response.data.message)
    return Promise.reject(response.data)
  },
  error => {
    let message
    if (error.message.indexOf('Network Error') !== -1) {
      message = '无法连接服务器'
    } else if (error.message.indexOf('timeout') !== -1) {
      message = '服务器请求超时'
    } else if (error.response.status === 404) {
      message = '请求接口不存在'
    } else if (error.response.status === 500) {
      message = '服务内部错误'
    }
    Notify.error(message)
    return Promise.reject(error)
  }
)
export { axios, request }
