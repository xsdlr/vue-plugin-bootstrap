import Vue from 'vue'
import plugin from 'vue-plugin'
import {author} from '../../package.json'
Vue.use(plugin)

/* eslint-disable no-new */
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
      <hello></hello>
      <hello :name="name"></hello>
    </div>
  `
})
