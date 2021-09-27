<template>
  <div id="home">
  <nabbar>
<div slot="center">购物街</div>
</nabbar>
<div id="home">
    <div class="home-content">
<swiper></swiper>
 <recommand :recommands='recommands'></recommand>
 <featureView ></featureView>
 <threechose :titles='[1,2,3]' @btnclick='btnClick'></threechose>
 <goods :goods="goods[name].list" ></goods>
 </div>
  </div>
  </div>

</template>

<script>
import nabbar from 'components/common/navbar/navbar.vue'
import {getHome,getdata} from "network/home.js"
import recommand from 'components/common/recommand/recommand.vue'
import featureView from 'components/common/featureView/featureView.vue'
import threechose from 'components/common/threeChose/threeChose.vue'
import goods from 'components/common/threeChose/goods.vue'
import swiper from 'components/common/swiper-1/swiper.vue'
import {scroll} from 'scroll/scroll.js'
export default {
 name:'home',
  data() {
    return {
banners:[],
recommands:[],
goods: {
          'pop': {page: 0, list:[]},
          'new': {page: 0, list:[]},
          'sell': {page: 0, list:[]},
        },
          name:'pop',
    }

  },
  props: {


  },
  components:{
    nabbar,
    swiper,
    recommand,
    featureView,
    threechose,goods
  },
  mounted() {


  },
  methods:{
btnClick(index){
 if(index==0)
 {
   this.name='pop'
 }
 else if(index==1)
 {
   this.name='new'
 }
 else
 this.name='sell'
}
  },
  created(){
getHome().then(res=>{
  this.banners=res.data.data.banner.list;
  this.recommands=res.data.data.recommend.list
  })
  getdata('pop',this.goods['pop'].page+1).then(res=>{
console.log(res)
this.goods['pop'].list=res.data.data.list;
this.goods['pop'].page=1;
  })
    getdata('new',this.goods['new'].page+1).then(res=>{
console.log(res)
this.goods['new'].list=res.data.data.list;
this.goods['new'].page=1;
  })
    getdata('sell',this.goods['sell'].page+1).then(res=>{
console.log(res)
this.goods['sell'].list=res.data.data.list;
this.goods['sell'].page=1;
  })
 }}
</script>

<style scoped>

/* .home-content{
height: 700px;
  overflow: hidden;
}
.swiper{
margin-top: 24px;
} */
</style>