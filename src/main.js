import Vue from 'vue'
import App from './App'
import router from './router/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/main.css'
import axios from 'axios'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import Quill from 'quill'
import imageResize from 'quill-image-resize'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
window.Quill = Quill
Quill.register('modules/imageResize', imageResize)

// var fonts = ['SimSun', 'SimHei','Microsoft-YaHei','KaiTi','FangSong','Arial','Times-New-Roman','sans-serif'];
// var Font = Quill.import('formats/font');
// Font.whitelist = fonts; //将字体加入到白名单
// Quill.register(Font, true);
Vue.use(VueQuillEditor)
Vue.use(mavonEditor)

axios.defaults.withCredentials = true
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
//把这个包挂载到Vue的原型对象上
// Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(ElementUI)

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  document.title = '2023 International Conference on Data Science and Knowledge Engineering (ICDSKE 2023)'
  const tokenStr = window.sessionStorage.getItem('token')
  if (to.path === '/administrator/main' && !tokenStr) return next('/login')
  if (to.path === '/administrator/admain' && !tokenStr) return next('/login')
  if (to.path === '/administrator' && !tokenStr) return next('/login')
  if (to.path === '/administrator/editInfo' && !tokenStr) return next('/login')
  if (to.path === '/administrator/welcome' && !tokenStr) return next('/login')
  // if (!tokenStr) return next('/login')
  next()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
