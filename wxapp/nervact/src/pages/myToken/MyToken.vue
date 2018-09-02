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
    </div>

    <list-title title="账户动态"></list-title>
    <div class="account-info">
      <list-item
        v-for="(item, index) in userTrend" 
        :key="index"
        :title="item.title"
        :subTitle="item.subTitle"
        :tokens="item.tokens"
        :showIncome="item.showIncome"
        :inCome="item.inCome"
        :showPlus="item.showPlus"
      ></list-item>
    </div>
  </div>
</template>

<script>
import ListTitle from '@/components/ListTitle';
import ListItem from '@/components/ListItem';
import { USER_INFO } from '../../constants.js';

export default {
  components: {
    ListTitle,
    ListItem,
  },
  data() {
    return {
      userInfo: wx.getStorageSync(USER_INFO),
      userWelth: [
        {
          title: 'Token',
          subTitle: '总财富',
          tokens: 600,
          showIncome: false,
          showPlus: false,
        },
        {
          title: '冻结',
          subTitle: '冻结Token不能进行交易',
          tokens: 100,
          showIncome: true,
          inCome: '一个契约',
          showPlus: false,
        },
      ],
      userTrend: [
        {
          title: '按群聊分配token',
          subTitle: '内容',
          tokens: 666,
        },
        {
          title: '游戏奖励分配token',
          subTitle: '备注：吃鸡押金',
          tokens: -100,
          showPlus: false,
        },
        {
          title: 'APP使用分配token',
          subTitle: '内容',
          tokens: 66,
        },
      ],
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
.account-info {
  background-color: white;
}
</style>

