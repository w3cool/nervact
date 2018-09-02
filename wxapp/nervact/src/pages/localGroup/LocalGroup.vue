<template>
  <div>
    <list-title title="本群排行"></list-title>
    <div class="group-intro">
      <div class="group-title">群名称</div>
      <div class="group-inro-content">显示群ID: NervAct_hackathon_team</div>
    </div>

    <div class="group-info">
      <local-group-item
        v-for="(item, index) in inGroup" 
        :key="index"
        :userName="item.name"
        :pictureInfo="item.image_count"
        :textInfo="item.text_count"
        :tokens="item.token"
      >
      </local-group-item>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ListTitle from '@/components/ListTitle';
import LocalGroupItem from '@/components/LocalGroupItem';

export default {
  components: {
    ListTitle,
    LocalGroupItem,
  },
  data() {
    return {
      groups: [
        {
          userName: '用户名',
          pictureInfo: '图文4',
          textInfo: '文字9',
          tokens: 666,
        },
        {
          userName: '用户名',
          pictureInfo: '图文4',
          textInfo: '文字9',
          tokens: 666,
        },
        {
          userName: '用户名',
          pictureInfo: '图文4',
          textInfo: '文字9',
          tokens: 666,
        },
        {
          userName: '用户名',
          pictureInfo: '图文4',
          textInfo: '文字9',
          tokens: 666,
        },
        {
          userName: '用户名',
          pictureInfo: '图文4',
          textInfo: '文字9',
          tokens: 666,
        },
      ]
    };
  },

  computed: {
    ...mapGetters([
      'inGroup',
    ]),
  },
  
  mounted() {
    this.getInGroup();
  },

  methods: {
    ...mapActions([
      'getInGroup',
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

