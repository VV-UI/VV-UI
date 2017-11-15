<template>
  <div class="w-alert"
       :class="typeClass">
    <div class="el-alert__content">
      <span class="el-alert__title">{{this.title}}</span>
    </div>
  </div>
</template>
<script>
function isTextNode(vnode) {
  if (
    Array.isArray(vnode) &&
    vnode.length === 1 &&
    vnode[0].tag === undefined &&
    vnode[0].text
  ) {
    return true;
  } else {
    return false;
  }
}

export default {
  name: "WAlert",
  props: {
    title: {
      type: String,
      requre: true,
      default() {
        const defaultNode = this.$slots.default;
        return isTextNode(defaultNode) ? defaultNode[0].text : undefined;
      }
    },
    type: {
      type: String,
      default: "info"
    }
  },
  data() {
    return {};
  },
  computed: {
    typeClass() {
      return `w-alert--${this.type}`;
    }
  }
};
</script>
<style lang="postcss">
@import "../../theme-default/src/common/var.css";
@b w-alert {
  padding: var(--alert-padding);
  color: var(--alert-icon-size);
  @m success {
    color: var(--color-success) color(var(--color-success) alpha(.1));
  }
  @m warning {
    color: var(--color-warning);
  }
  @m info {
    color: var(--color-info);
    background-color:  color(var(--color-info) a(0.1)) ;
  }
  @m danger {
    color: var(--color-danger);
  }

  @when pedding {
    color: green;
  }
}
</style>