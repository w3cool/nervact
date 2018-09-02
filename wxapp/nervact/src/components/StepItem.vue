<template>
  <div class="step-item">
    <div class="step-chart">
      <div class="step-circle" :class="[!isFinished ? 'gray-border' : '']"></div>
      <div v-if="!isLast" class="step-line" :class="[!isFinished ? 'gray-border' : '']"></div>
    </div>
    <div>
      <div class="step-title">{{ title }}</div>
      <div class="step-notice">{{ notice }}</div>
      <div class="step-content">{{ content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isLast: {
      type: Boolean,
      default: false,
    },
    isFinished: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
    },
    notice: {
      type: String,
      default: '',
    },
    content: {
      type: String,
    },
  }
}
</script>

<style lang="scss" scoped>
.step-item {
  font-size: .9em;
  color: rgba(0, 0, 0, .75);
  display: flex;
  padding-top: 10px;
  padding-left: 12px;
  .step-chart {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-right: 12px;
    .step-circle {
      height: 20px;
      background-color: white;
      width: 20px;
      border-radius: 50%;
      border: 1px solid #0066cd;
    }
    .step-line {
      position: absolute;
      border-left: 1px solid #0066cd;
      height: 47px;
      left: 11px;
      top: 21px;
    }
    .gray-border {
      border-color: #cccccc;
    }
  }
  .step-title {
  }
  .step-notice {
    color: red;
    font-size: .8em;
    padding-right: 50px;
  }
  .step-content {
    color: rgba(0, 0, 0, .45);
    font-size: .8em;
    padding-right: 50px;
  }
}
</style>

