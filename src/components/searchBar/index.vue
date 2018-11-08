<template>
  <section id='searchBar'>
    <span class="left-icon"><i class="icon iconfont icon-music"></i></span>
    <input class="search-input" placeholder="qingshu" type="text">
    <span class="right-icon"><i class="icon iconfont icon-fsux_tubiao_zhuzhuangtu"> </i></span>
  </section>
</template>
<script>
import {} from "@/api";
export default {
  name: "",
  data() {
    return {};
  },
  //渲染前
  created() {},
  //计算
  computed: {},
  //渲染后
  mounted() {},
  //方法
  methods: {},
  //组件
  components: {}
};
</script>
<style lang='less' scoped>
#searchBar {
  position: relative;
  padding: 5px 50px;
  >.left-icon{
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    >.icon{
      font-size: 30px;
      color: #f5f5f5;
    }
  }
  >.right-icon{
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    >.icon{
      font-size: 30px;
      color: #f5f5f5;
    }
  }
  .search-input {
    background-color: rgba(255,255,255,.3);
    color: #eeeeee;
    border: none;
    width: 100%;
    position: relative;
    height: 40px;
    line-height: 40px;
    border-radius: 20px;
    text-align: center;
    overflow: hidden;
  }
}
</style>