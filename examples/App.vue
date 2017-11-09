<template>
  <div id="app">
    <mainHeader></mainHeader>
    <div class="container">
      <sideNav class="nav"></sideNav>
      <router-view class="view"></router-view>
    </div>
  </div>
</template>

<script>
import mainHeader from './components/header.vue'
import sideNav from './components/side-nav.vue'

export default {
  name: 'app',
  components: {
    mainHeader,
    sideNav
  }
}
</script>

<style lang="less" type="text/less">
  @import "./assets/less/index";
  .container{
    margin: 48px auto;
    width: 90%;
    background-color: #fff;
    box-shadow: 0 4px 30px 0 rgba(223,225,230,0.5);
    .nav{
      float: left;
      width: 200px;
    }
    .view {
      float: left;
      width: calc(~'100% - 205px');
      padding: 32px 48px 48px;
      box-sizing: border-box;
    }
  }
  .container:after{
    content:"";
    clear: both;
    display: block;
  }
</style>
