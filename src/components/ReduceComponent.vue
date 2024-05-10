<template>
  <div>
    <div>当前count的值是：{{count}}</div>
    <button>-1</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapState(['count'])
  }
}
</script>

<style scoped>
</style>
