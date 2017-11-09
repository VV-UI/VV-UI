# Layout 布局
----
通过基础的 24 分栏，迅速简便地创建布局。
### 基础布局
<div class="demo-block">
 <w-row>
   <w-col :span="24"><div class="grid-content bg-purple-dark"></div></w-col>
 </w-row>
 <w-row class="m-10">
   <w-col :span="8"><div class="grid-content bg-purple"></div></w-col>
   <w-col :span="8"><div class="grid-content bg-purple-light"></div></w-col>
   <w-col :span="8"><div class="grid-content bg-purple"></div></w-col>
 </w-row>
 <w-row class="m-10">
   <w-col :span="4"><div class="grid-content bg-purple"></div></w-col>
   <w-col :span="4"><div class="grid-content bg-purple-light"></div></w-col>
   <w-col :span="4"><div class="grid-content bg-purple"></div></w-col>
   <w-col :span="4"><div class="grid-content bg-purple-light"></div></w-col>
   <w-col :span="4"><div class="grid-content bg-purple"></div></w-col>
   <w-col :span="4"><div class="grid-content bg-purple-light"></div></w-col>
 </w-row>
</div>

::: demo
```html
<w-row>
 <w-col :span="24"><div class="grid-content bg-purple-dark"></div></w-col>
</w-row>
<w-row class="m-10">
 <w-col :span="8"><div class="grid-content bg-purple"></div></w-col>
 <w-col :span="8"><div class="grid-content bg-purple-light"></div></w-col>
 <w-col :span="8"><div class="grid-content bg-purple"></div></w-col>
</w-row>
<w-row class="m-10">
 <w-col :span="4"><div class="grid-content bg-purple"></div></w-col>
 <w-col :span="4"><div class="grid-content bg-purple-light"></div></w-col>
 <w-col :span="4"><div class="grid-content bg-purple"></div></w-col>
 <w-col :span="4"><div class="grid-content bg-purple-light"></div></w-col>
 <w-col :span="4"><div class="grid-content bg-purple"></div></w-col>
 <w-col :span="4"><div class="grid-content bg-purple-light"></div></w-col>
</w-row>
```
:::
