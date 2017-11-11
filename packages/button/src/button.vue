<template>
  <button
    class="w__button"
    :disabled="disabled"
    :class="[
    'w__button--'+type,
    {'is-plain': plain, 'is-disabled': disabled, 'is-round': round},
    'w__button--size-'+size
    ]"
  >
    <i :class="icon" v-if="icon || $slots.icon">
      <slot name="icon"></slot>
    </i>
    <slot></slot>
  </button>
</template>
<script>
  export default{
    name: 'WButton',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: {
        type: String,
        default: 'default'
      },
      icon: {
        type: String,
        default: ''
      },
      plain: Boolean,
      disabled: Boolean,
      round: Boolean
    },
    data () {
      return {
        msg: 'button'
      }
    }
  }
</script>
