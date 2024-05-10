import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 全局的唯一数据源
  state: {
    count: 0
  },
  // 对state里的数据进行加工，形成新的数据，蕾类似计算属性
  getters: {
    showNumber: state => {
      return '【当前最新的数据是】' + state.count
    }
  },
  // 用于修改store里的数据，千万不要直修改store里的数据
  // 这种写法虽然繁琐点，但是能清晰的监控所有数据的变化
  // mutationh中不能执行异步，如果有异步需求，要通过actions执行异步
  mutations: {
    // state能获取到全局唯一的数据源
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
  // 用于执行异步的
  actions: {
    // content则是能获取到mutations里面所有的方法
    // 在actions里面不，不能直接修改state里面的数据，必须通过mutations里的方法才行
    asyncAdd (content) {
      setTimeout(() => {
        content.commit('add')
      }, 1000)
    },
    asyncAddN (content, step) {
      setTimeout(() => {
        content.commit('addN', step)
      }, 1000)
    },
    asyncReduce (content) {
      setTimeout(() => {
        content.commit('reduce')
      }, 1000)
    },
    asyncReduceN (content, step) {
      setTimeout(() => {
        content.commit('reduceN', step)
      }, 1000)
    }
  },
  modules: {
  }
})
