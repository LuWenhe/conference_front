//封装路径请求
import {request} from '@/network/request'
// // 导航栏列表
// export const getNavList = data => {
//   return request({
//     method: 'GET',
//     url: '/news_type/all',
//     params:data,
//   })
// }
// 获取小标题
export const getMinTitle = data => {
  return request({
    method: 'GET',
    url: `/news_category/list/${data}`
  })
}
// 获取新闻展示列表
export const getNewsList = data => {
  return request({
    method: 'POST',
    url: '/news/list',
    params: data
  })
}
// 根据新闻newId获取单篇篇新闻
export const getOneNew = newId => {
  return request({
    method: 'GET',
    url: `/news/main/${newId}`
  })
}
export const getOneNewByNewCategoryId = newCategoryId => {
  return request({
    method: 'GET',
    url: `/news/get/${newCategoryId}`
  })
}
// 修改新闻
export const update = data => {
  return request({
    method: 'POST',
    url: '/news/update',
    data: data
  })
}
// 删除新闻
export const deleteNew = data => {
  return request({
    method: 'POST',
    url: '/news/delete',
    params: data
  })
}
// 模糊查询
export const fuzzy = data => {
  return request({
    method: 'POST',
    url: '/news/fuzzy',
    params: data
  })
}
// 添加新闻
export const add = (data, fd) => {
  return request({
    method: 'POST',
    url: '/news/add',
    data: formData,
    params: data
  })
}
export const addImg = (formData) => {
  return request({
    method: 'POST',
    url: '/news/addImage',
    data: formData
  })
}
export const deleteImg = (formData) => {
  return request({
    method: 'POST',
    url: '/news/deleteImage',
    data: formData
  })
}
export const addContent = data => {
  return request({
    method: 'POST',
    url: '/news/addContent',
    data: data
  })
}
// 登录
export const login = data => {
  return request({
    method: 'POST',
    url: '/login',
    data: data
  })
}
// 获取普通管理员列表
export const getmain = () => {
  return request({
    method: 'GET',
    url: '/admin/list'
  })
}
// 超管修改普管账号密码
export const editAccount = data => {
  return request({
    method: 'POST',
    url: '/admin/updatePassword',
    params: data
  })
}
// 删除普通管理员
export const deleteAd = data => {
  return request({
    method: 'POST',
    url: '/admin/delete',
    params: data
  })
}
// 注册普通管理员
export const addAd = data => {
  return request({
    method: 'POST',
    url: '/admin/add',
    params: data
  })
}
// 文件上传
export const fileUpload = fd => {
  return request({
    method: 'POST',
    url: '/uploading',
    data: fd
  })
}
