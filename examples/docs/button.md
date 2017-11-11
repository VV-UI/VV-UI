# Button 按钮
----
### 基础用法
使用```type```、```plain```和```round```属性来定义 Button 的样式。

<div class="demo-block">
  <div>
    <w-button>默认按钮</w-button>
    <w-button type="primary">主要按钮</w-button>
    <w-button type="success">成功按钮</w-button>
    <w-button type="info">信息按钮</w-button>
    <w-button type="warning">警告按钮</w-button>
    <w-button type="danger">危险按钮</w-button>
  </div>
  <div class="m-10">
    <w-button plain>朴素按钮</w-button>
    <w-button type="primary" plain>主要按钮</w-button>
    <w-button type="success" plain>成功按钮</w-button>
    <w-button type="info" plain>信息按钮</w-button>
    <w-button type="warning" plain>警告按钮</w-button>
    <w-button type="danger" plain>危险按钮</w-button>
  </div>
  <div class="m-10">
    <w-button round>圆形按钮</w-button>
    <w-button type="primary" round>主要按钮</w-button>
    <w-button type="success" round>成功按钮</w-button>
    <w-button type="info" round>信息按钮</w-button>
    <w-button type="warning" round>警告按钮</w-button>
    <w-button type="danger" round>危险按钮</w-button>
  </div>
</div>

::: demo
```html

<div>
  <w-button>默认按钮</w-button>
  <w-button type="primary">主要按钮</w-button>
  <w-button type="success">成功按钮</w-button>
  <w-button type="info">信息按钮</w-button>
  <w-button type="warning">警告按钮</w-button>
  <w-button type="danger">危险按钮</w-button>
</div>
<div>
  <w-button plain>朴素按钮</w-button>
  <w-button type="primary" plain>主要按钮</w-button>
  <w-button type="success" plain>成功按钮</w-button>
  <w-button type="info" plain>信息按钮</w-button>
  <w-button type="warning" plain>警告按钮</w-button>
  <w-button type="danger" plain>危险按钮</w-button>
</div>
<div>
  <w-button round>圆形按钮</w-button>
  <w-button type="primary" round>主要按钮</w-button>
  <w-button type="success" round>成功按钮</w-button>
  <w-button type="info" round>信息按钮</w-button>
  <w-button type="warning" round>警告按钮</w-button>
  <w-button type="danger" round>危险按钮</w-button>
</div>

```
:::

### 禁用状态

按钮不可用状态。

<div class="demo-block">
  <div>
    <w-button disabled>默认按钮</w-button>
    <w-button type="primary" disabled>主要按钮</w-button>
    <w-button type="success" disabled>成功按钮</w-button>
    <w-button type="info" disabled>信息按钮</w-button>
    <w-button type="warning" disabled>警告按钮</w-button>
    <w-button type="danger" disabled>危险按钮</w-button>
  </div>
  <div class="m-10">
    <w-button plain disabled>朴素按钮</w-button>
    <w-button type="primary" plain disabled>主要按钮</w-button>
    <w-button type="success" plain disabled>成功按钮</w-button>
    <w-button type="info" plain disabled>信息按钮</w-button>
    <w-button type="warning" plain disabled>警告按钮</w-button>
    <w-button type="danger" plain disabled>危险按钮</w-button>
  </div>
</div>

::: demo
```html

<div>
  <w-button disabled>默认按钮</w-button>
  <w-button type="primary" disabled>主要按钮</w-button>
  <w-button type="success" disabled>成功按钮</w-button>
  <w-button type="info" disabled>信息按钮</w-button>
  <w-button type="warning" disabled>警告按钮</w-button>
  <w-button type="danger" disabled>危险按钮</w-button>
</div>
<div class="m-10">
  <w-button plain disabled>朴素按钮</w-button>
  <w-button type="primary" plain disabled>主要按钮</w-button>
  <w-button type="success" plain disabled>成功按钮</w-button>
  <w-button type="info" plain disabled>信息按钮</w-button>
  <w-button type="warning" plain disabled>警告按钮</w-button>
  <w-button type="danger" plain disabled>危险按钮</w-button>
</div>
  
```
:::

### 图标按钮
带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。
设置```icon```属性即可，icon 的列表可以参考 VV-UI 的 icon 组件，也可以设置在文字右边的 icon ，只要使用```i```标签即可，可以使用自定义图标。
<div class="demo-block">
  <w-button icon="w-icon-tag" type="primary"></w-button>
  <w-button icon="w-icon-close" type="primary"></w-button>
  <w-button icon="w-icon-smile" type="primary"></w-button>
  <w-button icon="w-icon-search" type="primary">搜索</w-button>
  <w-button icon="w-icon-cloudfill" type="primary">下载</w-button>
</div>

::: demo
```html

<w-button icon="w-icon-tag" type="primary"></w-button>
<w-button icon="w-icon-close" type="primary"></w-button>
<w-button icon="w-icon-smile" type="primary"></w-button>
<w-button icon="w-icon-search" type="primary">搜索</w-button>
<w-button icon="w-icon-cloudfill" type="primary">下载</w-button>

```
:::


### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。
额外的尺寸：```medium```、```small```，通过设置```size```属性来配置它们。
<div class="demo-block">
  <w-button>默认尺寸</w-button>
  <w-button size="medium">中等按钮</w-button>
  <w-button size="small">小型按钮</w-button>
</div>

::: demo
```html

<w-button>默认尺寸</w-button>
<w-button size="medium">中等按钮</w-button>
<w-button size="small">小型按钮</w-button>

```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   default,medium,small            |    —     |
| type     | 类型   | string    |   primary,success,warning,danger,info |     —    |
| plain     | 是否朴素按钮   | Boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标，已有的图标库中的图标名 | string   |  —  |  —  |
