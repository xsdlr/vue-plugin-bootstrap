<template>
  <div class="hello">
    <h1>\{{msg}}</h1>
  </div>
</template>
<script>
export default {
  name: 'hello',
  props: {
    name: String
  },
  data () {
    return {
      msg: `Welcome to ${this.name ? `${this.name}'s` : 'Your'} Vue.js Plugin`
    }
  }
}
</script>
<style scoped>
  h1 {
    font-weight: normal;
  }
</style>
