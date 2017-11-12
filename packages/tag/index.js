/**
 * @author monkeywang
 * Date: 17/11/12
 */
import Tag from './src/tag.vue'

Tag.install = function(Vue) {
  Vue.component(Tag.name, Tag)
}

export default Tag
