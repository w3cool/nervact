<template>
  <div>
    <div class="user-container">
      <div class="avatar-container">
        <img :src="userInfo.avatarUrl" alt="">
      </div>
      <div class="user-info">
        <div class="nick-name">
          {{ userInfo.nickName }}
        </div>
        <div class="wallet-acount">
          钱包:0x12345678adkjfaidfjak
        </div>
      </div>
    </div>
    
    <list-title title="个人信息"></list-title>
    <div class="input-container">
      <div class="input-item">
        <div class="input-label">手机号</div>
        <input />
        <div class="input-pay">发送校验码</div>
      </div>
      <div class="input-item">
        <div class="input-label">验证码</div>
        <input />
      </div>
      <div class="input-item">
        <div class="input-label">邮箱</div>
        <input />
      </div>
    </div>
    
    <div class="action-container">
      <button class="confirm-btn">确认</button>
      <button>返回</button>
    </div>
  </div>
</template>

<script>
import ListTitle from '@/components/ListTitle';
import { USER_INFO } from '../../constants.js';

export default {
  components: {
    ListTitle,
  },
  data() {
    return {
      userInfo: wx.getStorageSync(USER_INFO),
    };
  },
  
  mounted() {
  },

  methods: {},
};
</script>
<style lang="scss" scoped>
.user-container {
  width: 750rpx;
  display: flex;
  align-items: center;
  background-color: white;
  padding: 12px;
  .avatar-container {
    width: 80px;
    height: 80px;
    border-radius: 10px;
    img {
      border-radius: 5px;
      width: 100%;
      height: 100%;
    }
  }
  .user-info {
    padding-left: 8px;
    .nick-name {
      font-size: 1.1em;
      font-weight: 800;
    }
    .wallet-acount {
      font-size: .8em;
      color: rgba(0, 0, 0, .75);
    }
  }
}
.input-container {
  background-color: white;
  .input-item {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    padding: 12px;
    .input-label {
      position: absolute;
      font-size: .9em;
      color: rgba(0, 0, 0, .75);
    }
    .input-pay {
      font-size: .9em;
      color: #0066cd;
      position: absolute;
      right: 12px;
      top: 12px;
    }
    input {
      padding-left: 75px;
    }
  }
}
.action-container {
  margin-top: 24px;
  .confirm-btn {
    color: white;
    background-color: #0066cd;
    margin-bottom: 12px;
  }
}
</style>

