# showMore 显示更多
----

### 基础用法
文本超出显示长度，折叠起来，通过len属性显示从何处开始折叠。

<div class="demo-block">
  <w-showmore :len='10' text='文本超出显示长度，折叠起来，通过len属性显示从何处开始折叠。'>
  </w-showmore>
</div>

::: demo
```html

 <w-showmore 
   :len='10' 
   text='文本超出显示长度，折叠起来，通过len属性显示从何处开始折叠'>
 </w-showmore>

```
:::

### 高级用法
文本超出显示长度，折叠起来，展开后，可以通过```allow-fold```指定是否需要收起，也可通过```show-text```设置折叠时的文案，通过```hidden-text```设置收起的文案

<div class="demo-block">
  <w-showmore 
    allow-fold 
    show-text='show'
    hidden-text='hidden'
    :len='10' 
    text='文本超出显示长度，折叠起来，展开后，可以通过 allowFold 指定是否需要收起'>
  </w-showmore>
</div>


::: demo
```html

 <w-showmore allow-fold
   :len='10' 
   show-text='show'
   hidden-text='hidden'
   text='文本超出显示长度，折叠起来，通过len属性显示从何处开始折叠'>
 </w-showmore>

```
:::

## API

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| len | 显示文本的长度 | Number | — | -1(不进行折叠) |
| text | 类型 | String | - |  |
| show-text | 折叠时需要显示文案 | String | — | 显示更多 |
| hidden-text | 隐藏时需要显示文案 | String | — | 隐藏 |
