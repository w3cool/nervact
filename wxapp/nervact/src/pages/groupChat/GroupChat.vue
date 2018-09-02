<template>
  <div>
    <list-title title="契约详情"></list-title>
    <div class="group-intro">
      <div class="group-title">按群聊贡献分配Token</div>
      <div class="group-inro-content">
        统计群聊信息，按设定规则发放奖励.
      </div>
    </div>
    <div class="group-info">
      <step-item
        v-for="(item, index) in stepData" 
        :key="index"
        :title="item.title"
        :notice="item.notice"
        :content="item.content"
        :isFinished="item.isFinished"
        :isLast="item.isLast"
      >
      </step-item>
    </div>
    <list-title title="智能合约"></list-title>
    <div class="link-container">
      <link-item
        v-for="(item, index) in links"
        :key="index"
        :title="item.title"
        :url="item.url"
      >
      </link-item>
    </div>
  </div>
</template>

<script>
import ListTitle from '@/components/ListTitle';
import StepItem from '@/components/StepItem';
import LinkItem from '@/components/LinkItem';

export default {
  components: {
    ListTitle,
    StepItem,
    LinkItem,
  },
  data() {
    return {
      stepData: [
        {
          title: '添加小助手',
          notice: '助手钱包需余额充足',
          content: '小助手添加后才会统计聊天内容',
          isFinished: true,
          isLast: false,
        },
        {
          title: '匹配内容规则',
          notice: '暂无注意事项',
          content: '文本0.1/10字图片0.5每张 图文消息1token',
          isFinished: false,
          isLast: false,
        },
        {
          title: '发送Token',
          notice: '暂无注意事项',
          content: 'Token通过小助手及时发送',
          isFinished: false,
          isLast: true,
        },
      ],
      links: [
        // {
        //   title: '配置',
        //   url: '/pages/chatsettings/main'
        // },
        {
          title: '查看代码',
          url: '/pages/chatcode/main'
        },
      ]
    };
  },
  
  mounted() {
  },

  methods: {},
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
  padding-top: 12px;
  padding-bottom: 12px;
}
.link-container {
  background-color: white;
}
</style>

