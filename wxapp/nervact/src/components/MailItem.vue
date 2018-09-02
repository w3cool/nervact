<template>
  <div class="item-container">
    <div>
      <div class="item-title">
        {{ title }}
      </div>
      <div class="item-subtitle">
        {{ subTitle }}
      </div>
    </div>
    <div class="action-text" @click="changeEmail">
      更改邮箱
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
  },

  methods: {
    changeEmail() {
      console.log('改变邮箱')
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
  .item-subtitle {
    color: rgba(0, 0, 0, .55);
    font-size: .9em;
    line-height: 20px;
    height: 20px;
  }
  .action-text {
    color: #0066cd;
  }
}
</style>

