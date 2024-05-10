<template>
  <div>
    <add-component></add-component>
    <h5>-------------------</h5>
    <reduce-component></reduce-component>
  </div>
</template>

<script>
import AddComponent from './components/AddComponent.vue'
import ReduceComponent from './components/ReduceComponent.vue'
export default {
  data () {},
  components: {
    'add-component': AddComponent,
    'reduce-component': ReduceComponent
  }
}
</script>

<style scoped>
</style>
