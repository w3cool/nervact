import Vue from 'vue';
import Find from './Find';

const app = new Vue(Find);
app.$mount();

export default {
  config: {
    navigationBarTitleText: '发现',
  },
};
