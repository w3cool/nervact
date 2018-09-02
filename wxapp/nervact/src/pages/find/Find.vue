<template>
  <div>
    <div class="item-group">
      <action-list 
        title="动态" 
        url="/pages/trend/main" 
        iconName="trend">
      </action-list>
    </div>
    <div class="item-group">
      <action-list
        v-for="(item, index) in agreeMents" 
        :key="index"
        :title="item.title"
        :url="item.url"
        :iconName="item.iconName"
      >
      </action-list>
    </div>
    <div class="item-group">
      <action-list
        v-for="(item, index) in groupData" 
        :key="index"
        :title="item.title"
        :url="item.url"
        :iconName="item.iconName"
      >
      </action-list>
    </div>
  </div>
</template>

<script>
import ActionList from '@/components/ActionList';

export default {
  components: {
    ActionList,
  },

  data() {
    return {
      groupData:[
        {
          title: '群排行',
          url: '/pages/group/main',
          iconName: 'group_rank',
        },
        {
          title: '本群排行',
          url: '/pages/localGroup/main',
          iconName: 'local_rank',
        },
      ],
      agreeMents: [
        {
          title: '我参与的合约',
          url: '/pages/meagreement/main',
          iconName: 'me_agreement',
        },
        {
          title: '所有合约模板',
          url: '/pages/agreement/main',
          iconName: 'agreement_tempalte',
        },
      ]
    };
  },
};
</script>
<style lang="scss" scoped>
.item-group {
  background-color: white;
  margin: 24px 0;
}
</style>

