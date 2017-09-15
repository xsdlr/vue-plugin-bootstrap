{{#component}}
import components from './components/index';
import { forEach } from 'lodash';
{{/component}}

export let _Vue;

export const install = (Vue) => {
  // avoid duplicate init
  if (install.installed) return;
  install.installed = true;
  _Vue = Vue;
  // life cycle
  // @see https://vuejs.org/v2/guide/plugins.html

  {{#component}}
  // load components
  forEach(components, (component) => {
    const { name } = component;
    Vue.component(name, component);
  });
  {{/component}}
};
