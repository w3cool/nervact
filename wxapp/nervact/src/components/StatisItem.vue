<template>
  <div class="item-container">
    <div>
      <div class="item-title">
        {{ title }}
      </div>
      <div class="item-subtitle">
        参与收益 +{{ tokens }} token
      </div>
    </div>
    <div>
      <div class="item-number">
        {{ percent }} %
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
    tokens: {
      type: Number,
    },
    percent: {
      type: Number,
    },
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
  .item-number-info {
    text-align: right;
  }
}
</style>

