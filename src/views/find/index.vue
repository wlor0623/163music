<template>
  <section id='find'>
    <searchBar></searchBar>
    <!-- banner -->
    <div class="banner">
      <yd-slider autoplay="3000">
        <yd-slider-item v-for="(item,index) in bannerList" :key="index">
          <img v-lazy="item.imageUrl" alt="">
        </yd-slider-item>
      </yd-slider>
    </div>
    <!-- 快捷 -->
    <div class="shortcut">
      <div class="item" @click="getPersonalFM">
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
      <div class="head">
        <h3 class="tit">推荐歌单 <i class="icon iconfont icon-gengduo"></i></h3>
      </div>
      <div class="body">
        <div class="item" v-for="(item,index) in recommendSongList" :key="index">
          <router-link :to="{path:'/playlistInfo',query:{id:item.id}}">
            <i class="playCount">{{item.playCount}}</i>
            <img class="pic" v-lazy="item.picUrl" alt="">
            <p class="tit">{{item.name}}</p>
          </router-link>
        </div>
      </div>
    </div>

    <div class="recommendSongList">
      <div class="head">
        <h3 class="tit">推荐电台 <i class="icon iconfont icon-gengduo"></i></h3>
      </div>
      <div class="body">
        <div class="item" v-for="(item,index) in DJprogramList" :key="index">
          <router-link :to="{path:'/playlistInfo',query:{id:item.id}}">
            <img class="pic" v-lazy="item.picUrl" alt="">
            <p class="tit">{{item.name}}</p>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import {
  bannerApi,
  personalizedApi,
  newsongApi,
  personal_fmApi,
  djprogramApi
} from "@/api";
import searchBar from "@/components/searchBar";
export default {
  name: "",

  data() {
    return {
      // banner
      bannerList: [],
      // 推荐歌单
      recommendSongList: [],
      // 电台
      DJprogramList: []
    };
  },

  //渲染前

  created() {
    this.getBanner();
    this.getPersonalized();
    this.getNewSong();
    this.getDJprogram();
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
        this.recommendSongList = data.result.slice(0, 6);
      });
    },
    // 获取新歌
    getNewSong() {
      newsongApi().then(data => {
        // this.newSongList=data.
      });
    },
    // 获取私人FM
    getPersonalFM() {
      personal_fmApi().then(data => {});
    },
    // 获取推荐电台
    getDJprogram() {
      djprogramApi().then(data => {
        this.DJprogramList = data.result;
      });
    }
  },
  //组件
  components: { searchBar }
};
</script>
<style lang='less' scoped>
.banner {
  overflow: hidden;
  border-radius: 5px;
  height: 200px;
  .yd-slider {
    height: 100%;
    img {
      height: 100%;
    }
  }
}
.shortcut {
  display: flex;
  padding: 20px 0px;
  border-bottom: 1px solid #eee;
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
  padding: 5px;
  > .head {
    > .tit {
      padding: 0px 5px;
      font-size: 20px;
      height: 60px;
      font-weight: 700;
      line-height: 60px;
    }
  }
  > .body {
    display: flex;
    flex-wrap: wrap;
    > .item {
      flex: 0 0 33.33%;
      padding: 2px;
      position: relative;
      margin-bottom: 20px;
      > a {
        > .pic {
          width: 100%;
          display: block;
          border-radius: 5px;
          overflow: hidden;
        }
        > .tit {
          font-size: 14px;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        > .playCount {
          position: absolute;
          top: 0;
          right: 0;
          padding: 5px;
          color: #f5f5f5;
        }
      }
    }
  }
}
</style>