<template>
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
    <me-title 
      title="我参与的合约"
      url="/pages/newagreement/main"
    ></me-title>
    <div class="agreemnet-container">
      <agreement-item
        v-for="(item, index) in userTrend" 
        :key="index"
        :title="item.title"
        :url="item.url"
        :subTitle="item.subTitle"
        :iconName="item.iconName"
      >
      </agreement-item>
    </div>
    <div class="agreemnet-container">
      <agreement-item
        v-for="(item, index) in contracts" 
        :key="index"
        :title="item.name"
        :subTitle="item.desc"
        iconName="group_chat"
      >
      </agreement-item>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import AgreementItem from '@/components/AgreementItem';
import MeTitle from '@/components/MeTitle';
import { USER_INFO } from '../../constants.js'

export default {
  components: {
    AgreementItem,
    MeTitle,
  },
  data() {
    return {
      userTrend: [
        {
          title: 'NervOS按群聊贡献分配Token',
          // url: '/pages/groupChat/main',
          url: '/pages/chatsettings/main',
          subTitle: '社区群聊内容贡献获得token',
          iconName: 'group_chat',
        },
        {
          title: '和小学同学游戏排名分配token',
          url: '/pages/gamesettings/main',
          subTitle: '根据第三方应用结果分析代币',
          iconName: 'game',
        },
        {
          title: '和大学同学游戏排名分配token',
          url: '/pages/gamesettings/main',
          subTitle: '根据第三方应用结果分析代币',
          iconName: 'game',
        }
      ],
      userInfo: wx.getStorageSync(USER_INFO),
    };
  },

  computed: {
    ...mapGetters([
      'wallet',
      'contracts',
    ]),
  },
  
  mounted() {
    this.getContracts();
  },

  methods: {
    ...mapActions([
      'getContracts',
    ])
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
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;
      white-space: nowrap;
      width: 210px;
    }
  }
}
.agreemnet-container {
  background-color: white;
}
</style>

