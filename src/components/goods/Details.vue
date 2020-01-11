<template>
  <div>
    <div class="swipe">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in detailslist" :key="item.id">
          <img v-lazy="item.thumb_path" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="goodsInfo" v-if="infolist[0] !== undefined">
      <div>{{detailslist[0].title}}</div>
      <p class="aaa">
        市场价
        <del class="s1">¥{{infolist[0].market_price}}</del>
        销售价
        <span class="s2">¥{{infolist[0].sell_price}}</span>
      </p>
      <div class="num">
        <span>购买数量</span>
        <van-stepper v-model="value" @change="addGoods" />
      </div>

      <van-button hairline size="small" type="info">立即购买</van-button>
      <van-button hairline size="small" type="danger" @click="joinCar">加入购物车</van-button>
    </div>
    <div class="arguments" v-if="infolist[0] !== undefined">
      <div class="arguments_title">商品参数</div>
      <div class="arguments_body">
        <p>商品货号:{{infolist[0].goods_no}}</p>
        <p>库存情况: {{infolist[0].stock_quantity}} 件</p>
        <p>上架时间:{{infolist[0].add_time | dateFormat}}</p>
      </div>
      <div class="arguments_btns">
        <button class="d1" @click="goIntroduce()">图文介绍</button>
        <button class="d2" @click="goComment()">商品评论</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "1",
      detailslist: [],
      infolist: []
    };
  },
  created() {
    // 页面加载进来马上发送axios请求获取详情页面的数据
    this.getDetails();
    this.getInfo();
    // 获取轮播图
    // this.getgetImages()
  },
  methods: {
    async getDetails() {
      console.log(this.$route.params.id);
      var id = this.$route.params.id;
      const { data: res } = await this.$http.get(
        "/api/goods/getshopcarlist/" + id
      );
      console.log(res);
      this.detailslist = res.message;
      console.log(this.detailslist);
    },
    async getInfo() {
      var id = this.$route.params.id;
      console.log(id);
      
      const { data: res } = await this.$http.get(`/api/goods/getinfo/` + id);
      console.log(res);
      this.infolist = res.message;
      console.log(this.infolist);
    },
    addGoods(value) {
      console.log(value);
      this.detailslist[0].num = value;
      console.log(this.detailslist[0]);
    },
    joinCar() {
      this.$toast.success("已加入购物车!");
      const params = this.detailslist[0];
      this.$store.commit("addNum", params);
      console.log(params);
    },
    // 文图
    goIntroduce() {
      const id = this.detailslist[0].id;
      console.log(id);
      this.$router.push(`/goodsdesc/${id}`);
    },
    goComment() {
      const id = this.detailslist[0].id;
      console.log(id);
      this.$router.push(`/goodscomments/${id}`);
    }
  }
};
</script>
<style lang='less' scoped>
.swipe {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  .van-swipe {
    // position: relative;
    width: 100%;
    height: 232px;
    border: 1px solid #ccc;
    border-radius: 3px;
    img {
      display: block;
      width: 200px;
      height: 200px;
      margin: auto;
    }
  }
}
.goodsInfo {
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 10px;
}
.priceSpan {
  color: #ff3040;
}
.van-button {
  margin-right: 15px;
}
.num {
  position: relative;
  padding: 10px;
  span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 14px;
    color: #8f8f94;
  }
  .van-stepper {
    margin-left: 82px;
    display: inline-block;
  }
}
.aaa {
  padding-left: 15px;
  font-size: 14px;
  color: #8f8f94;
  .s1 {
    margin-right: 20px;
  }
  .s2 {
    font-size: 16px;
    color: red;
  }
}
.arguments {
  box-sizing: border-box;
  width: 100%;
  margin-top: 10px;
  padding: 15px 15px 0 15px;
  border-radius: 3px;
  border: 1px solid #ccc;

  .arguments_body {
    border-bottom: 1px solid #ccc;
    padding: 15px;
    color: #8f8f94;
  }
  .arguments_btns {
    margin-top: 10px;
    font-size: 16px;
    text-align: center;
    .d1,
    .d2 {
      width: 100%;
      height: 40px;
      border-radius: 5px;
      line-height: 40px;
    }
    .d1 {
      border: 1px solid #1989fa;
      color: #1989fa;
    }
    .d2 {
      margin: 10px 0;
      border: 1px solid #f44;
      color: #f44;
    }
  }
}
.arguments_title {
  font-size: 17px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}
</style>