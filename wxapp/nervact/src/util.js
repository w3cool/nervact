import config from './config';
import { USER_INFO } from './constants';
// 工具函数
// 使用modal显示文字
export function showModal(title, content, willJump = false) {
  wx.showModal({
    title, // 提示的标题
    content, // 提示的内容
    showCancel: false, // 是否显示取消按钮
    success: (res) => {
      if (res.confirm) {
        if (willJump) {
          wx.switchTab({
            url: '/pages/user/main',
          });
        }
      }
    },
  });
}

function jumptToWallet(title, content) {
  wx.showModal({
    title, // 提示的标题
    content, // 提示的内容
    showCancel: false, // 是否显示取消按钮
    success: (res) => {
      if (res.confirm) {
        wx.navigateTo({
          url: '/pages/wallet/main',
        });
      }
    },
  });
}

// 使用toast显示文字
export function showSuccess(text) {
  wx.showToast({
    title: text, // 提示的内容,
    icon: 'success', // 图标,
    duration: 2000, // 延迟时间,
    mask: true, // 显示透明蒙层，防止触摸穿透,
    success: () => {},
  });
}

function formatNumber(n) {
  const str = n.toString();
  return str[1] ? str : `0${str}`;
}

export function formatTime(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const t1 = [year, month, day].map(formatNumber).join('/');
  const t2 = [hour, minute, second].map(formatNumber).join(':');
  const t3 = [year, month, day].map(formatNumber).join('-');

  return `${t1} ${t2} ${t3}`;
}

export function getDate(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const t = [year, month, day].map(formatNumber).join('-');

  return t;
}

export function setStore(value) {
  wx.setStorageSync(USER_INFO, value);
}

export function getFromStore() {
  const DEFAULT_STATE = {
    isLogin: false,
    token: '',
  };
  const userSession = wx.getStorageSync(USER_INFO);
  return userSession || DEFAULT_STATE;
}

export function resetState() {
  const DEFAULT_STATE = {
    isLogin: false,
    token: '',
  };

  wx.setStorageSync(USER_INFO, DEFAULT_STATE);
}

// request
function request(url, method, data) {
  const userInfo = getFromStore();
  return new Promise((resolve, reject) => {
    wx.request({
      method,
      data,
      header: {
        'x-app-key': config.xAppKey,
        Authorization: `Bearer ${userInfo.access_token}`,
      },
      url: `${config.host}${url}`, // 开发者服务器接口地址",
      success: (res) => {
        if (res.data.code === 200) {
          resolve(res.data.data);
        } else if (res.data.code === 401) {
          resetState();
          showModal('失败', res.data.message, true);
        } else if (res.data.code === 402) {
          jumptToWallet('失败', res.data.message);
        } else {
          showModal('失败', res.data.message);
          reject(res.data);
        }
      },
    });
  });
}

function loginRequest(data) {
  return new Promise((resolve, reject) => {
    wx.request({
      method: 'POST',
      data,
      url: `${config.loginUrl}`, // 开发者服务器接口地址",
      success: (res) => {
        if (res.data.code === 200) {
          resolve(res.data.data);
        } else {
          showModal('失败', res.data.message);
          reject(res.data);
        }
      },
    });
  });
}

// get请求
export function get(url, data) {
  return request(url, 'GET', data);
}

export function post(url, data) {
  return request(url, 'POST', data);
}

export function login(data) {
  return loginRequest(data);
}
