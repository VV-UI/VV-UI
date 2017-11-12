<template>
  <span class="w__show-more">
    <span>{{text | filterText(textLen)}}</span>
    <a @click="showMore" v-if="textLen !== -1 && textLen < text.length">{{showText}}</a>
    <a @click="showMore" v-if="textLen !== -1 && textLen === text.length && allowFold">{{hiddenText}}</a>
  </span>
</template>

<script>
  export default {
    name: 'WShowmore',
    props: {
      len: {
        type: Number,
        default: -1
      },
      text: {
        type: String,
        default: ''
      },
      showText: {
        type: String,
        default: '显示更多'
      },
      hiddenText: {
        type: String,
        default: '收起'
      },
      allowFold: Boolean
    },
    data () {
      return {
        textLen: this.len
      }
    },
    methods: {
      showMore () {
        this.textLen = this.textLen === this.text.length ? this.len : this.text.length
      }
    },
    filters: {
      filterText (value, textLen) {
        if (textLen !== -1 && textLen < value.length) {
          return value.substring(0, textLen) + '...'
        }
        return value
      }
    }
  }
</script>

