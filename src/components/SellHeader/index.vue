<template>
  <div v-if="seller" class="header">
    <div class="content-wrapper" @click.stop.prevent="openDialog">
      <div class="avatar">
        <img :src="seller.avatar" width="100%" height="100%" alt="" />
      </div>
      <div class="content">
        <div class="title">
          <div class="brand"></div>
          <div class="name">{{ seller.name }}</div>
        </div>
        <div class="description">{{ `${seller.description}/${seller.deliveryTime}分钟到达` }}</div>
        <div class="support">
          <div class="support-icon"></div>
          <div class="support-text">
            {{ seller.supports[0].description }}
          </div>
        </div>
      </div>
      <div class="support-count">
        <span>{{ `${seller.supports.length}个` }}</span>
        <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M36 24.0083H12" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M24 12L36 24L24 36" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">
        {{ seller.bulletin }}
      </span>
      <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M36 24.0083H12" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M24 12L36 24L24 36" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%" alt="" />
    </div>
    <!-- 弹窗 -->
    <div v-if="dialog" v-disableBack class="dialog-wrapper">
      <div class="dialog-wrapper-detail">1121221</div>
      <div class="dialog-wrapper-close">
        <svg
          width="24"
          height="24"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click.stop.prevent="closeDialog"
        >
          <path d="M8 8L40 40" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M8 40L40 8" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { disableGestureBack } from '@/utils/back-control'
export default {
  name: 'SellHeader',
  beforeRouteLeave(to, from, next) {
    if (this.flag) {
      next(false)
    } else {
      next(true)
    }
  },
  data() {
    return {
      flag: true,
      cleanBackHandler: null,
      seller: null,
      dialog: null
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch('api/seller.json', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const { seller, errno } = await response.json()
        if (errno === 0 && seller) {
          this.seller = seller
        }
      } catch {
        this.seller = null
      }
    },
    openDialog() {
      this.cleanBackHandler = disableGestureBack()
      this.dialog = true
    },
    closeDialog() {
      this.cleanBackHandler?.()
      this.dialog = false
      // ...其他关闭逻辑
    }
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 136px;
  position: relative;
  background: rgb(7 17 27 / 50%);
  flex: 0 0 136px;
}
.header .dialog-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(7 17 27 / 80%);
  z-index: 9;
}
.dialog-wrapper .dialog-wrapper-detail {
  height: calc(100% - 50px);
}
.dialog-wrapper .dialog-wrapper-close {
  height: 50px;
  text-align: center;
}
.header .content-wrapper {
  display: flex;
  align-items: center;
  padding: 24px 12px 18px 24px;
  position: relative;
}
.content-wrapper .avatar {
  width: 64px;
  height: 66px;
  border-radius: 2px;
  overflow: hidden;
  margin-right: 16px;
}
.content-wrapper .content {
  flex: 1;
}
.content-wrapper .support-count {
  position: absolute;
  bottom: 14px;
  right: 12px;
  background: rgb(7 17 27 / 20%);
  padding: 0 8px;
  height: 24px;
  border-radius: 14px;
  display: flex;
  align-items: center;
}
.support-count span {
  font-size: 10px;
  color: #fff;
  margin-right: 2px;
}
.content-wrapper .content .title {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}
.content-wrapper .content .description {
  font-size: 12px;
  color: #fff;
  margin-bottom: 8px;
}
.content-wrapper .content .support {
  display: flex;
  align-items: center;
}
.support .support-icon {
  flex: 0 0 12px;
  height: 12px;
  background: url('./decrease_1@2x.png') no-repeat;
  background-size: 12px 12px;
}
.support .support-text {
  font-size: 10px;
  color: #fff;
  margin-left: 6px;
}
.content-wrapper .content .title .brand {
  flex: 0 0 30px;
  height: 18px;
  background: url('./brand@2x.png') no-repeat;
  background-size: 30px 18px;
}
.content-wrapper .content .title .name {
  font-size: 16px;
  color: #fff;
  font-weight: 700;
  margin-left: 6px;
}
.header .bulletin-wrapper {
  height: 28px;
  line-height: 28px;
  padding: 0 8px;
  background: rgb(7 17 27 / 20%);
  display: flex;
  align-items: center;
}
.bulletin-wrapper .bulletin-title {
  flex: 0 0 22px;
  height: 12px;
  margin-right: 4px;
  background: url('./bulletin@2x.png') no-repeat;
  background-size: 22px 12px;
}
.bulletin-wrapper .bulletin-text {
  flex: 1;
  font-size: 10px;
  color: #fff;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.header .background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  filter: blur(10px);
}
</style>
