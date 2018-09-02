<template>
  <div>
    <list-title title="契约详情"></list-title>
    <div class="group-intro">
      <div class="group-title">游戏排名分配token</div>
      <div class="group-inro-content">
        根据第三方应用结果分配代币
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
    <div class="input-container">
      <link-item
        v-for="(item, index) in links"
        :key="index"
        :title="item.title"
        :url="item.url"
      >
      </link-item>
      <!-- <div class="input-item">
        <div class="input-label">支付个数</div>
        <input />
      </div>
      <div class="input-item">
        <div class="input-label">支付给</div>
        <input />
        <div class="input-pay">支付</div>
      </div> -->
    </div>
    <button @click="clickChose" class="new-btn">选定模板</button>
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
          title: '添加群聊助手',
          notice: '游戏各方面提前缴纳token给小助手',
          content: '比赛前需完成token缴纳',
          isFinished: true,
          isLast: false,
        },
        {
          title: '获得比赛内容',
          notice: '结果图片中的昵称需与群昵称一致',
          content: '将用户与群关联',
          isFinished: false,
          isLast: false,
        },
        {
          title: '发送Token',
          notice: '暂无注意事项',
          content: '按比赛名词发放token',
          isFinished: false,
          isLast: true,
        },
      ],
      links: [
        // {
        //   title: '配置',
        //   url: '/pages/gamesettings/main'
        // },
        {
          title: '查看代码',
          url: '/pages/gamecode/main'
        },
      ]
    };
  },
  
  mounted() {
  },

  methods: {
    clickChose() {
      wx.navigateTo({
        url: '/pages/setgamerule/main',
      });
    }
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
  padding-top: 12px;
  padding-bottom: 12px;
}
.input-container {
  background-color: white;
  .input-item {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    padding: 12px;
    .input-label {
      position: absolute;
      font-size: .9em;
      color: rgba(0, 0, 0, .75);
    }
    .input-pay {
      font-size: .9em;
      color: #0066cd;
      position: absolute;
      right: 12px;
      top: 12px;
    }
    input {
      padding-left: 75px;
    }
  }
}
.new-btn {
  margin-top: 24px;
  background-color: #0066cd;
  color: white;
}
</style>

