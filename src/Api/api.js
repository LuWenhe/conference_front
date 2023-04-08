//封装路径请求
import {request} from '@/network/request'

// 根据新闻种类id获取小标题
export const getMinTitle = newsTypeId => {
  return request({
    method: 'GET',
    url: `/news_category/list/${newsTypeId}`
  })
}
// 分页查询指定小标题下的新闻列表
export const getNewsList = data => {
  return request({
    method: 'POST',
    url: '/news/list',
    params: data
  })
}
// 根据newsId获取单篇篇新闻内容
export const getOneNew = newsId => {
  return request({
    method: 'GET',
    url: `/news/main/${newsId}`
  })
}
// 根据newCategoryId获取单篇新闻内容
export const getOneNewByNewCategoryId = newsCategoryId => {
  return request({
    method: 'GET',
    url: `/news/get/${newsCategoryId}`
  })
}
// 修改新闻
export const update = newsObj => {
  return request({
    method: 'POST',
    url: '/news/update',
    data: newsObj
  })
}
// 删除新闻
export const deleteNew = newsId => {
  return request({
    method: 'POST',
    url: '/news/delete',
    params: newsId
  })
}
// 根据新闻标题进行模糊查询
export const fuzzy = data => {
  return request({
    method: 'POST',
    url: '/news/fuzzy',
    params: data
  })
}
// 上传图片
export const addImg = (formData) => {
  return request({
    method: 'POST',
    url: '/news/addImage',
    data: formData
  })
}
// 删除图片
export const deleteImg = (formData) => {
  return request({
    method: 'POST',
    url: '/news/deleteImage',
    data: formData
  })
}
// 添加新闻内容
export const addContent = newsObj => {
  return request({
    method: 'POST',
    url: '/news/addContent',
    data: newsObj
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
