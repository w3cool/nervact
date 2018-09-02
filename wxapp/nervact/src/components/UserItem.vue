<template>
  <div 
    class="item-container"
    @click="toUrl"
  >
    <div class="left-part">
      <div class="picture-container">
        <img :src="imgUrl" alt="">
      </div>
      <div class="item-title">
        {{ title }}
      </div>
    </div>
    <div>
      <div class="right-icon">
        &gt;
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
    iconName: {
      type: String,
    }
  },

  methods: {
    toUrl() {
      wx.navigateTo({ url: this.url });
    }
  },

  computed: {
    imgUrl() {
      return `../../static/tool_icon/${this.iconName}.png`
    }
  }
}
</script>

<style lang="scss" scoped>
.item-container {
  padding: 8px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: .9em;
  border-bottom: 1px solid #eee;
  .left-part {
    display: flex;
    align-items: center;
    .picture-container {
      width: 30px;
      height: 30px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .right-icon {
    font-size: 30px;
    color: rgba(0, 0, 0, .35)
  }
  .item-title {
    padding-left: 8px;
  }
}
</style>

