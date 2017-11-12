/**
 * @author monkeywang
 * Date: 17/11/9
 */
import Button from './src/button.vue';

Button.install = function (Vue) {
  Vue.component(Button.name, Button);
};

export default Button;
