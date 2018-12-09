/**
 * @author monkeywang
 * Date: 17/11/9
 */
import WButton from './button/index.js';
import WRow from './row/index'
import WCol from './col/index'
import WTag from './tag/index'
import WShowMore from './show-more/index'
import WLimitTextArea from './limit-textarea/index'
import WLimitInput from './limit-input/index'
import MetaInfo from './meta-info/index'
import WAlert from './alert/index'
import WLoadingBar from './loading-bar/index'

const components = [
  WButton,
  WRow,
  WCol,
  WTag,
  WShowMore,
  WLimitTextArea,
  WLimitInput,
  WAlert
]

const install = function(Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
  MetaInfo.install(Vue)
  Vue.prototype.$loading = WLoadingBar
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  WButton,
  WRow,
  WCol,
  WTag,
  WShowMore,
  WLimitTextArea,
  WLimitInput,
  MetaInfo,
  WAlert,
  WLoadingBar
}
