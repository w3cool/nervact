<template>
  <div class="rank-item">
    <div class="rank-number">{{ number }}</div>
    <div class="right-part"> 
      <div class="rank-title">{{ title }}</div>
      <div class="rank-friend">{{ friend }} 个好友在使用</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
    },
    title: {
      type: String,
    },
    friend: {
      type: Number,
      default: 0,
    }
  }
}
</script>

<style lang="scss" scoped>
.rank-item {
  display: flex;
  align-items: center;
  .rank-number {
    font-size: 30px;
    width: 40px;
    height: 40px;
    text-align: center;
    padding: 5px;
  }
  .right-part {
    padding: 12px;
    font-size: .9em;
    .rank-friend {
      font-size: .9em;
      color: rgba(0, 0, 0, .55);
    }
  }
}
</style>
