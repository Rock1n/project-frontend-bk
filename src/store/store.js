import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//创建store实例
export default new Vuex.Store({
  state:{//设置全局属性
    count:0
  }
})

