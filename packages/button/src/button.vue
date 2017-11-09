<template>
  <div class="w__button" :class="['w__button--'+type, {'is-plain': plain, 'is-round': round}]">
    <slot></slot>
  </div>
</template>
<script>
  export default{
    name: 'WButton',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      plain: Boolean,
      round: Boolean
    },
    data () {
      return {
        msg: 'button'
      }
    }
  }
</script>
