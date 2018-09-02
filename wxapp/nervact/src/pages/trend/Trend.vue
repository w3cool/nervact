<template>
  <div>
    <list-title title="全部动态"></list-title>
    <div class="account-info">
      <list-item
        v-for="(item, index) in trends" 
        :key="index"
        :title="item.title"
        :subTitle="item.remark"
        :tokens="item.token"
        :mark="item.mark"
      ></list-item>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ListItem from '@/components/ListItem';
import ListTitle from '@/components/ListTitle';
import MessageItem from '@/components/MessageItem';

export default {
  components: {
    ListItem,
    ListTitle,
    MessageItem,
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
    };
  },

  computed: {
    ...mapGetters([
      'trends',
    ]),
  },
  
  mounted() {
    this.getTrends();
  },

  methods: {
    ...mapActions([
      'getTrends',
    ])
  },
};
</script>
<style lang="scss" scoped>
.account-info {
  background-color: white;
  margin-bottom: 2px;
}
</style>

