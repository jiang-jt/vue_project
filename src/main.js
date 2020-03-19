// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import store from './store'

////MUI:引入mui的样式
import './assets/vendor/mui/dist/css/mui.css';

import './assets/css/global.css';

// 引入ui框架
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

// 图片预览
import VuePreview from 'vue-preview'

// defalut install
Vue.use(VuePreview)

// with parameters install

Vue.use('preview', {
  mainClass: 'pswp--minimal--dark',
  barsSize: { top: 0, bottom: 0 },
  captionEl: false,
  fullscreenEl: false,
  shareEl: false,
  bgOpacity: 0.85,
  tapToClose: true,
  tapToToggleControls: false
})



Vue.use(Mint)

Vue.config.productionTip = false

Vue.prototype.$ajax = Axios
// Axios.defaults.baseURL = '/api'

// 添加请求拦截器
Axios.interceptors.request.use(function(config) {
  // 在发送请求之前做些什么


  Mint.Indicator.open('加载中...');

  return config;
}, function(error) {
  // 对请求错误做些什么

  return Promise.reject(error);
});

// 添加响应拦截器
Axios.interceptors.response.use(function(response) {
  // 对响应数据做点什么
  Mint.Indicator.close();
  return response;
}, function(error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});


// 引入全局组件需要的组件对象 start

import NavBar from '@/components/common/navBar.vue'
import MySwipe from '@/components/common/mySwipe.vue'

// 引入全局组件需要的组件对象 end


// 定义全局组件或过滤器    start


Vue.component('navBar', NavBar) // 使用时用<nav-bar>
Vue.component('my-swipe', MySwipe) // 使用时用<my-swipe>


// 定义全局组件或过滤器    end




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
