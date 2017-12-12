/**
 * @author monkeywang
 * Date: 17/11/20
 */
import Skeleton from './src/skeleton.vue'

Skeleton.install = function(Vue) {
  Vue.component(Skeleton.name, Skeleton)
}

export default Skeleton
