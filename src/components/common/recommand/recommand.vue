<template>
  <div class="recommand">
          <div v-for="item in recommands" class="recommand-item">
            <a :href="item.link">
              <img :src="item.image" alt="">
              <div>
                {{item.title}}
              </div>
            </a>
          </div>
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
recommands:{
  type:Array,
  default(){
    return {}
  }
}
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
.recommand{
  display: flex;text-align: center;

 border-bottom:4px solid gray;

}
.recommand-item{
  flex:1
}
.recommand-item img{
  height: 49px;
}


</style>