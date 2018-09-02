<template>
  <div>
    <list-title title="群排行"></list-title>
    <div class="group-intro">
      <div class="group-title">群排行列表</div>
      <div class="group-inro-content">显示所有使用NervAct的群</div>
    </div>
    <div class="group-info">
      <group-item
        groupTitle="群名称"
        totalToken="总token"
        averageToken="人均token"
        rank="群内排名"
      >
      </group-item>
    </div>

    <div class="group-info">
      <group-item
        :groupTitle="outGroup.group_name"
        :totalToken="outGroup.token_total"
        :averageToken="outGroup.token_ave"
        :rank="outGroup.member_rank"
      >
      </group-item>
      <!-- <group-item
        v-for="(item, index) in outGroup" 
        :key="index"
        :groupTitle="item.group_name"
        :totalToken="item.token_total"
        :averageToken="item.token_ave"
        :rank="item.member_rank"
      >
      </group-item> -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ListTitle from '@/components/ListTitle';
import GroupItem from '@/components/GroupItem';

export default {
  components: {
    ListTitle,
    GroupItem,
  },

  computed: {
    ...mapGetters([
      'outGroup',
      'userInfo',
    ]),
  },

  mounted() {
    const { nickName } = this.userInfo;
    this.getOutGroup(nickName);
  },

  data() {
    return {
      groups: [
        {
          groupTitle: '群1',
          totalToken: 36373,
          averageToken: 737,
          rank: 1,
        },
        {
          groupTitle: '群2',
          totalToken: 36350,
          averageToken: 710,
          rank: 2,
        },
        {
          groupTitle: '群3',
          totalToken: 36200,
          averageToken: 701,
          rank: 3,
        },
      ]
    };
  },

  methods: {
    ...mapActions([
      'getOutGroup',
    ])
  },
};
</script>
<style lang="scss" scoped>
.group-intro {
  background-color: white;
  padding: 12px;
  .group-title {
    font-size: .9em;
    color: rgba(0, 0, 0, .75);
  }
  .group-inro-content {
    font-size: .8em;
    color: rgba(0, 0, 0, .55);
    height: 100px;
    display: flex;
    align-items: center;
  }
}
.group-info {
  background-color: white;
  margin-top: 24px;
}
</style>

