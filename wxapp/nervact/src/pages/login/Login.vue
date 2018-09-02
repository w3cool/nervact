<template>
  <div class="login-container">
    <div>
      <div class="app-name">NervAct</div>
    </div>
    <div class="auth-content">
      <div>
        该小程序由NervAct 团队开发,向其提供以下权限即可继续操作
      </div>
      <div class="auth-item">
        获得你的公开信息(昵称, 头像等)
      </div>
    </div>

    <button
      class="login-btn"
      open-type="getUserInfo" 
      lang="zh_CN" 
      @getuserinfo="onGotUserInfo"
    >
      确认登陆
    </button>

  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { setStore, showSuccess } from '../../util.js';

export default {
  components: {
  },

  data() {
    return {
    };
  },
  
  mounted() {
    
  },

  methods: {
    onGotUserInfo(e) {
      const { userInfo = null } = e.mp.detail;

      if (userInfo) {
        setStore({
          ...userInfo,
          isLogin: true,
        });
        this.saveUserInfo({
          ...userInfo,
          isLogin: true,
        });
        wx.navigateBack({
          delta: 1,
        });
      }
    },
    ...mapMutations({
      saveUserInfo: 'SAVE_USER_INFO'
    })
  },
};
</script>
<style lang="scss" scoped>
.login-container {
  background-color: white;
  height: 280px;
  .app-name {
    text-align: center;
    font-size: 1.4em;
    font-weight: 500;
    padding-top: 30px;
    padding-bottom: 20px;
  }
  .auth-content {
    padding: 24px;
    .auth-item {
      margin-top: 24px;
      font-size: .8em;
      color: rgba(0, 0, 0, .55);
    }
  }
  .login-btn {
    background-color: #0066cd;
    color: white;
  } 
}
</style>

