<template>
  <div class="accout-info-title">
    <div>
      {{ title }}
    </div>
    <div class="action-text" @click="addGreement">
      {{ actionTitle }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    actionTitle: {
      type: String,
      default: '添加',
    },
    url: {
      type: String,
      default: '',
    }
  },

  methods: {
    addGreement() {
      const that = this;
      wx.navigateTo({
        url: that.url,
        success: (result)=>{
          
        },
        fail: ()=>{},
        complete: ()=>{}
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.accout-info-title {
  font-size: .8em;
  padding: 12px;
  color: rgba(0, 0, 0, .75);
  display: flex;
  justify-content: space-between;
  .action-text {
    color: #006dff;
  }
}
</style>

