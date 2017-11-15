/**
 * @author monkeywang
 * Date: 17/11/9
 */
import Button from './button/index.js';
import Row from './row/index'
import Col from './col/index'
import Tag from './tag/index'
import ShowMore from './show-more/index'
import LimitTextArea from './limit-textarea/index'
import Alert from './alert/index'

const components = [
  Button,
  Row,
  Col,
  Tag,
  ShowMore,
  LimitTextArea,
  Alert
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
  Button,
  Row,
  Col,
  Tag,
  ShowMore,
  LimitTextArea,
  Alert
};
