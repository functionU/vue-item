<template>
  <div class="swiper">
 <div class="swiper-img" v-if="recommands[number]" >
   <img :src="recommands[number].image" alt="">
 </div>
<!-- <div class="swiper-radius">
<div class="swiper-radius-item " v-for="{item,index} in recommands">
</div>
</div> -->
  </div>
</template>

<script>
import {getHome} from "network/home.js"
export default {
  name: '',
  data() {
    return {
number:0,
recommands:[]    }
  },
  props: {

  },
  components:{

  },
  mounted() {
  setInterval(()=>{
    if(this.recommands.length)
    {
      if(this.number>=this.recommands.length-1)
    {
       this.number=0;
    }
    else
    this.number++

  }
  },5000)
  },
  methods:{

  },
   computed : {

},
 created(){
getHome().then(res=>{
 this.recommands=res.data.data.banner.list;
  })

 }}
</script>

<style >
.swiper{

  position: relative;
  width: 100%;
  background-color: red;
  padding: 0;
  margin: 0;
 font-size: 0;
}
.swiper img{
  width:100%;
}
.swiper-radius{
  position: absolute;
  display: flex;
  bottom: 0;

}

.swiper-radius-item {
height: 20px;
width: 20px;
border-radius: 30px;
background-color: fuchsia;

}
</style>