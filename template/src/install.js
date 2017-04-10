{{#component}}
import components from './components/index';
import forEach from 'lodash/forEach';
{{/component}}

export let _Vue;

export const install = (Vue, options) => {
  // avoid duplicate init
  if (install.installed) return;
  install.installed = true;
  _Vue = Vue;
  // life cycle
  // @see https://vuejs.org/v2/guide/plugins.html

  {{#component}}
  // load components
  forEach(components, (component) => {
    Vue.component(name, component);
  });
  {{/component}}
};
