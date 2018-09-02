<template>
  <div>
    <list-title title="充值"></list-title>
    <div class="input-container">
      <div class="input-item">
        <div class="input-label">输入数量</div>
        <input v-model="money" />
      </div>
      <button @click="pay" class="confirm-btn">确认</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import ListTitle from '@/components/ListTitle';

export default {
  components: {
    ListTitle,
  },
  data() {
    return {
      money: 0,
    };
  },
  
  mounted() {
  },

  methods: {
    ...mapMutations({
      saveMoney: 'SAVE_MONEY',
    }),
    pay() {
      const that = this;
      this.saveMoney(that.money);
      wx.navigateBack({
        delta: 1
      });
    }
  },
};
</script>
<style lang="scss" scoped>
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
.confirm-btn {
  margin-top: 24px;
  background-color: #0066cd;
  color: white;
}
</style>

