<template>
  <div>
   
    <list-title title="配置"></list-title>
    <div class="group-intro">
      <div class="group-title">游戏配置规则</div>
      <div class="group-inro-content">
        统计群聊信息，按设定规则发放奖励
      </div>
    </div>
    <list-title title="担保token"></list-title>
    <div class="input-container">
      <div class="input-item">
        <div class="input-label">名称</div>
          <input disabled placeholder="小学同学游戏排名分配token"/>
        </div>
      <div class="input-item">
        <div class="input-label">担保数量</div>
        <input disabled :placeholder="money"/>
        <div class="input-pay" @click.stop="topay" >充值</div>
      </div>
    </div>

    <list-title title="详细规则"></list-title>
    <div class="input-container">
      <div class="input-item">
        <div class="input-label">第一名获得</div>
        <input disabled placeholder="100%"/>
      </div>
      <div class="input-item">
        <div class="input-label">第二名获得</div>
        <input disabled placeholder="0%"/>
      </div>
      <div class="input-item">
        <div class="input-label">第三名获得</div>
        <input disabled placeholder="0%"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListTitle from '@/components/ListTitle';

export default {
  components: {
    ListTitle,
  },

  data() {
    return {
    };
  },

  computed: {
    ...mapGetters([
      'money'
    ]),
  },
  
  mounted() {
  },

  methods: {
    topay() {
      wx.navigateTo({
        url: '/pages/paymoney/main',
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
    input[placeholder] {
      font-size: .8em;
    }
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
      z-index: 5;
    }
    input {
      padding-left: 90px;
    }
  }
}
</style>

