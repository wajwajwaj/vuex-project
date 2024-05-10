import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 全局的唯一数据源
  state: {
    count: 0
  },
  getters: {
  },
  // 用于修改store里的数据，千万不要直修改store里的数据
  // 这种写法虽然繁琐点，但是能清晰的监控所有数据的变化
  mutations: {
    add (state) {
      state.count++
    },
    // 两个参数 第一个参数是这个全局的state，第二个参数是传递过来的数据
    addN (state, step) {
      state.count += step
    },
    reduce (state) {
      state.count--
    },
    // 两个参数 第一个参数是这个全局的state，第二个参数是传递过来的数据
    reduceN (state, step) {
      state.count -= step
    }
  },
  actions: {
  },
  modules: {
  }
})
