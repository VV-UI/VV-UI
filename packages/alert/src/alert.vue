<template>
  <transition name="w-alert-fade">
    <div class="w-alert"
         :class="[ typeClass, {'is-center': center} ]"
         v-show="visible">
      <i class="w-alert__icon"
         :class="[ iconClass, isBigIcon ]"
         v-if="showIcon"></i>
      <div class="w-alert__content">
        <span class="w-alert__title"
              :class="isBoldTitle"
              style="">{{this.title}}</span>
        <p class="w-alert__description"
           v-if="description">{{description}}</p>
        <i v-if="closable"
           class="w-alert__closebtn"
           :class="[ closeText ? 'is-customed' : 'w-icon-close2']"
           @click="close">{{closeText}}</i>
      </div>
    </div>
  </transition>
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
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    },
    closeText: {
      type: String
    },
    closable: {
      type: Boolean,
      default: true
    },
    description: {
      type: String
    }
  },
  data() {
    return {
      visible: true
    };
  },
  computed: {
    typeClass() {
      return `w-alert--${this.type}`;
    },
    iconClass() {
      //暂无对应图标
      // return `w-icon--${this.type}`
      return "w-icon-fav";
    },
    isBoldTitle() {
      return this.description ? "is-bold" : "";
    },
    isBigIcon() {
      return this.description ? "is-big" : "";
    }
  },
  methods: {
    close(e) {
      this.visible = false;
      this.$emit("close");
    }
  }
};
</script>
<style lang="postcss">
@import "../../theme-default/src/common/var.css";

@b w-alert {
  padding: var(--alert-padding);
  border-radius: var(--border-radius-base);
  position: relative;
  transition: opacity 0.2s;
  opacity: 1;
  display: flex;
  align-items: center;

  @when center {
    justify-content: center;
  }

  @m success {
    color: var(--color-success) color(var(--color-success) a(0.1));
  }
  @m warning {
    color: var(--color-warning) color(var(--color-warning) a(0.1));
  }
  @m info {
    color: var(--color-info) color(var(--color-info) a(0.1));
  }
  @m error {
    color: var(--color-danger) color(var(--color-danger) a(0.1));
  }

  @e icon {
    font-size: var(--alert-icon-size);
    width: var(--alert-icon-size);
    @when big {
      font-size: var(--alert-icon-large-size);
      width: var(--alert-icon-large-size);
    }
  }
  @e content {
    padding: 0 8px;
  }

  @e title {
    font-size: var(--alert-title-font-size);
    line-height: 18px;
    @when bold {
      font-weight: bold;
    }
  }

  @e closebtn {
    font-size: var(--alert-close-font-size);
    color: var(--color-close);
    position: absolute 12px 15px * *;
    cursor: pointer;
    @when customed {
      font-style: normal;
      font-size: var(--alert-title-font-size);
      top: 9px;
    }
  }

  @e description {
    font-size: var(--alert-title-font-size);
    margin: 5px 0 0;
    color: inherit;
  }
}

.w-alert-fade-enter,
.w-alert-fade-leave-active {
  opacity: 0;
}
</style>