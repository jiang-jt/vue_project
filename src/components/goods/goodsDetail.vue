<template>
  <div style="height:187px">
    <nav-bar title="商品详情"></nav-bar>
    <!-- <div class="outer-swiper">
      <div class="swiper"> -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(img,index) in imgs" :key="index"><img :src="img.url" alt="ss"></mt-swipe-item>
    </mt-swipe>
    <!-- </div>
    </div> -->
    <div class="product-desc">
      <ul>
        <li><span class="product-desc-span">
            华为
          </span></li>
        <li class="price-li">市场价：
          <s>3299</s> 销售价：<span>￥2999</span></li>
        <li class="number-li">购买数量：<button @click="sub">-</button>
          <input type="text" :value="num" style="width:50px;height:33px;">
          <button @click="add">+</button></li>
        <li>
          <mt-button type="primary">立即购买</mt-button>
          <mt-button type="danger" @click="addShopcart">加入购物车</mt-button>
        </li>
      </ul>
    </div>
    <transition name="ball" @after-enter="afterEnter">
      <div class="ball" v-if="isShow"></div>
    </transition>
    <div class="product-props">
      <ul>
        <li>商品参数</li>
        <li>商品货号：001</li>
        <li>库存情况：10件</li>
        <li>上架时间：2020.3.18</li>
      </ul>
    </div>
    <div class="product-info" style="margin-bottom:55px;">
      <ul>
        <li>
          <mt-button type="primary" size="large" plain>图文介绍</mt-button>
        </li>
        <li>
          <router-link :to="{name:'goods.comment'}">
            <mt-button type="danger" size="large" plain>商品评论</mt-button>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// vue组件通信的对象
import connect from '../common/connect.js'

// 操作商品信息的工具对象
import prodTools from '../common/prodTools.js'

export default {
  data() {
    return {
      imgs: [
        { url: require('../../assets/img/hw1.png') },
        { url: require('../../assets/img/hw2.png') },
        { url: require('../../assets/img/hw3.png') },
        { url: require('../../assets/img/hw4.png') },
        { url: require('../../assets/img/hw5.png') }
      ],
      num: 1, // 购买数量
      prodId: this.$route.query.id, //商品的id
      isShow: false,
    }
  },
  created() {},
  methods: {
    sub() {
      if (this.num == 1) { return }
      this.num--
    },
    add() {
      if (this.num >= 10) { return }
      this.num++
    },
    addShopcart() { //点击加入购物车按钮触发
      this.$store.state.count = this.$store.state.count + this.num
      this.isShow = true
      prodTools.addOrUpdate({
        id: this.prodId,
        num: this.num
      })
    },
    //处理过渡效果进入之后的行为
    afterEnter() {
      this.isShow = false; //移除元素
    },
  }
}

</script>
/*添加购物车小球的飞入*/
.ball-enter-active {
animation: bounce-in .5s;
}
@keyframes bounce-in {
0% {
transform: translate3d(0, 0, 0);
}
50% {
/*x,y,z轴的位置*/
transform: translate3d(140px, -50px, 0);
}
75% {
transform: translate3d(160px, 0px, 0);
}
100% {
transform: translate3d(140px, 300px, 0);
}
}
<style scoped>
.mint-swipe {
  max-height: 187px;
}

.mint-swipe img {
  height: 100%;
  width: 100%;
}

.mui-table-view.mui-grid-view.mui-grid-9 {
  background-color: white;
  border: 0;
  margin-top: 0;
}

.mui-table-view.mui-grid-view.mui-grid-9 li {
  border: 0;
}

.outer-swiper ul,
.product-desc ul,
.product-props ul,
.product-info ul {
  padding: 0;
}

.product-desc ul li,
.product-props ul li,
.product-info ul li {
  list-style: none;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 8px;
}

.product-desc ul>:nth-child(1) span {
  color: blue;
  font-size: 22px;
  font-weight: bold;
}

.product-desc ul>:nth-child(1) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
}

.product-desc ul,
.product-info ul,
.product-props ul {
  padding-left: 10px;
}

.price-li span {
  color: red;
  font-size: 25px;
}

.price-li s {
  margin-right: 16px;
}

</style>
