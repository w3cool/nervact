<template>
  <div 
    class="item-container">
    <div class="left-part">
      <div class="picture-container">
        <img :src="imgUrl" alt="">
      </div>
      <div>
        <div class="item-title">
          {{ title }}
        </div>
        <div class="item-subtitle">
          {{ subTitle }}
        </div>
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
    subTitle: {
      type: String,
    },
    iconName: {
      type: String,
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
    .picture-container {
      width: 36px;
      height: 36px;
      margin-right: 8px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .item-subtitle {
      color: rgba(0, 0, 0, .55);
      font-size: .9em;
      line-height: 20px;
      height: 20px;
    }
  }
  .right-icon {
    font-size: 30px;
    color: rgba(0, 0, 0, .35)
  }
}
</style>

