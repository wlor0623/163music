<template>
  <section id='playlistInfo'>
    <!--  -->
    <p v-for="(item,index) in playListInfo.tracks" :key="index">{{item.name}}</p>
  </section>
</template>
<script>
import { playlistDetailApi } from "@/api";
export default {
  name: "",
  data() {
    return {
      playListInfo: {
        tracks: []
      }
    };
  },
  //渲染前
  created() {
    this.getPlayListInfo();
  },
  //计算
  computed: {},
  //渲染后
  mounted() {},
  //方法
  methods: {
    getPlayListInfo() {
      let param = {
        id: this.$route.query.id
      };
      playlistDetailApi(param).then(data => {
        this.playListInfo = data.playlist;
      });
    }
  },
  //组件
  components: {}
};
</script>
<style lang='less' scoped>
</style>