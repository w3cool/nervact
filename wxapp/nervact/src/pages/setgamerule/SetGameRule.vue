<template>
  <div>
    <list-title title="新建合约"></list-title>
    <div class="agreement-titlte-container">
      <agreement-title 
        title="游戏奖励分配Token" 
        subTitle="根据第三方应用结果分析代币" 
        iconName="game"
      >
      </agreement-title>
    </div>
    <list-title title="参与"></list-title>
    <div class="input-container">
      <div class="input-item">
        <div class="input-label">名称</div>
          <input v-model="name" placeholder="填写应用名称"/>
        </div>
      <div class="input-item">
        <div class="input-label">担保数量</div>
        <input v-model="amount" placeholder="填写数量"/>
      </div>
    </div>

    <list-title title="详细规则"></list-title>
    <div class="input-container">
      <div class="input-item">
        <div class="input-label">第一名获得</div>
          <input v-model="field_1" placeholder=" 填写细则， 如： 50% "/>
      </div>
      <div class="input-item">
        <div class="input-label">第二名获得</div>
          <input v-model="field_2" placeholder="填写细则"/>
      </div>
      <div class="input-item">
        <div class="input-label">第三名获得</div>
          <input v-model="field_3" placeholder="填写细则"/>
      </div>
    </div>
    <button class="new-btn" @click="addNew">新建</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import ListTitle from '@/components/ListTitle';
import AgreementTitle from '@/components/AgreementTitle';
import { showSuccess } from '../../util.js';

export default {
  components: {
    ListTitle,
    AgreementTitle,
  },
  data() {
    return {
      name: '',
      amount: '',
      field_1: '',
      field_2: '',
      field_3: '',
    };
  },
  
  mounted() {
  },

  methods: {
    addNew() {
      const { name, amount, desc, field_1, field_2, field_3} = this;
      this.createContracts({
        name,
        amount,
        desc,
        field_1,
        field_2,
        field_3,
      });
      showSuccess('创建成功');
      setTimeout(() => {
        wx.navigateBack({
          delta: 1
        });
      }, 500);
    },
    ...mapActions([
      'createContracts'
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
    }
    input {
      padding-left: 90px;
    }
  }
}
.new-btn {
  margin-top: 24px;
  background-color: #0066cd;
  color: white;
}

.agreement-titlte-container {
  background-color: white;
}
</style>

