
<template>

  <div>
      
        
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <van-card :num="item.cou" :title="item.title" :thumb="item.thumb_path" centered v-for="item in shopcarlist" :key="item.id">
        <div slot="tag">
            <van-icon name="cross" @click="deleteGoods(item.id)"/>
        </div>
        <!-- 商品单价区域 -->
        <div slot="price">
            <span class="priceSpan">¥ {{item.sell_price}} 元</span>
        </div>
        <!-- 商品增加减少区域 步进器 -->
        <div slot="footer">
            <van-stepper v-model="item.cou" integer input-width="30px" button-size="26px" @plus="addNum(item.id)" @minus="subNum(item.id)" />
        </div>
        
    </van-card>
    </van-pull-refresh>
    <van-submit-bar button-text="提交订单">
        <span slot="default" class="totalSpan">
            合计: <span class="color">{{total}}</span> 元
        </span>
    </van-submit-bar>
    
    
    </div>
</template>

<script>

import { log } from 'util';
// 导入vuex中的state里面的数据
import { mapState } from 'vuex'
export default {
  data() {
    return {
        totalPrices:0,
        sell_price:'2.00',
        shopcarlist:[],
        value:1,
        isLoading: false,
        numArr:[],
        idArr:[]
    };
  },
  created(){
      this.getShopCarList()
      console.log(this.param);
      
  },
  methods: {
      async getShopCarList(){
        //   const idArr = []
        //   const numArr = []
          this.param.forEach((item)=>{
              if(item.id){
                  this.idArr.push(item.id)
                  this.numArr.push(item.num)
              }
          })
          console.log(this.idArr)
          console.log(this.numArr);
          const ids = this.idArr.join(',')
          console.log(ids);
          

            // 发送axios请求,并将请求过来的数据进行解构赋值
          const { data : res } = await this.$http.get('/api/goods/getshopcarlist/'+ids)
          console.log(res);
          if(res.status !== 0) {
              return this.$notify({ type: 'danger', message: '请求失败' })
          }
          this.$notify({ type: 'success', message: '请求成功' })
        //   将请求过来的数据赋值给shopcarlist
          this.shopcarlist = res.message
          console.log(this.shopcarlist);
        //   遍历shopcarlist,然后将shopcarlist里面每个数据中的cou的值更换为numArr对应的值
          for(var i = 0;i<this.shopcarlist.length;i++){
              this.shopcarlist[i].cou = this.numArr[i]
          }   
      },
      //   点击 + 按钮式增加和商品时运行的函数
      addNum(id){
          var i = this.shopcarlist.findIndex(item=>item.id == id)
          console.log(i);
          if(i !== -1){
              this.shopcarlist[i].cou++
          }
      },
    //   点击 - 按钮式增加和商品时运行的函数
      subNum(id){
          var i = this.shopcarlist.findIndex(item=>item.id == id)
          console.log(i);
          if(i !== -1){
              this.shopcarlist[i].cou--
          }
      },
    //   点击删除图标的时候运行的函数
      deleteGoods(id){
           var i = this.shopcarlist.findIndex(item=>item.id == id)
           if(i !== -1){
              this.shopcarlist.splice(i,1)
          }
      },
    //   页面下拉刷新时运行的函数
      onRefresh(){
          setTimeout(() => {
              this.getShopCarList()
              this.isLoading = false;
         }, 1000);
      }
  },
  computed:{
    //   将state数据映射过来
      ...mapState(['param']),
    //   定义一个计算属性,用来计算结算界面的总价
      total:function(){
          var total = 0
          for(var i in this.shopcarlist){
                    total += this.shopcarlist[i].sell_price * this.shopcarlist[i].cou;
                }
                return total;
      }
  }
};
</script>

<style scoped>
.van-card__content {
    padding-left: 20px
}
.van-card__bottom {
    line-height: 40px
}
.van-card__price-integer {
    color: #ff3040;
    font-size: 14px
}
.van-card__price-currency {
    color: #ff3040
}
.priceSpan {
    color: #ff3040
}
.totalSpan {
    margin-right: 20px;
    font-size: 18px
}
.color {
    color: #ff3040
}
</style>
