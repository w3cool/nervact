import Vue from 'vue';
import Vuex from 'vuex';
// import dayjs from 'dayjs';
import { getFromStore } from '@/util';

import mutations from './mutations';
import * as actions from './action';
import * as getters from './getters';

Vue.use(Vuex);

const state = {
  userInfo: getFromStore(), // 用户信息
  wallet: {
    public: '',
  }, // 钱包
  trends: [], // 趋势
  friends: [], // 好友使用的合约
  inGroup: [], // 群内排行
  outGroup: [], // 群排行
  contracts: [], // 合约列表
  money: 0, // 充值的钱
  tokens: 0, // 用户token
  address: '', // 钱包
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
