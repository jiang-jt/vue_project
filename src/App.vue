<template>
  <div>
    <mt-header title="固定在顶部"></mt-header>
    <router-view></router-view>
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" :to="{name:'home'}">
        <span class="mui-icon icon-shouye"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" :to="{name:'member'}">
        <span class="mui-icon icon-huiyuan"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" :to="{name:'shopcart'}">
        <span class="mui-icon icon-gouwuche"><span class="mui-badge">{{this.$store.state.count}}</span></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" :to="{name:'search'}">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">查找</span>
      </router-link>
    </nav>
  </div>
</template>
<script>
import connect from './components/common/connect.js'
import prodTools from './components/common/prodTools.js'
export default {
  data() {
    return {
      num: prodTools.getTotalCount(), // 购物车商品数量   
    }
  },
  created() {
    connect.$on('addShopcarts', (num) => {
      this.num = this.num + num
    })

  },
  mounted() {}
}

</script>
<style scoped>
.mint-header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
}

</style>
