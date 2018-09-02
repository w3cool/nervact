<template>
  <div class="accout-info-title">
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    }
  }
}
</script>

<style lang="scss" scoped>
.accout-info-title {
  font-size: .8em;
  padding: 12px;
  color: rgba(0, 0, 0, .75);
}
</style>

