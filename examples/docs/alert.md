<style>
.dome-alert .w-alert:not(:first-child){
  margin-top: 10px;
}
</style>
<script>
 export default {
    methods: {
      hello() {
        alert('Hello World!');
      }
    }
  }
</script>
# Alert 警告
----
用于页面中展示重要的提示信息。

### 基本用法
页面中的非浮层元素，不会自动消失。
<div class="dome-alert demo-block">
  <w-alert type="success">成功提示的文案</w-alert>
  <w-alert type="info">消息提示的文案</w-alert>
  <w-alert type="warning" title="警告提示的文案"></w-alert>
  <w-alert type="error" title="错误提示的文案"></w-alert>
</div>

::: demo
```html

<div>
  <w-alert type="success">成功提示的文案</w-alert>
  <w-alert type="info">消息提示的文案</w-alert>
  <w-alert type="warning" title="警告提示的文案"></w-alert>
  <w-alert type="error" title="错误提示的文案"></w-alert>
</div>

```
:::

### 带有 icon
表示某种状态时提升可读性。
<div class="dome-alert demo-block">
  <w-alert type="success" show-icon>成功提示的文案(暂无对应图标)</w-alert>
  <w-alert type="info" show-icon>消息提示的文案(暂无对应图标)</w-alert>
  <w-alert type="warning" show-icon>警告提示的文案(暂无对应图标)</w-alert>
  <w-alert type="error" show-icon>错误提示的文案(暂无对应图标)</w-alert>
</div>

::: demo
```html

<div>
  <w-alert type="success" show-icon>成功提示的文案</w-alert>
  <w-alert type="info" show-icon>消息提示的文案</w-alert>
  <w-alert type="warning" show-icon>警告提示的文案</w-alert>
  <w-alert type="error" show-icon>错误提示的文案</w-alert>
</div>

```
:::

### 文字居中
使用 ```center``` 属性让文字水平居中。
<div class="dome-alert demo-block">
  <w-alert type="success" center show-icon>成功提示的文案</w-alert>
  <w-alert type="info" center show-icon>消息提示的文案</w-alert>
  <w-alert type="warning" center show-icon>警告提示的文案</w-alert>
  <w-alert type="error" center show-icon>错误提示的文案</w-alert>
</div>

::: demo
```html

<div>
  <w-alert type="success" center show-icon>成功提示的文案</w-alert>
  <w-alert type="info" center show-icon>消息提示的文案</w-alert>
  <w-alert type="warning" center show-icon>警告提示的文案</w-alert>
  <w-alert type="error" center show-icon>错误提示的文案</w-alert>
</div>

```
:::

### 自定义关闭按钮
自定义关闭按钮为文字或其他符号。
<div class="dome-alert demo-block">
  <w-alert type="success" :closable="false">不可关闭的 alert</w-alert>
  <w-alert type="info" close-text="知道了">自定义关闭的 alert</w-alert>
  <w-alert type="warning" @close="hello">设置了回调的 alert</w-alert>
</div>

::: demo
```html

<div class="dome-alert demo-block">
  <w-alert type="success" :closable="false">不可关闭的 alert</w-alert>
  <w-alert type="info" close-text="知道了">自定义关闭的 alert</w-alert>
  <w-alert type="warning" @close="hello">设置了回调的 alert</w-alert>
</div>

```
:::

<div class="dome-alert demo-block">
  <w-alert type="success" 
           description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰……">带辅助性文字介绍</w-alert>
  <w-alert type="info" show-icon
           description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰……">带有 icon 和辅助性文字介绍</w-alert>
</div>

::: demo
```html

<div class="dome-alert demo-block">
  <w-alert type="success" 
           description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰……">带辅助性文字介绍</w-alert>
  <w-alert type="info" show-icon
           description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰……">带有 icon 和辅助性文字介绍</w-alert>
</div>

```
:::

### Attributes
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|title      |	标题，必选参数。也可通过默认 slot 传入 |	string   |	—           |	—       |
|type	      | 主题                                |	string    |	success/warning/info/error|	info |
|description |	辅助性文字                         |	string    |	—             |	—      |
|closable   |	是否可关闭                           |	boolean   |	—	            | true   |
|center     |	文字是否居中                         |	boolean  |	—            |	true  |
|close-text	| 关闭按钮自定义文本                    |	string   |	—            |	—     |
|show-icon  |	是否显示图标                         |	boolean  	| —             |	false  |

### Event
| 事件名称      | 说明       | 回调参数   |
|------------- |----------- |---------  |
|close         |关闭alert时触发的事件| —  |
