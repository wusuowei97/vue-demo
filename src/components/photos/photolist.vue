<template>
  <div class="photolist-container">
    <!-- 顶部滑动条区域 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']"
            to
            v-for="item in cates"
            :key="item.id"
          >{{item.title}}</a>
        </div>
      </div>
    </div>
    <!-- 图片列表区域 -->
    <ul class="images-list">
      <li v-for="item in list" :key="item.id">
        <img v-lazy="item.img_url" />
      </li>
    </ul>
  </div>
</template>

<script>
// 1. 导入mui的js文件
import mui from "../../lib/mui/js/mui.min.js";

export default {
  data() {
    return {
      cates: [], // 所有分类的列表数组
      list: [] // 图片列表的数组
    };
  },
  methods: {
    getAllCategory() {
      // 获取所有的图片分类
      this.$http.get("/getimgcategory").then(result => {
        if (result.status === 200) {
          // 手动拼接出一个最完整的分类列表
          result.body.data.unshift({ title: "全部", id: 0 });
          this.cates = result.body.data;
          //   console.log(this.cates);
        } else {
          // 失败了
        }
      });
    },
    getPhotoListByCateId() {
      // 根据 分类Id，获取图片列表
      this.$http.get("/getimages").then(result => {
        if (result.status === 200) {
          this.list = result.body.data;
          //   console.log(this.list);
        } else {
        }
      });
    }
  },
  created() {
    this.getAllCategory();
    // 默认进入页面，就主动请求 所有图片列表的数据
    this.getPhotoListByCateId(0);
  }, // 证明 data methods 已经可以使用了
  mounted() {
    // 当组件中的DOM结构被渲染好并放到页面中的后，会执行这个钩子函数
    // 如果要操作元素了，最好在mounted 里面，因为 这里时候的 DOM 元素 是最新的
    // 2. 初始化控件
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>

<style lang="scss" scoped>
* {
  touch-action: pan-y;
}
.photolist-container {
  #slider {
  }
  .images-list {
    width: 100%;
    list-style: none;
    margin-top: 5px;
    padding: 0;
    img {
      width: 100%;
    }
  }
}

img[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>
