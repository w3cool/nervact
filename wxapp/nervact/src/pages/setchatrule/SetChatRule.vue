<template>
  <div>
    <list-title title="新建合约"></list-title>
    <div class="agreement-titlte-container">
      <agreement-title 
        title="按群聊分配Token" 
        subTitle="社区群聊内容贡献获得token" 
        iconName="group_chat"
      >
      </agreement-title>
    </div>
    <list-title title="参与"></list-title>
    <div class="input-container">
      <div class="input-item">
        <div class="input-label">名称</div>
          <input v-model="name" placeholder="区块链群聊排名分配token"/>
        </div>
      <div class="input-item">
        <div class="input-label">担保数量</div>
        <input v-model="amount" placeholder="1000"/>
        <!-- <div class="input-pay">充值</div> -->
      </div>
    </div>

    <list-title title="详细规则"></list-title>
    <div class="input-container">
      <div class="input-item input-area">
        <div class="input-label">有效关键字</div>
        <textarea :value="field_1" auto-height  />
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
      desc: '社区群聊贡献内容获得token',
      field_1: '区块链、共识机制、去中心化、CITA、存在性证明、经济模型、智能合约、侧链、隔离验证、零知识证明、稳定货币、Dapp、DAG、Nervos、PBFT、DAG',
      field_2: '',
      field_3: '',
    };
  },
  
  mounted() {
  },

  methods: {
    addNew() {
      // const { name, amount, desc, field_1, field_2, field_3} = this;
      // this.createContracts({
      //   name,
      //   amount,
      //   desc,
      //   field_1,
      //   field_2,
      //   field_3,
      // });
      showSuccess('新建成功')
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
      word-break:break-all
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
    textarea {
      padding-top: 20px;
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

