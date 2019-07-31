<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.add_time">
        <router-link :to="'/home/newsinfo/' + item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url" />
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
              <span>发表时间：{{item.add_time}}</span>
              <span>点击：{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>


<script>
// 按需导入 Toast
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      // 保存新闻列表的数组
      newsList: []
    };
  },
  created() {
    // 生命周期函数 created() 调用，此时 data 和 methods，已经创建好了，在这个时候就可以操作 data 中的数据了
    this.getNewsList(); // 这时候就可以请求 新闻列表 数据了
  },
  methods: {
    // 获取新闻列表数据的方法
    getNewsList() {
      this.$http.get("/getnews").then(result => {
        // console.log(result);
        if (result.status === 200) {
          // 成功了
          this.newsList = result.body.data;
          console.log(result);
          //   Toast("加载新闻列表OK");
        } else if (result.status === 404) {
          // 失败了
          Toast("新闻列表加载失败");
        }
      });
    }
  }
};
</script>


<style lang="scss" scoped>
.mui-table-view {
  .mui-media-body {
    h1 {
      font-size: 14px;
      margin: 0;
      text-align: left;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>

