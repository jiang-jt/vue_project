<template>
  <div class="tmpl">
    <nav-bar title="购物车"></nav-bar>
    <div class="pay-detail">
      <ul>
        <li v-for="(num,index) in goodsList" :key="index" class="p-list">
          <mt-switch @change="onchange()"></mt-switch>
          <img :src="imgUrl">
          <div class="pay-calc">
            <p>商品</p>
            <div class="calc">
              <span>￥2999</span>
              <span @click="sub(index)">-</span>
              <span>{{num}}</span>
              <span @click="add(index)">+</span>
              <a href="javascript:;" @click="del(index)">删除</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="show-price" style="position: fixed;bottom: 50px;width: 100%;">
      <div class="show-1">
        <p>总计(不含运费):</p>
        <span>已经选择商品{{payment.num}}件，总价￥{{payment.sum}}元</span>
      </div>
      <div class="show-2">
        <mt-button type="danger" size="large">去结算</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
//引入商品操作工具对象
import prodTools from '../common/prodTools.js';
//通知底部变更数据
import connect from '../common/connect.js';
export default {
  data() {
    return {
      ss: 'ss',
      goodsList: [], //商品数组数据
      imgUrl: require('../../assets/img/hw2.png'),
    }
  },
  created() {
    this.goodsList = prodTools.getProds()
    //console.log(this.goodsList)
  },
  methods: {
    add(i) {
      this.$store.state.count = this.$store.state.count + 1 //更新count 的值
      this.goodsList[i]++
      console.log(i)
      prodTools.addOrUpdate({
        id: this.goodsList[i].id,
        num: 1, //如果存在，追加1，否则新增1
      })
    },
    sub(i) {
      if (this.goodsList[i].num <= 1) return;
      this.goodsList[i]--
      this.$store.state.count = this.$store.state.count - 1 // 更新count 的值
      prodTools.addOrUpdate({
        id: this.goodsList[i].id,
        num: -1, //如果存在，追加1，否则新增1
      })
    },
    del(i) {



      this.$store.state.count = this.$store.state.count - this.goodsList[i] // 更新count 的值

    },
    onchange() {
      console.log(1)
    }
  },
  computed: {
    payment() {
      // 1:如果商品没有被选中，遍历数组中，哪些商品有被选中，如果是
      // 2:计算总金额= 单价 * 件数
      // 3:将以上总金额累计
      // 4:如果是 +元素的num 件数 
      let num = 0;
      let sum = 0;
      // this.goodsList.forEach((ele) => {
      // if (ele.isPicked) {
      // //选中
      // sum += ele.num * ele.sell_price; //总价
      // num += ele.num; //金额
      // }
      // })

      return {
        num,
        sum
      };
    }
  }
}

</script>
<style scoped>
.pay-detail ul li {
  list-style: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 3px;
}

.pay-detail ul {
  padding-left: 5px;
  margin-top: 5px;
}

.pay-detail ul li img {
  width: 80px;
  height: 80px;
  display: inline-block;
  vertical-align: top;
  margin-top: 10px;
}

.pay-detail ul li>:nth-child(1),
.pay-detail ul li>:nth-child(3) {
  display: inline-block;
}

.pay-calc p {
  display: inline-block;
  width: 250px;
  overflow: hidden;
  color: blue;
  font-size: 15px;
  margin-bottom: 10px;
}

.pay-detail ul li>:nth-child(1) {
  line-height: 80px;
}

.calc:nth-child(1) {
  color: red;
  font-size: 20px;
}

.calc span:not(:nth-child(1)) {
  border: 1px solid rgba(0, 0, 0, 0.3);
  display: inline-block;
  width: 20px;
  text-align: center;
}

.calc a {
  margin-left: 20px;
}

.show-1,
.show-2 {
  display: inline-block;
}

.show-1,
.show-2 {
  margin-left: 30px;
}

.show-price {
  background-color: rgba(0, 0, 0, 0.2);
}

</style>
