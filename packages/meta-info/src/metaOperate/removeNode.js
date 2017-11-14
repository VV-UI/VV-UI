/**
 * 移除节点
 * @param parent
 * @param childs
 */
import {VUE_META_ATTRIBUTE} from '../common/constants'

export default function _removeNode (parent) {
  let childs = parent.querySelectorAll(`[${VUE_META_ATTRIBUTE}]`)
  for (let i = childs.length - 1; i > -1; i--) {
    if (childs[i].getAttribute(VUE_META_ATTRIBUTE) === 'true') {
      parent.removeChild(childs[i])
    }
  }
}
