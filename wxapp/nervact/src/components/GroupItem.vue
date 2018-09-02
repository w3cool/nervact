<template>
  <div class="item-container">
      <div class="item item-title">
        {{ groupTitle }}
      </div>
      <div class="item info">
        {{ totalToken }}
      </div>
      <div class="item info">
        {{ averageToken }}
      </div>
      <div class="item info">
        {{ rank }}
      </div>
  </div>
</template>

<script>
export default {
  props: {
    groupTitle: {
      type: String,
    },
    totalToken: {
      type: String || Number,
    },
    averageToken: {
      type: String || Number,
    },
    rank: {
      type: String || Number,
    },
  }
}
</script>

<style lang="scss" scoped>
.item-container {
  padding: 8px 12px;
  display: flex;
  align-items: center;
  font-size: .9em;
  border-bottom: 1px solid #eee;
}
.item {
  flex-grow: 1;
}
.info {
  color: rgba(0, 0, 0, .55);
  font-size: .8em;
}
.item-title {
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  white-space: nowrap;
  width: 40px;
}
</style>

