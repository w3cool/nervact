<template>
    <div class="rules-container">
        <div class="rules-intro">
            <div>
                <div class="intro-title">
                    {{ title }}
                    <span class="intro-time">&nbsp; 连续使用1天</span>
                </div>
                <div class="intro-desc">
                    {{ intro }}
                </div>
            </div>
            <!-- <div class="link-style" @click.stop="toUrl">
                详情
            </div> -->
        </div>
        <div class="input-container">
            <div class="input-item">
                <div class="input-label">收益:</div>
                <input disabled placeholder="623Token"/>
            </div>
            <div class="input-item">
                <div class="input-label">群:</div>
                <input disabled placeholder="3个"/>
            </div>
            <div class="input-item">
                <div class="input-label">好友:</div>
                <input disabled placeholder="12"/>
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
        intro: {
            type: String,
        },
        url: {
            type: String,
            default: '',
        }
    },

    // methods: {
    //     toUrl() {
    //         const that = this;
    //         wx.navigateTo({
    //             url: that.url,
    //         });
    //     },
    // }
};
</script>

<style lang="scss" scoped>
.rules-container {
    background-color: white;
    margin-top: 24px;
    .rules-intro {
        padding: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: .9em;
        .intro-desc {
            color: rgba(0, 0, 0, 0.55);
            font-size: .9em;
        }
        .intro-time {
            color: rgba(0, 0, 0, 0.55);
            font-size: .8em;
        }
    }
    .link-style {
        color: #0066cd;
    }
}
.input-container {
  background-color: white;
  .input-item {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    padding: 12px;
    .input-label {
      position: absolute;
      font-size: 0.9em;
      color: rgba(0, 0, 0, 0.75);
    }
    .input-pay {
      font-size: 0.9em;
      color: #0066cd;
      position: absolute;
      right: 12px;
      top: 12px;
    }
    input {
      padding-left: 75px;
    }
  }
}
</style>

