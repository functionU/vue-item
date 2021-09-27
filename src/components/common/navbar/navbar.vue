<template>
  <div class="Navbar">
<div class="left">
  <slot name="left"></slot>
</div>
<div class="center">
  <slot name="center"></slot></div>
<div class="right">
  <slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {

    }
  },
  props: {

  },
  components:{
  },
  mounted() {

  },
  methods:{

  },
 }
</script>

<style >
@import "~assets/css/base.css";
.Navbar{
  position: fixed;
  display: flex;
  height: 24px;
  line-height: 24px;
width: 100%;
text-align: center;
 left: 0;
  right: 0;
  top: 0;
  z-index: 1;

}
.left{
  flex: 1;
  background-color: pink;
}
.center{
  flex: 4;
  background-color: pink;
}
.right{
  flex: 1;
   background-color:pink;
}
</style>