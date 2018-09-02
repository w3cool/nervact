<template>
  <div>
    <!-- <button
      v-if="!isLogin"
      class="login-btn"
      open-type="getUserInfo" 
      lang="zh_CN" 
      @getuserinfo="onGotUserInfo"
    >
      登录
    </button> -->

    <div>
      <div class="user-container">
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
                钱包:{{ wallet.public }}
              </div>
            </div>
          </div>
        </div>
      </div>  
      <div class="list-container">
        <user-item
          v-for="(item, index) in userItemList" 
          :key="index"
          :title="item.title"
          :url="item.url"
          :iconName="item.iconName"
        >
        </user-item>
      </div>

      <list-title title="我的财富"></list-title>
      <div class="account-info">
        <list-item
          v-for="(item, index) in userWelth" 
          :key="index"
          :title="item.title"
          :subTitle="item.subTitle"
          :tokens="item.tokens"
          :showIncome="item.showIncome"
          :inCome="item.inCome"
          :showPlus="item.showPlus"
        ></list-item>
        <setting-item 
          title="在小程序本地保存私钥"
          subTitle="您的私钥会被加密保存在本地"
        >
        </setting-item>
        <mail-item 
          title="私钥备份到邮箱"
          subTitle="12345@bitrun.com"
        >
        </mail-item>
      </div>

      <list-title title="统计"></list-title>
      <div class="account-info">
        <statis-item
          v-for="(item, index) in statics"
          :key="index"
          :title="item.title"
          :tokens="item.tokens"
          :percent="item.percent"
        >
        </statis-item>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import UserItem from '@/components/UserItem';
import ListItem from '@/components/ListItem';
import MailItem from '@/components/MailItem';
import StatisItem from '@/components/StatisItem';
import SettingItem from '@/components/SettingItem';
import ListTitle from '@/components/ListTitle';
import { setStore, showSuccess } from '../../util.js';
import { USER_INFO } from '../../constants.js';

export default {
  components: {
    UserItem,
    ListItem,
    ListTitle,
    SettingItem,
    MailItem,
    StatisItem,
  },

  computed: {
    ...mapGetters([
      'wallet'
    ])
  },

  data() {
    return {
      userItemList: [
        {
          title: '我参与的合约',
          url: '/pages/meagreement/main',
          iconName: 'me_agreement',
        },
      ],
      userWelth: [
        {
          title: 'Token',
          subTitle: '总财富',
          tokens: 600,
          showIncome: false,
          showPlus: false,
        },
      ],
      statics: [
        {
          title: 'NervOs按群聊贡献分配token',
          tokens: 66666,
          percent: 70,
        },
        {
          title: '和小同学游戏排名分配token',
          tokens: 16666,
          percent: 20,
        },
        {
          title: '和大学同学游戏排名分配token',
          tokens: 5666,
          percent: 10,
        },
      ],
      userInfo: wx.getStorageSync(USER_INFO),
    };
  },

  methods: {
    ...mapActions([
      'postCode',
    ]),
    onGotUserInfo(e) {
      const { userInfo = null } = e.mp.detail;

      if (userInfo) {
        wx.login({
          success: (result)=>{
            setStore({
              ...userInfo,
              isLogin: true,
              token: '111',
            });
            this.isLogin = true;
            this.userInfo = userInfo;
          },
          fail: ()=>{},
          complete: ()=>{}
        });
      }
    }
  },
  
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
.list-container {
  background-color: white;
  margin-top: 24px;
}
.login-btn {
  margin-top: 10px;
}
.account-info {
  background-color: white;
}
</style>
