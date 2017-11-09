<style>
 .demo-block{
   padding: 32px;
   border: 1px solid #e2ecf4;
   border-radius: 4px 4px 0 0;
   background-color: #fff;
   border-bottom: none;
 }
</style>


## heelo
<div class="demo-block">
  <template>
    <div>{{msg}}</div>
  </template>
  <script>
  export default {
    data () {
      return {
        msg: 'hello'
      }
    }
  }
  </script>
</div>

::: demo
```html
<template>
  <div>{{msg}}</div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'hello'
    }
  }
}
</script>
```
:::
