<template>
  <section id='find'>
    <!-- banner -->
    <div class="banner">

      <yd-slider autoplay="3000">

        <yd-slider-item v-for="(item,index) in bannerList" :key="index">

          <img :src="item.imageUrl" alt="">

        </yd-slider-item>

      </yd-slider>

    </div>
    <!-- 快捷 -->
    <div class="shortcut">
      <div class="item">
        <div class="ico"></div>
        <span class="tit">私人FM</span>
      </div>
      <div class="item">
        <div class="ico"></div>
        <span class="tit">每日推荐</span>

      </div>
      <div class="item">
        <div class="ico"></div>
        <span class="tit">歌单</span>
      </div>
      <div class="item">
        <div class="ico"></div>
        <span class="tit">排行榜</span>
      </div>
    </div>
    <!-- 推荐歌单 -->
    <div class="recommendSongList">
      <div class="item" v-for="(item,index) in recommendSongList" :key="index">
        <i class="playCount">{{item.playCount}}</i>
        <img class="pic" :src="item.picUrl" alt="">
        <p>{{item.name}}</p>
      </div>
    </div>
  </section>
</template>
<script>
import { bannerApi, personalizedApi } from "@/api";

export default {
  name: "",

  data() {
    return {
      // banner
      bannerList: [],
      // 推荐歌单
      recommendSongList: []
    };
  },

  //渲染前

  created() {
    this.getBanner();
    this.getPersonalized();
  },
  //计算
  computed: {},
  //渲染后
  mounted() {},
  //方法
  methods: {
    // 获取banner
    getBanner() {
      bannerApi().then(data => {
        this.bannerList = data.banners;
      });
    },
    // 获取推荐歌单
    getPersonalized() {
      personalizedApi().then(data => {
        this.recommendSongList = data.result;
      });
    }
  },
  //组件
  components: {}
};
</script>
<style lang='less' scoped>
.banner {
  overflow: hidden;
  border-radius: 5px;
}
.shortcut {
  display: flex;
  > .item {
    flex: 1;
    text-align: center;
    > .ico {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      margin: 10px auto;
      line-height: 60px;
      background-color: #da5445;
    }
    > .tit {
      text-align: center;
      font-size: 14px;
    }
  }
}
.recommendSongList {
  display: flex;
  flex-wrap: wrap;
  > .item {
    flex: 0 0 33.3333%;
    padding: 1px;
    position: relative;
    > .pic {
      width: 100%;
      display: block;
      border-radius: 5px;
      overflow: hidden;
    }
    >.playCount{
      position: absolute;
      top: 0;
      right: 0;
      padding: 5px;
      color: #f5f5f5;
    }
  }
}
</style>