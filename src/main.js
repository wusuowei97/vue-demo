// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// 入口文件
import Vue from 'vue'
// 导入 App 根组件
import App from './App'
import router from './router'

// 按需导入 Mint-UI 中的组件
// import 'mint-ui/lib/style.css'
// 导入 mui 的样式
import './lib/mui/css/mui.min.css'
import {
  Header
} from 'mint-ui'

Vue.component(Header.name, Header);

Vue.use(Header);

Vue.config.productionTip = false

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
