import Vue from 'vue';
import User from './User';

const app = new Vue(User);
app.$mount();

export default {
  config: {
    navigationBarTitleText: '我的账户',
  },
};
