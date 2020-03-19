import Vue from 'vue'
import Vuex from 'vuex'
// 使用vuex
Vue.use(Vuex)

// 创建实例
const store = new Vuex.Store({
  state: {
    count: 0
  }
})

export default store //导出store
