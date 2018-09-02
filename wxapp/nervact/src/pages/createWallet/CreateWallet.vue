<template>
  <div>
    <list-title title="输入邮箱"></list-title>
    <div class="input-container">
      <div class="input-item">
        <div class="input-label">邮箱</div>
          <input v-model="email" placeholder="12345@bitrun.com"/>
        </div>
        <setting-item 
          title="在小程序本地保存私钥"
          subTitle="您的私钥会被加密保存在本地"
        >
        </setting-item>
    </div>
    <button class="new-btn" @click="postEmail">新建</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ListTitle from '@/components/ListTitle';
import SettingItem from '@/components/SettingItem';

export default {
  components: {
    ListTitle,
    SettingItem,
  },
  data() {
    return {
      email: '',
    };
  },
  
  computed: {
    ...mapGetters([
      'userInfo',
    ])
  },

  mounted() {
  },

  methods: {
     ...mapActions([
      'createWallet',
    ]),
    postEmail() {
      const { nickName } = this.userInfo;
      const that = this;
      this.createWallet({
        email: that.email,
        name: nickName,
      })
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
</style>

