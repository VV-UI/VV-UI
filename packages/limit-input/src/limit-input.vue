<!--
  限制输入框组件
   <limitInput
    :inputWidth="500"
    :inputValue.sync="ruleForm.inputValue"
    :holder="'请输入详细地址'"
    :getByType="'word'"
    :maxLength="40">
  </limitInput>
 -->
<template>
  <div class="input-line-cell" :style="{width: inputWidth + 'px'}">
    <div class="w-input">
      <input
        class="w-input__inner"
        type="text"
        :value="itemValue"
        :placeholder="holder"
        ref="input"
        @input="handleInput"
      >
    </div>
    <span class="tip"><span class="len_span">{{inputNum}}</span>/{{limitLength}}</span>
  </div>

</template>
<script>
  import strLength from './strlen';
  export default {
    name: "WLimitInput",
    props: {
      value: {
        type: [String, Number],
        default: ''
      },

      maxLength: {// 限制长度
        type: Number,
        default: 10
      },

      inputWidth: {// input 长度
        type: Number,
        default: 500
      },

      getByType: { // 字或字符判断类型
        type: String,
        default: 'word' // word: 字, char: 字符
      },

      holder: {
        type: String,
        default: '请输入'
      }
    },
    data() {
      return {
        inputNum: 0,
        limitLength: 10,
        itemValue: '',
      }
    },
    methods: {
      /**
       * 输入
       */
      handleInput: function(value) {
        const that = this;
        let temp = '';
        if (that.getByType == 'word') {
          temp = strLength.getByteVal(value.target.value,that.limitLength)
          that.itemValue= temp.trim()
          that.inputNum = strLength.getZhLen(that.itemValue);
        }else {
          temp = strLength.getCharVal(value.target.value,that.limitLength)
          that.itemValue= temp.trim()
          that.inputNum = strLength.getByteLen(that.itemValue);
        }
        that.$emit('input',that.itemValue)
        that.$forceUpdate();
      },

      /**
       * 设置输入字/字符个数
       */
      setNum(newData) {
        const that = this
        that.itemValue = newData;
        if (that.getByType == 'word') {
          that.inputNum = strLength.getZhLen(newData)
        }else {
          that.inputNum = strLength.getByteLen(that.itemValue);
        }
      }
    },
    watch: {
      maxLength: function(newData,oldData){
        const that = this;
        that.limitLength = newData
      },

      value: function(newData,oldData){
        const that = this;
        that.setNum(newData);
      },
    },
    /* 接收数据 */
    mounted(){
      const that = this;
      that.limitLength = that.maxLength;
      that.setNum(that.value);
    },
  }
</script>
<style lang="less" scoped>

.input-line-cell {
  position: relative;
  display: inline-block;
  vertical-align: top;
}

.w-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%;
  .w-input__inner {
    -webkit-appearance: none;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
    font-size: 12px;
    color: #606266;
    background-color: rgba(255,255,255,.1);
  }

  .is-disabled{

    .w-input__inner {
      font-size: 12px;
      color: #fff;
      background-color: rgba(255,255,255,.1);
    }
  }
}

.tip {
  position: absolute;
  top: 2px;
  right: 10px;
  display: inline-block;
  line-height: 32px;
  text-align: right;
  font-size: 12px;
  color: #909399;
}

</style>
