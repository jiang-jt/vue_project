<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(img,index) in imgs" :key="index">
        <img :src="img.url">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgs: [], //轮播图片列表
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
/*轮播图样式*/
.mint-swipe {
  max-height: 187px;
}

.mint-swipe img {
  height: 100%;
}

</style>
