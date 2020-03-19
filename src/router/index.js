import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home.vue'
import Member from '@/components/member/member.vue'
import Shopcart from '@/components/shopcart/shopcart.vue'
import Search from '@/components/search/search.vue'
import NewsList from '@/components/News/newsList.vue'
import NewsDetail from '@/components/News/newsDetail.vue'
import PhotoShare from '@/components/photo/photoShare.vue'
import GoodsList from '@/components/goods/goodsList.vue'
import GoodsDetail from '@/components/goods/goodsDetail.vue'
import GoodsComment from '@/components/goods/goodsComment.vue'
// import Search from '@/components/search/search.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'mui-active',
  routes: [
    { path: '/', redirect: { name: 'home' } },
    { name: 'home', path: '/home', component: Home },
    { name: 'member', path: '/member', component: Member },
    { name: 'shopcart', path: '/shopcart', component: Shopcart },
    { name: 'search', path: '/search', component: Search },
    { name: 'news.list', path: '/news/list', component: NewsList },
    { name: 'news.detail', path: '/news/detail', component: NewsDetail },
    { name: 'photo.share', path: '/photo/share', component: PhotoShare },
    { name: 'goods.list', path: '/goods/list', component: GoodsList },
    { name: 'goods.detail', path: '/goods/detail', component: GoodsDetail },
    { name: 'goods.comment', path: '/goods/comment', component: GoodsComment },
  ]
})
