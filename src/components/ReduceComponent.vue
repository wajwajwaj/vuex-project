<template>
  <div>
    <div>当前count的值是：{{count}}</div>
    <button @click="onHandleClick">-1</button>
    <button @click="onHandleClickN">-N</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapState(['count'])
  },
  methods: {
    ...mapMutations(['reduce', 'reduceN']),
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
