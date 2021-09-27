<template>
  <div class="tab-bar">
<slot></slot>
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
.tab-bar{
  width: 100%;
  display: flex;
  background-color: pink;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow:0px -10px 1px pink;
}

</style>