/**
 * @author monkeywang
 * Date: 17/11/9
 */
import Button from './button/index.js';


const components = [
  Button
];

const install = function(Vue) {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Button
};
