//后台请求方法
import axios from 'axios'
let is_baseURL = 'http://localhost:7070' // 测试环境
// 创建axios实例
const request = axios.create({
  baseURL: is_baseURL,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
})
// response服务器响应拦截器
request.interceptors.response.use(
  response => {
    const res = response.data
    return res  //响应结果
  },
  error => {
    console.log('err', error)
  }
)
export default request

// import axios from "axios"
// let is_baseURL = 'http://localhost:7070' // 测试环境
// export function request(config) {
//   const instance = axios.create({
//     baseURL: is_baseURL,
//     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
//   })
//
//   // 请求拦截器: 请求接口前需要进行拦截
//   instance.interceptors.request.use(config => {
//     return config
//   }, error => {
//     // 在请求错误后要做些什么
//     onsole.log(error)
//   })
//
//   // 响应拦截器: 请求接口并得到响应后进行拦截
//   instance.interceptors.response.use(response => {
//     // 在响应成功后必须要将响应的得到的数据返回,否则在main.js中无法拿到响应成功的数据
//     return response.data
//   }, error => {
//     // 在响应错误后要做些什么
//     console.log(error)
//   })
//
//   // 直接返回一个promise
//   return instance(config)
// }
