<template>
  <div class="temp1">
    <nav-bar title="图文分享"></nav-bar>
    <div class="mui-content">
      <div class="mui-content-padded" style="height:522px;">
        <mt-loadmore :top-method="loadTop" :bottom-all-loaded="allLoaded" :bottom-method="loadBottom" :auto-fill="false" ref="loadmore">
          <div v-for="image in images">
            <p>
              <!-- 这里使用mint-ui的图片懒加载 -->
              <img v-lazy="getImgUrl(image.url)" data-preview-src="" data-preview-group="1" />
            </p>
            <p>{{ image.copyright }}</p>
          </div>
        </mt-loadmore>
      </div>
    </div>
  </div>
</template>
<script>
// import '../../assets/vendor/mui/examples/hello-mui/js/mui.min.js'
// import '../../assets/vendor/mui/examples/hello-mui/js/mui.zoom.js'
// import '../../assets/vendor/mui/examples/hello-mui/js/mui.previewimage.js'

// mui.previewImage();
export default {
  data() {
    return {
      images: [],
      allLoaded: false,
      isBottomAllLoaded: 'true'
    }
  },
  created() {
    this.$ajax.get('/bing?format=js&idx=6&n=8')
      .then(res => {
        this.images = res.data.images
        this.images.forEach((ele) => {
          ele.msrc = 'https://cn.bing.com' + ele.url;
          ele.src = 'https://cn.bing.com' + ele.url;
          ele.w = 300;
          ele.h = 200;
        })
      })
  },
  mounted() {

  },
  methods: {
    loadData() {
      console.log(this.images)
      this.$ajax.get('/bing?format=js&idx=1&n=8')
        .then(res => {
          var temp = res.data.images
          temp.forEach((ele) => {
            ele.msrc = 'https://cn.bing.com' + ele.url;
            ele.src = 'https://cn.bing.com' + ele.url;
            ele.w = 300;
            ele.h = 200;
          })
          for (let i = 0; i <= temp.length - 1; i++) {
            this.images.unshift(temp[i])
          }
        })
    },
    getImgUrl(img) {
      var url = 'https://cn.bing.com' + img
      return url
    },
    loadTop() {
      console.log('上啦了')
      this.loadData()
      this.$refs.loadmore.onTopLoaded()
    },
    loadBottom() {
      console.log('下拉了')
      this.allLoaded = true; //数据全部加载完毕调用
      this.$refs.loadmore.onBottomLoaded()
    }
  }
}

</script>
<style scoped>
/* 图片样式*/
.mui-preview-image.mui-fullscreen {
  position: fixed;
  z-index: 20;
  background-color: #000;
}

.mui-preview-header,
.mui-preview-footer {
  position: absolute;
  width: 100%;
  left: 0;
  z-index: 10;
}

.mui-preview-header {
  height: 44px;
  top: 0;
}

.mui-preview-footer {
  height: 50px;
  bottom: 0px;
}

.mui-preview-header .mui-preview-indicator {
  display: block;
  line-height: 25px;
  color: #fff;
  text-align: center;
  margin: 15px auto 4;
  width: 70px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  font-size: 16px;
}

.mui-preview-image {
  display: none;
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.mui-preview-image.mui-preview-in {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

.mui-preview-image.mui-preview-out {
  background: none;
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}

.mui-preview-image.mui-preview-out .mui-preview-header,
.mui-preview-image.mui-preview-out .mui-preview-footer {
  display: none;
}

.mui-zoom-scroller {
  position: absolute;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  -webkit-backface-visibility: hidden;
}

.mui-zoom {
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.mui-slider .mui-slider-group .mui-slider-item img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}

.mui-android-4-1 .mui-slider .mui-slider-group .mui-slider-item img {
  width: 100%;
}

.mui-android-4-1 .mui-slider.mui-preview-image .mui-slider-group .mui-slider-item {
  display: inline-table;
}

.mui-android-4-1 .mui-slider.mui-preview-image .mui-zoom-scroller img {
  display: table-cell;
  vertical-align: middle;
}

.mui-preview-loading {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: none;
}

.mui-preview-loading.mui-active {
  display: block;
}

.mui-preview-loading .mui-spinner-white {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -25px;
  margin-top: -25px;
  height: 50px;
  width: 50px;
}

.mui-preview-image img.mui-transitioning {
  -webkit-transition: -webkit-transform 0.5s ease, opacity 0.5s ease;
  transition: transform 0.5s ease, opacity 0.5s ease;
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeOut {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

p img {
  max-width: 100%;
  height: auto;
}

/*懒加载样式*/
image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}

.mint-loadmore {
  margin-bottom: 55px;
}

</style>
