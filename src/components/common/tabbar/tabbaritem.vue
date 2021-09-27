<template>
<div class="tab-bar-item" @click="itemclick" >
    <!-- <img src="../../assets/img/tabbar/01_电动车.png" alt="">
 <span>Home</span> -->
 <div v-if="!isActive" > <slot name='item-icon'></slot></div>
 <div v-else><slot name='item-icon-actice'></slot></div>
<!-- <div :style="isActive ? {color:activeColor}:{}"><slot name='item-text'></slot></div>
 </div> -->
<div :style="isActiveColor"><slot name='item-text'></slot></div>
 </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {

    }
  },
  props: {
    path:{
      type:String,

    },
    activeColor:{
      type:String,
     default:'red',
    }

  },
  components:{
  },
  mounted() {

  },
  methods:{
itemclick(){
this.$router.replace(this.path)
}
  },
  computed:{
  isActive(){
    return this.$route.path.indexOf(this.path)!=-1
  },
  isActiveColor(){
    return this.isActive ? {color:this.activeColor}:{}
  }
  }
 }
</script>

<style >
.tab-bar-item {
  width: 100%;
flex: 1;
height: 49px;
font-size: 14px;
text-align: center;
}
.tab-bar-item img {

  width: 24px;
  height: 24px;

}
.active{
font-weight: bold;
color: blue;
}
</style>