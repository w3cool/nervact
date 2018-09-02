<template>
  <div class="item-container">
    <div>
      <div class="item-title">
        {{ title }}
      </div>
      <div class="item-subtitle">
        {{ subTitle ? subTitle : '' }}
      </div>
    </div>
    <div>
      <div class="item-number">
        {{ showPlus ? mark : ''}}
        {{ tokens }} Token
      </div>
      <div v-if="showIncome" class="item-number-info item-subtitle">
        {{ inCome }}
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
    tokens: {
      type: Number,
    },
    showIncome: {
      type: Boolean,
      default: true,
    },
    inCome: {
      type: String,
      default: '收入'
    },
    showPlus: {
      type: Boolean,
      default: true,
    },
    mark: {
      type: String,
      default: '+',
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
  .item-title {
    font-size: .9em;
  }
  .item-subtitle {
    color: rgba(0, 0, 0, .55);
    font-size: .9em;
    line-height: 20px;
    height: 20px;
  }
  .item-number-info {
    text-align: right;
  }
  .item-number {
    font-size: .8em;
  }
}
</style>

