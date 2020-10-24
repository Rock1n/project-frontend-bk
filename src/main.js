import Vue from 'vue'
import App from './App.vue'
import router from "./router/index";
import store from "./store/store"

console.log('程序启动')

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)//用App.vue来渲染（render）index.html的'#app'
})
