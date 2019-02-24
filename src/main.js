// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import Resource from "vue-resource"

import router from './router'







//import './lib/css/basic.css'  //全局用css样式
//import mui from './lib/mui/js/mui.js'

Vue.use(Resource)


Vue.config.productionTip = false




/*
  Vue.prototype.mui=mui
*/
/* { default global options } *///css注意具体看使用的版本是否需要引入样式，以及具体位置。
/*  import VueAwesomeSwiper from 'vue-awesome-swiper'
 import 'swiper/dist/css/swiper.css'
 Vue.use(VueAwesomeSwiper) */

import './assets/mui/css/mui.css'
import './assets/css/base.css'

//  import VueAwesomeSwiper from 'vue-awesome-swiper'
//  import 'swiper/dist/css/swiper.css'//这里注意具体看使用的版本是否需要引入样式，以及具体位置。
//  Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
/* 下列为全局注册头部和底部组件*/
import header from "./components/header.vue"   //引入组件
import footer from "./components/footer.vue"   //引入组件
Vue.component("headerc",header);
Vue.component("footerc",footer);

new Vue({
  el: '#app',
  router:router,
  components: { App },
  template: '<App/>'
})


