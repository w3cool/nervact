<template>
  <div>
    <list-title title="配置"></list-title>
    <div class="group-intro">
      <div class="group-title">配置</div>
      <div class="group-inro-content">
        统计群聊信息，按设定规则发放奖励.
        <p class="bold-font">关键词如下：</p>
        <p>'区块链'</p>
        <p>'共识机制'</p>
        <p>'去中心化'</p>
        <p>'CITA'</p>
        <p>'存在性证明'</p>
        <p>'经济模型'</p>
        <p>'智能合约'</p>
        <p>'侧链'</p>
        <p>'隔离验证'</p>
        <p>'零知识证明'</p>
        <p>'稳定货币'</p>
        <p>'Dapp'</p>
        <p>'DAG'</p>
        <p>'Nervos'</p>
        <p>'PBFT'</p>
        <p>'DAG'</p>
      </div>
    </div>
  </div>
</template>

<script>
import ListTitle from '@/components/ListTitle';

export default {
  components: {
    ListTitle,
  },
  data() {
    return {
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
    // height: 100px;
    // display: flex;
    align-items: center;
  }
}
.group-info {
  background-color: white;
  margin-top: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
}
.bold-font {
  font-weight: bold;
}
</style>

