<template>
  <div class="newsinfo-container">
    <!-- 大标题 -->
    <h3 class="title">{{ newsContent.title }}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间：{{newsContent.add_time}}</span>
      <span>点击次数：{{newsContent.click}} 次</span>
    </p>
    <hr />
    <!-- 内容区域 -->
    <div class="content">
      <p v-html="newsContent.content"></p>
    </div>
    <!-- 评论区域 子组件 -->
    <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
// 1. 导入 评论子组件
import comment from "../subcomponents/comment.vue";

// 按需导入 Toast
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      id: this.$route.params.id, // 将URL地址中传递出来的 Id值，挂载到 data上，方便以后调用
      newsContent: [] // 新闻对象
    };
  },
  created() {
    this.getNewsInfo();
  },
  methods: {
    getNewsInfo() {
      this.$http.get("/getnewscont").then(result => {
        if (result.status === 200) {
          // 成功了
          this.newsContent = result.body.data[1][0];
          //   console.log(this.newsContent);
          //   Toast("新闻内容数据获取成功");
        } else if (result.status === 404) {
          // 失败了
          Toast("新闻内容数据获取失败");
        }
      });
    }
  },
  components: {
    "comment-box": comment
  }
};
</script>

<style lang="scss" scoped>
.newsinfo-container {
  padding: 0 4px;
  .title {
    font-size: 16px;
    margin: 14px 0;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content {
    text-align: left;
  }
}
</style>
