{{#component}}
import components from './components/index'
import { forEach } from 'lodash'
{{/component}}

export let _Vue

export const install = (Vue) => {
  // avoid duplicate init
  if (install.installed) return
  install.installed = true
  _Vue = Vue

  Object.defineProperty(Vue.prototype, '$hello', {
    value (msg = 'world') { return `hello ${msg}` }
  })

  {{#component}}
  // load components
  forEach(components, (component) => {
    const { name } = component
    Vue.component(name, component)
  })
  {{/component}}
}
