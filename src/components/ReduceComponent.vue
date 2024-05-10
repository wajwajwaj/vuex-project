<template>
  <div>
    <div>当前count的值是：{{count}}</div>
    <button @click="onHandleClick">-1</button>
    <button @click="onHandleClickN">-N</button>
    <button @click="asyncReduce">Async - 1</button>
    <button @click="asyncReduceN(3)">Async - N</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapState(['count'])
  },
  methods: {
    ...mapMutations(['reduce', 'reduceN']),
    // 通过扩展运算，直接将actions里的方法放到了methods，所以上面可以直接使用，mutation亦可以这样
    ...mapActions(['asyncReduce', 'asyncReduceN']),
    onHandleClick () {
      this.reduce()
    },
    onHandleClickN () {
      this.reduceN(3)
    }
  }
}
</script>

<style scoped>
</style>
