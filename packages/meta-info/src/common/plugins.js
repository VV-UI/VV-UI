/**
 * @author monkeywang
 * Date: 17/9/7
 */
import updateMetaInfo from '../metaOperate/updateMetaInfo'
import {VUE_META_KEY_NAME} from './constants'

let VueMetaInfo = () => {
}

VueMetaInfo.install = function (Vue) {
  Vue.mixin({
    beforeCreate () {
      // 如果组件内设置了 vueMeta 信息
      if (this.$options[VUE_META_KEY_NAME] !== undefined) {
        let type = typeof this.$options[VUE_META_KEY_NAME]
        // 区分是否存在 vueMeta 信息
        this._hasMetaInfo = true
        // 判断组件内是否存在 computed 对象
        if (typeof this.$options.computed === 'undefined') {
          this.$options.computed = {}
        }
        // 为组件添加 computed 对象并返回 vueMeta 信息
        this.$options.computed.$metaInfo = type === 'function' ? this.$options[VUE_META_KEY_NAME] :
          () => this.$options[VUE_META_KEY_NAME]
      }
    },
    beforeMount () {
      // 在组件挂载到 dom 之前更新 meta 信息
      if (this._hasMetaInfo) {
        updateMetaInfo(this.$metaInfo)
      }
    },
    mounted () {
      // dom 挂载之后 继续监听 meta 信息。如果发生变化，继续更新
      if (this._hasMetaInfo) {
        this.$watch('$metaInfo', () => {
          updateMetaInfo(this.$metaInfo)
        })
      }
    },
    activated () {
      if (this._hasMetaInfo) {
        // keep-alive 组件激活时调用
        updateMetaInfo(this.$metaInfo)
      }
    },
    deactivated () {
      if (this._hasMetaInfo) {
        // keep-alive 组件停用时调用。
        updateMetaInfo(this.$metaInfo)
      }
    }
  })
}

export default VueMetaInfo
