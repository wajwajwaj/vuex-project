<template>
  <div>
    <div>当前count的值是： {{ $store.state.count }}</div>
    <button @click="onHandleClick">+1</button>
    <button @click="onHandleClickN">+N</button>
    <button @click="onHandleAsync">Async + 1</button>
    <button @click="onHandleAsyncN">Async + N</button>
  </div>
</template>

<script>
export default {
  data () {},
  methods: {
    onHandleClick () {
      this.$store.commit('add')
    },
    onHandleClickN () {
      // commit方法是用来获取mutation的函数的，接受两个参数 第一个参数是方法名，第二个参数是传递过去的参数
      this.$store.commit('addN', 3)
    },
    onHandleAsync () {
      // 这里的dispatch函数专门用来处理actions
      this.$store.dispatch('asyncAdd')
    },
    onHandleAsyncN () {
      this.$store.dispatch('asyncAddN', 3)
    }
  }
}
</script>

<style scoped>
</style>
