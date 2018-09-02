<template>
  <div>
    <list-title title="所有智能合约模板"></list-title>
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
  </div>
</template>

<script>
import AgreementItem from '@/components/AgreementItem';
import ListTitle from '@/components/ListTitle';

export default {
  components: {
    AgreementItem,
    ListTitle,
  },
  data() {
    return {
      userTrend: [
        {
          title: '按群聊分配Token',
          url: '/pages/groupChat/main',
          subTitle: '社区群聊内容贡献获得token',
          iconName: 'group_chat',
        },
        {
          title: '游戏奖励分配Token',
          url: '/pages/gameReward/main',
          subTitle: '根据第三方应用结果分析代币',
          iconName: 'game',
        }
      ],
    };
  },
  
  mounted() {
  },

  methods: {},
};
</script>
<style lang="scss" scoped>
.agreemnet-container {
  background-color: white;
}
</style>

