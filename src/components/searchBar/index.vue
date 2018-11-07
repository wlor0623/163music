<template>
  <section id='searchBar'>
    <input class="search-input" placeholder="qingshu" type="text">
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
  padding: 5px 40px;
  .search-input {
    // background-color: rgba(255,255,255,.5);
    background-color: #eee;
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