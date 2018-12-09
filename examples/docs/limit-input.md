# Limit 限制输入框
----
### 基础用法
Limit 可以控制用户输入的字/字符数，```get-by-type``` 指定初始限制字/字符
<div class="demo-block">
  <w-limit-input
    v-model="inputValue"
    :input-width="200"
    :holder="'请输入'"
    :get-by-type="'word'"
    :max-length="10">
  </w-limit-input>
</div>

::: demo
```html

<w-limit-input
  v-model="inputValue"
  :input-width="200"
  :holder="'请输入'"
  :get-by-type="'word'"
  :max-length="10">
</w-limit-input>

```
:::

<script>
export default {
  data() {
    return {
      inputValue: ''
    };
  }
}
</script>


## API

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| input-width | 输入框宽度 | Number | — | 500 |
| input-value | String | 输入值 | — | '' |
| holder | placeholder 占位符 | String | — | 请输入 |
| get-by-type | 输入时限制字数/字符 | String | 'word': 字；'char': 字符 | 'word' |
| max-length | 输入时限制字数/字符总数 | Number | — | 10 |
