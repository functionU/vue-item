<template>
  <div>
    <div class="choose">
      <li class="choose-item" @click=" btnClick(index)" v-for="(item,index) in titles">{{item}}</li>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: {
    titles:{
      type:Array,

    }
  },
  components: {

  },
  mounted() {

  },
  methods: {
    btnClick(index){
     this.$emit('btnclick',index);
    }

  },
};
</script>
<style>
.choose {
  height: 40px;
  line-height: 40px;
  display: flex;
  text-align: center;

  border-bottom:1px solid white;
  justify-content: space-around;
}
.choose-item {
  background-color: pink;
  flex: 1;
  list-style: none;
}
</style>
