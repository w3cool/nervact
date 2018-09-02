<template>
  <div class="item-container">
      <div class="item">
        <div class="avatar-container">
          <img :src="avatarUrl" />
        </div>
      </div>
      <div class="item">
        {{ userName }}
      </div>
      <div class="item info">
        <div class="picture">
          图文 {{ pictureInfo }}
        </div>
      </div>
      <div class="item info">
        <div class="text">
          文字 {{ textInfo }}
        </div>
      </div>
      <div class="item info">
        获得 {{ tokens }} token
      </div>
  </div>
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
    },
    pictureInfo: {
      type: Number,
      default: 0
    },
    textInfo: {
      type: Number,
      default: 0,
    },
    tokens: {
      type: String || Number,
    },
  },
  data() {
    return {
      avatarUrl: '../../static/tool_icon/user_box.png'
    }
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
.picture {
  background-color: #1173BB;
  border-radius: 4px;
  color: white;
  display: inline-block;
  padding: 4px;
  font-size: .8em;
}
.text {
  border: 1px solid #1173BB;
  border-radius: 4px;
  color: #1173BB;
  display: inline-block;
  padding: 2px;
  font-size: .8em;
}
.avatar-container {
  width: 30px;
  height: 30px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>

