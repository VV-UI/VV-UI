/**
 * 为 dom 设置属性
 * @param el
 * @param opt
 */
import {VUE_META_ATTRIBUTE} from '../common/constants'

export default function _setAttr (el, opt) {
  el.setAttribute(VUE_META_ATTRIBUTE, true)
  for (let key in opt) {
    if (opt.hasOwnProperty(key)) {
      el.setAttribute(key, opt[key])
    }
  }
}
