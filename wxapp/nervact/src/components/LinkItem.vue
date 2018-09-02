<template>
  <div 
    class="item-container"
    @click="toUrl"
  >
    <div class="left-part">
      <div class="item-title">
        {{ title }}
      </div>
    </div>
    <div>
      <div class="right-icon">
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    url: {
      type: String,
    },
  },

  methods: {
    toUrl() {
      wx.navigateTo({ url: this.url });
    }
  },
}
</script>

<style lang="scss" scoped>
.item-container {
  padding: 2px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: .9em;
  border-bottom: 1px solid #eee;
  .right-icon {
    font-size: 30px;
    color: rgba(0, 0, 0, .35)
  }
  .left-part {
    display: flex;
    align-items: center;
  }
  .item-title {
    padding-left: 8px;
  }
}
</style>

