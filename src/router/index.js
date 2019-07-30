import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 导入对应的路由组件
import HomeContainer from '../components/tabber/HomeContainer.vue'
import MemberContainer from '../components/tabber/MemberContainer.vue'
import ShopcarContainer from '../components/tabber/ShopcarContainer.vue'
import SearchContainer from '../components/tabber/SearchContainer.vue'

export default new Router({
  routes: [ // 配置路由规则
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'HomeContainer',
      component: HomeContainer
    },
    {
      path: '/member',
      name: 'MemberContainer',
      component: MemberContainer
    },
    {
      path: '/shopcart',
      name: 'ShopcarContainer',
      component: ShopcarContainer
    },
    {
      path: '/search',
      name: 'SearchContainer',
      component: SearchContainer
    }
  ],
  linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类，默认的类是 router-link-active
})
