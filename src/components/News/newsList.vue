<template>
  <div class="temp1">
    <nav-bar title="新闻列表"></nav-bar>
    <!-- <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore"> -->
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="(item,index) in newslist" :key="index">
        <router-link :to="{name:'news.detail',query:{html:item.url}}">
          <img class="mui-media-object mui-pull-left" :src="item.thumbnail_pic_s" alt="ss">
          <div class="mui-media-body">
            {{ item.title }}
            <p class='mui-ellipsis'>作者：{{ item.author_name }} <span>发表时间:{{ item.date }}</span></p>
          </div>
        </router-link>
      </li>
    </ul>
    <!-- </mt-loadmore> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      newslist: [],
      allLoaded: false, //是否禁止触发上拉函数
      isAutoFill: false, //是否自动触发上拉函数
    }
  },
  created() {
    this.$ajax.get('/api?type=caijing&key=0bc21aa3564e0e82d93aec8698464ee3')
      .then(res => this.newslist = res.data.result.data)
  },
  methods: {
    loadTop() { // 下拉刷新
      this.refreshData()
    },
    refreshData() {
      this.$ajax.get('/api?type=caijing&key=0bc21aa3564e0e82d93aec8698464ee3')
        .then(res => this.newslist = res.data.result.data)
      this.$refs.loadmore.onTopLoaded();
    },
    loadBottom() { // 
      this.loadmoreData()
    },
    loadmoreData() {
      this.$ajax.get('/api?type=caijing&key=0bc21aa3564e0e82d93aec8698464ee3')
        .then(res => this.newslist += res.data.result.data)
      this.$refs.loadmore.onBottomLoaded();
    }
  }
}

</script>
<style></style>
