<template appear mode="out-in">
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr />
    <textarea placeholder="请输入要评论的内容" maxlength="120"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>

    <transition>
      <div class="cmt-list">
        <div class="cmt-item" v-for="(item, i) in comments" :key="item.add_time">
          <div
            class="cmt-title"
          >第{{ i+1 }}楼&nbsp;&nbsp;用户: {{ item.user_name }} &nbsp;&nbsp; 发表时间:{{ item.add_time }}</div>
          <div class="cmt-body">{{ item.content }}</div>
        </div>
      </div>
    </transition>

    <mt-button class="load-more" type="danger" plain size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      pageIndex: 1, // 默认展示第一页数据
      comments: [] // 所有的评论数据
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      // 获取评论
      this.$http
        // .get("/getcomments/" + this.id + "?pageindex=" + this.pageIndex)
        .get("/getcomments")
        .then(result => {
          if (result.status === 200) {
            // 成功了
            // this.comments = result.body.data;
            // 每当获取新评论数据的时候，不要把老数据清空覆盖，而是应该以老数据，拼接上新数据 conact() 拼接数组
            this.comments = this.comments.concat(result.body.data);
            console.log(this.comments);
            Toast("评论获取成功");
          } else {
            // 失败了
            Toast("评论获取失败");
          }
        });
    },
    getMore() {
      // 加载更多
      this.pageIndex++;
      this.getComments();
    }
  },
  props: ["id"]
};
</script>
<style lang="scss" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
    text-align: left;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
  //   transition {
  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      text-align: left;
      .cmt-title {
        padding-left: 6px;
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 30px;
        text-indent: 2em;
      }
    }
  }
  //   }
  .load-more {
    margin: 5px 0 10px 0;
  }
}
</style>
