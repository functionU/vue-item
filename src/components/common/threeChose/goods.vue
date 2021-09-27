<template>
<div class="wrapper">
  <div class="content">
           <div class="content-item"  v-for="item in goods">
             <img :src="item.show.img" >
              <div>
                <p>{{item.title}}</p>
                <p>{{item.orgPrice}}</p>
                <p>{{item.cfav}}</p>
              </div>
           </div>
  </div>
</div>

</template>

<script>
// import {scroll} from 'scroll/scroll.js'
import BScroll from "better-scroll";
export default {
  // name:'wrapper',
  data() {
    return {

    }
  },
  props: {
    goods:{
      type:Array
    }

  },
  components:{
  },
  mounted() {
  //  scroll(document.querySelector(".wrapper"))
  new BScroll(document.querySelector(".wrapper"))
  },
  methods:{

  }

 }
</script>

<style scoped>
.wrapper{
  height: 200px;
  width: 100%;
  background-color: pink;
  overflow: hidden;

}

.content{

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

}
.content-item{
  width: 48%;
  height: 100%;

  flex-shrink: 1;
  overflow: hidden;
  text-overflow: ellipsis;

}
.content-item img{
width: 100%;
}

</style>