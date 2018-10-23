import Vue from 'vue'
import App from './App'
import MpvueRouterPatch from 'mpvue-router-patch'
import http from '@/utils/request'

require('./weui.css')
require('./reset.css')
Vue.use(MpvueRouterPatch)

Vue.prototype.$http = http
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    pages: ['^pages/activicy/main', 'pages/mine/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#0060b5',
      navigationBarTitleText: '',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      color: '#666666',
      selectedColor: '#000000',
      borderStyle: 'white',
      backgroundColor: '#f8f9fb',
      list: [
        {
          text: '活动',
          pagePath: 'pages/activicy/main',
          iconPath: 'static/images/activicy.png',
          selectedIconPath: 'static/images/activicy_1.png'
        },
        {
          text: '我的',
          pagePath: 'pages/mine/main',
          iconPath: 'static/images/me.png',
          selectedIconPath: 'static/images/me_1.png'
        }
      ]
    }
  }
}
