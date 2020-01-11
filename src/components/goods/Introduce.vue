<template>
  <div v-if="goodssintroduce[0] !== undefined">
    <h4 class="aa" >{{goodssintroduce[0].title}}</h4>
    <hr />
    <p class="ab" v-html="goodssintroduce[0].content"></p>
  </div>
</template>
<script>
export default {
  data() {
    return {
        goodssintroduce: {}
    };
  },
  created() {
    this.getIntroduce();
  },
  methods: {
    async getIntroduce() {
      var id = this.$route.params.id;
      console.log(id)
      const { data: res } = await this.$http.get(`/api/goods/getdesc/${id}`);
      this.goodssintroduce = res.message;
      console.log(this.goodssintroduce);
    }
  }
};
</script>
<style lang='less' scoped>
.aa {
box-sizing: border-box;
  font-size: 16px;
  color: #226aff;
  text-align: center;
  margin: 15px 0;
  width: 100%;
}
hr {
    width: 100%;
}
.ab {
    color: #aaa;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
</style>