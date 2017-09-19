import Vue from 'vue'
import plugin from 'vue-plugin'
import {author} from '../../package.json'
Vue.use(plugin)

new Vue({
  el: '#app',
  data () {
    const {name} = author || {}
    return {
      name
    }
  },
  template: `
    <div id="app">
      <hello :name="name"></hello>
    </div>
  `
})
