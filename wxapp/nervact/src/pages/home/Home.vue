<template>
  <div>
    <div>
      <div class="user-info">
        <div class="avatar-container info-item">
          <open-data type="userAvatarUrl"></open-data>
        </div>
        <div class="nick-name info-item">
          <open-data type="userNickName"></open-data>
        </div>
        <div 
          class="wallet-acount info-item"
          @click.stop="createWalletLoc"
        >
          钱包:{{ address ? address : '点击创建' }}
        </div>
        <div class="account-token">
          Token: {{ tokens }}
        </div>
      </div>
      <list-title title="账户动态"></list-title>
      <div class="account-info">
        <list-item
          v-for="(item, index) in userTrends" 
          :key="index"
          :title="item.title"
          :subTitle="item.remark"
          :tokens="item.token"
          :mark="item.mark"
        ></list-item>
      </div>
      <div>
        <token-rules
          v-for="(item, index) in rules"
          :key="index"
          :title="item.title"
          :intro="item.intro"
          :url="item.url"
        >
        </token-rules>
      </div>
      <list-title title="好友在使用的合约"></list-title>
      <div class="rank-container">
        <rank-list
          v-for="(item, index) in friends"
          :key="index"
          :number="index+1"
          :title="item.name"
          :friend="item.total"
        >
        </rank-list>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ListItem from '@/components/ListItem';
import ListTitle from '@/components/ListTitle';
import TokenRules from '@/components/TokenRules';
import RankList from '@/components/RankList';
import { USER_INFO } from '../../constants.js';
import { get, post } from '../../util.js'

export default {
  components: {
    ListItem,
    ListTitle,
    TokenRules,
    RankList,
  },

  beforeCreate() {
    const userInfo = wx.getStorageSync(USER_INFO);
    if (userInfo) {
      this.userInfo = userInfo
    } else {
      wx.navigateTo({
        url: '/pages/login/main',
      });
    }
  },

  mounted() {
    const { nickName } = this.userInfo;
    this.getTrends();
    this.getFriends();
    this.getTokens(nickName);
  },

  computed: {
    ...mapGetters([
      'wallet',
      'trends',
      'friends',
      'tokens',
      'userInfo',
      'address',
    ]),
    userTrends() {
      return this.trends.splice(0, 3);
    },
    isLogin() {
      return this.userInfo.isLogin;
    }
  },

  data() {
    return {
      userTrend: [
        {
          title: '按群聊分配token',
          subTitle: '内容',
          tokens: 666,
        },
        {
          title: '游戏奖励分配token',
          subTitle: '备注：',
          tokens: 100,

        },
        {
          title: 'APP使用分配token',
          subTitle: '内容',
          tokens: 66,
        },
      ],
      rules: [
        {
          title: '按群聊贡献分配token',
          intro: '简介：社区群聊贡献内容获得Token',
          url: '/pages/groupChat/mian'
        },
        {
          title: '小学群游戏排名分配token',
          intro: '简介：游戏排名分配Token',
          url: '/pages/gameReward/mian'
        },
      ],
      ranks: [
        {
          number: 1,
          title: '按群聊贡献分配token',
          friend: '3个好友在使用',
        },
        {
          number: 2,
          title: '刺激战场奖励分配token',
          friend: '34个好友在使用',
        },
      ],
      userInfo: wx.getStorageSync(USER_INFO),
    };
  },
  
  methods: {
    createWalletLoc() {
      if (!this.address) {
        wx.navigateTo({
          url: '/pages/createWallet/main',
        });
      }
    },
    ...mapActions([
      'getTrends',
      'getFriends',
      'getTokens',
    ])
  },
};
</script>
<style lang="scss" scoped>
.user-info {
  background-color: white;
  padding-top: 24px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .info-item {
    margin-bottom: 4px;
  }
  .avatar-container {
    width: 70px;
    height: 70px;
  }
  .nick-name {
    font-size: 1.2em;
    font-weight: 800;
  }
  .wallet-acount {
    font-size: 0.9em;
    font-weight: 300;
    padding: 12px;
    word-break: break-all;
  }
  .account-token {
    color: blue;
  }
}
.account-info {
  background-color: white;
}
.rank-container {
  background-color: white;
}
.link-text {
  color: #006dff;
  text-align: center;
}
</style>

