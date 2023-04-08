import Vue from 'vue'
import App from './App'
import router from './router/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/main.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  document.title = '2023 International Conference on Data Science and Knowledge Engineering (ICDSKE 2023)'
  next()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
