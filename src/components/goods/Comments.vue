<template>
  <div>
    <!-- 留言区域 -->
    <div class="newscomment">
      <h3>发表评论:</h3>
      <hr />
      <!-- 留言板 -->
      <van-cell-group class="liuyanbiankuang">
        <van-field placeholder="请输入的留言" />
      </van-cell-group>
      <!-- 提交按钮 -->
      <van-button type="info" class="gonewscomment">发表评论</van-button>
      <!-- 点击加载更多 -->
      <van-button plain type="danger" class="pullmorenews">加载更多</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
<style lang='less' scoped>
//留言板区域
.newscomment {
  padding: 0 10px;
}
.liuyanbiankuang {
  border: 1px solid #ccc;
  height: 100px;
}
.gonewscomment {
  width: 100%;
  margin-top: 5px;
}
.newscommentshowa {
  background-color: #ccc;
  margin: 5px 0;
  padding: 5px 0;
  font-size: 14px;
  span {
    margin-left: 10px;
  }
}
.newscommentshowb {
  font-size: 14px;
  padding-left: 5px;
}
.pullmorenews {
  width: 100%;
  margin: 10px 0;
}
</style>