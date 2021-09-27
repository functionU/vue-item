<template>
  <div id="app">
   <router-view> </router-view>
<Tabbar>
<TabbarItem path='/home' activeColor='pink'>
<img src="~assets/img/tabbar/01_电动车.png" alt="" slot="item-icon">
<img src="~assets/img/tabbar/02_购物.png" alt="" slot="item-icon-actice">
<div slot="item-text">home</div>
</TabbarItem>

<TabbarItem path='/about' activeColor='green'>
<img src="~assets/img/tabbar/02_椰子树.png" alt="" slot="item-icon">
<img src="~assets/img/tabbar/02_购物.png" alt="" slot="item-icon-actice">
<div slot="item-text">about</div>
</TabbarItem>
<TabbarItem path='/base'>
<img src="~assets/img/tabbar/03_亚特兰蒂斯.png" alt="" slot="item-icon">
<img src="~assets/img/tabbar/02_购物.png" alt="" slot="item-icon-actice">
<div slot="item-text">base</div>
</TabbarItem>
<TabbarItem path='/shop'>
<img src="~assets/img/tabbar/02_购物.png" alt="" slot="item-icon">
<img src="~assets/img/tabbar/02_椰子树.png" alt="" slot="item-icon-actice">
<div slot="item-text">shop</div>
</TabbarItem>
</Tabbar>

  </div>
</template>

<script>
import Tabbar from "components/common/tabbar/Tarbar.vue"
import TabbarItem from "components/common/tabbar/tabbaritem.vue"
export default{
  name:'app',
  components:{
    Tabbar,
    TabbarItem,

  }
}
</script>
<style>
</style>
