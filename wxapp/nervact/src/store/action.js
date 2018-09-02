import { get, login, post } from '@/util';
import { USER_INFO } from '@/constants';
import * as types from './mutation-types';

// 发送code并登陆
export function postCode({ commit }, params) { // eslint-disable-line
  login({
    code: params.code,
    nickName: params.nickName,
    avatar: params.avatarUrl,
  }).then((res) => {
    if (res) {
      const userInfo = {
        ...res,
        isLogin: true,
      };
      // 同步到本地
      wx.setStorageSync(USER_INFO, userInfo);
      // 同步到vuex
      commit(types.SAVE_USER_INFO, userInfo);
    }
  });
}

export async function createWallet({ commit }, params) {
  const response = await post('/member/register', params);
  commit(types.SAVE_WALLET, response);
  wx.navigateBack({
    delta: 1,
  });
}

export async function getTrends({ commit }, params) {
  const response = await get('/members/trends', params);
  commit(types.SAVE_TRENS, response);
}

export async function getFriends({ commit }, params) {
  const response = await get('/members/friends', params);
  commit(types.SAVE_FRIENDS, response);
}

export async function getInGroup({ commit }) {
  const response = await get('/members/rank');
  commit(types.SAVE_INGROUP, response);
}

export async function getOutGroup({ commit }, params) {
  const response = await get(`/group-rank?name=${params}`);
  commit(types.SAVE_OUTGROUP, response);
}

export async function createContracts(_, params) {
  const response = await post('/contracts', params);
  wx.navigateBack({
    delta: 1,
  });
  // commit(types.SAVE_CONTRANCTS, response);
}

export async function getContracts({ commit }) {
  const response = await get('/contracts');
  commit(types.SAVE_CONTRANCTS, response);
}

export async function getTokens({ commit }, params) {
  const response = await get(`/member?name=${params}`);
  const { address, token } = response;

  commit(types.SAVE_TOKENS, token);
  commit(types.SAVE_ADDRESS, address);
}
