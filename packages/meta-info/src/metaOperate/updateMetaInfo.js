/**
 * 更新 metaInfo 信息
 * @param opts
 */
import operate from './operate'

export default function updateMetaInfo (opts) {
  operate().removeMetaInfo()
  operate().setMetaInfo(opts)
}
