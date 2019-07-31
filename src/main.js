// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// 入口文件
import Vue from 'vue'
// 导入 App 根组件
import App from './App'
// 导入router.js 路由模块
import router from './router'

// 导入 vue-resource
import VueResource from 'vue-resource'
// 安装 vue-resource
Vue.use(VueResource);

// 导入模拟好的数据接口
import mockdata from './mock'


// 按需导入 Mint-UI 中的组件
// import 'mint-ui/lib/style.css'
// 导入 mui 的样式
import './lib/mui/css/mui.min.css'
// 导入 mui icons-extra 扩张图标 样式
import './lib/mui/css/icons-extra.css'
// 导入 iconfont 图片样式文件
import './lib/iconfont/iconfont.css'
import {
  Header,
  Swipe,
  SwipeItem,
  Button
} from 'mint-ui'


Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

Vue.config.productionTip = false

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  // render: c => c(app),
  components: {
    App
  },
  template: '<App/>'
})
