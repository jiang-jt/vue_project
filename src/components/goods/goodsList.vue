<template>
  <div class="temp1">
    <nav-bar title="商品列表"></nav-bar>
    <ul class="mui-table-view mui-grid-view">
      <li v-for="item,index in list" :key="index" class="mui-table-view-cell mui-media mui-col-xs-6">
        <router-link :to="{name:'goods.detail',query:{id:index}}">
          <img class="mui-media-object" :src="url">
          <div class="mui-media-body">好东西啊</div>
          <div class="desc">
            <div class="sell">
              <span>￥2999</span>
              <s>￥9000</s>
            </div>
            <div class="detail">
              <div class="hot">
                热卖中
              </div>
              <div class="count">
                剩99件
              </div>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import url1 from '../../assets/img/hw1.png'
export default {
  data() {
    return {
      url: url1,
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    }
  }
}

</script>
<style scoped>
.mui-table-view.mui-grid-view .mui-table-view-cell>a:not(.mui-btn) {
  margin: 0px;
  padding: 0px;
  border: 1px solid #5c5c5c;
  box-shadow: 0 0 4px #666;
}

.sell>span {
  float: left;
  color: red;
  text-align: left;
}

.detail>.hot {
  float: left;
  text-align: left;
  font-size: 15px;
}

.detail>.count {
  float: right;
  text-align: right;
  font-size: 15px;
}


/*撑开，去除浮动没有的高度*/

.detail {
  overflow: hidden;
}

.desc {
  color: rgba(92, 92, 92, 0.8);
  background-color: rgba(0, 0, 0, 0.2);
}

.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-object {
  height: 200px;
}

</style>
