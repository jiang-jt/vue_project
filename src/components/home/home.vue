<template>
  <div style="height:187px;margin-top:-44px;">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(img,index) in imgs" :key="index"><img :src="img.url" alt="ss"></mt-swipe-item>
    </mt-swipe>
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link :to="{name:'news.list'}">
            <span class="mui-icon mui-icon-home"></span>
            <div class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link :to="{name:'photo.share'}">
            <span class="mui-icon mui-icon-email"></span>
            <div class="mui-media-body">图文分享</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link :to="{name:'goods.list'}">
            <span class="mui-icon mui-icon-chatbubble"></span>
            <div class="mui-media-body">商品展示</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <span class="mui-icon mui-icon-location"></span>
            <div class="mui-media-body">留言反馈</div>
          </a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <span class="mui-icon mui-icon-search"></span>
            <div class="mui-media-body">搜索资讯</div>
          </a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <span class="mui-icon mui-icon-phone"></span>
            <div class="mui-media-body">联系我们</div>
          </a></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    //var url = require('@/static/img/1001709.jpg');
    return {
      url: '/bing?format=js&idx=0&n=8',
      imgs: []
    }
  },
  created() {
    this.$ajax.get('/bing?format=js&idx=0&n=8')
      .then(res => {
        this.imgs = res.data.images;
        this.imgs.forEach((ele) => {
          ele.url = 'https://cn.bing.com' + ele.url
        })
      })
      .catch(err => {
        console.log(err);
      })
  }
}

</script>
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

/*九宫格清除字体图标*/
.mui-icon-home:before,
.mui-icon-email:before,
.mui-icon-chatbubble:before,
.mui-icon-location:before,
.mui-icon-search:before,
.mui-icon-phone:before {
  content: '';
}

/*九宫格背景图片*/
.mui-icon-home {
  background-image: url('../../assets/img/news.png');
  background-repeat: round;
}

.mui-icon-email {
  background-image: url('../../assets/img/picShare.png');
  background-repeat: round;
}

.mui-icon-chatbubble {
  background-image: url('../../assets/img/goodShow.png');
  background-repeat: round;
}

.mui-icon-location {
  background-image: url('../../assets/img/feedback.png');
  background-repeat: round;
}

.mui-icon-search {
  background-image: url('../../assets/img/search.png');
  background-repeat: round;
}

.mui-icon-phone {
  background-image: url('../../assets/img/callme.png');
  background-repeat: round;
}

/*九宫格图标宽高*/
.mui-icon {
  height: 49px;
  width: 49px;
}

</style>
