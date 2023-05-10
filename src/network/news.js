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
export const getImagesByNewCategoryId = newsCategoryId => {
  return request({
    method: 'GET',
    url: `/getImages/${newsCategoryId}`
  })
}
