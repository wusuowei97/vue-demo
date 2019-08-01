<template>
  <div>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in bannerList" :key="item.url">
        <img :src="item.img" />
      </mt-swipe-item>
    </mt-swipe>
    <!-- 6 宫格 菜单选项 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <span class="mui-icon">
            <img src="../../images/icon-menu1.png" alt />
          </span>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <span class="mui-icon">
            <img src="../../images/icon-menu2.png" alt />
          </span>
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon">
            <img src="../../images/icon-menu3.png" alt />
          </span>
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon">
            <img src="../../images/icon-menu4.png" alt />
          </span>
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon">
            <img src="../../images/icon-menu5.png" alt />
          </span>
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon">
            <img src="../../images/icon-menu6.png" alt />
          </span>
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      // 保存轮播图的数组
      bannerList: []
    };
  },
  created() {
    this.getBannerList();
  },
  methods: {
    // 获取轮播图数据的方法
    getBannerList() {
      this.$http.get("/getbanners").then(result => {
        // console.log(result);
        if (result.status === 200) {
          // 成功了
          this.bannerList = result.body.data;
          // console.log(result);
          //   Toast("加载轮播图OK");
        } else {
          // 失败了
          Toast("轮播图加载失败");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-items-wrap {
    .mint-swipe-item {
      &:nth-child(1) {
        background-color: green;
      }
      &:nth-child(2) {
        background-color: gold;
      }
      &:nth-child(3) {
        background-color: yellowgreen;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.mui-grid-view {
  &.mui-grid-9 {
    background: white;
    border: none;
    .mui-table-view-cell {
      border-right: none;
      border-bottom: none;
      .mui-icon {
        img {
          width: 60px;
        }
      }
    }
  }
}
</style>
