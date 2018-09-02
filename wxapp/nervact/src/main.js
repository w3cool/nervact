import Vue from 'vue';
import App from './App';
import store from './store';

Vue.config.productionTip = false;
App.mpType = 'app';

Vue.prototype.$store = store;

const app = new Vue(App);
app.$mount();

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/home/main'],
    // pages: ['^pages/find/main'],
    // pages: ['^pages/group/main'],
    // pages: ['^pages/localGroup/main'],
    // pages: ['^pages/agreement/main'],
    // pages: ['^pages/groupChat/main'],
    // pages: ['^pages/gameReward/main'],
    // pages: ['^pages/user/main'],
    // pages: ['^pages/myToken/main'],
    // pages: ['^pages/meagreement/main'],
    // pages: ['^pages/setgamerule/main'],
    // pages: ['^pages/setchatrule/main'],
    // pages: ['^pages/login/main'],
    // pages: ['^pages/chatcode/main'],
    // pages: ['^pages/gamecode/main'], 
    // pages: ['^pages/gamesettings/main'],
    // pages: ['^pages/newagreement/main'],
    // pages: ['^pages/choosegroup/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#0066cd',
      navigationBarTitleText: 'NervAct',
      navigationBarTextStyle: 'white',
    },
    tabBar: {
      selectedColor: 'black',
      list: [
        {
          pagePath: 'pages/home/main',
          text: '主页',
          iconPath: 'static/tab_icon/home_white.png',
          selectedIconPath: 'static/tab_icon/home_black.png',
        },
        {
          pagePath: 'pages/find/main',
          text: '发现',
          iconPath: 'static/tab_icon/find_white.png',
          selectedIconPath: 'static/tab_icon/find_black.png',
        },
        {
          pagePath: 'pages/user/main',
          text: '我的',
          iconPath: 'static/tab_icon/user_white.png',
          selectedIconPath: 'static/tab_icon/user_black.png',
        },
      ],
    },
  },
};
