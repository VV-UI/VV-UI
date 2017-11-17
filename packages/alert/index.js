/**
 * @author autumnLeaves0
 * Date: 17/11/15
 */
import Alert from './src/alert.vue';

Alert.install = function (Vue) {
  Vue.component(Alert.name, Alert);
};

export default Alert;
