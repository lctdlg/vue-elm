<template>
  <Transition name="dialog-fade">
    <div v-show="visible" class="my-dialog__wrapper" @click.self="handleClose">
      <div class="my-dialog" :style="{ width: width, marginTop: top }">
        <div class="my-dialog__header">
          <slot name="title">
            <span v-if="title" class="my-dialog__title">{{ title }}</span>
          </slot>
          <button class="my-dialog__headerbtn" @click="handleClose">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
        <div class="my-dialog__body">
          <slot></slot>
        </div>
        <div v-if="$slots.footer" class="my-dialog__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: 'MyDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    closeOnClickModal: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleClose() {
      if (this.closeOnClickModal) {
        this.$emit('update:visible', false)
        this.$emit('close')
      }
    }
  }
}
</script>

<style scoped>
.my-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2000;
}
.my-dialog {
  position: relative;
  margin: 0 auto;
  background: #fff;
  /* border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3); */
  border-radius: 24px;
  box-shadow: 0px 10px 23px 0px #4a56871a;
  box-shadow: 0px 41px 41px 0px #4a568717;
  box-shadow: 0px 93px 56px 0px #4a56870d;
  box-shadow: 0px 166px 66px 0px #4a568703;
  box-shadow: 0px 259px 72px 0px #4a568700;
  box-sizing: border-box;
}
.my-dialog__header {
  padding: 20px 20px 10px;
}
.my-dialog__title {
  line-height: 24px;
  font-size: 18px;
  color: #303133;
}
.my-dialog__headerbtn {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 0;
  background: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
}
.my-dialog__body {
  padding: 30px 20px;
  color: #606266;
  font-size: 14px;
  line-height: 1.5;
}
.my-dialog__footer {
  padding: 10px 20px 20px;
  text-align: right;
}
.dialog-fade-enter-active {
  animation: dialog-fade-in 0.3s;
}
.dialog-fade-leave-active {
  animation: dialog-fade-out 0.3s;
}
@keyframes dialog-fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes dialog-fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
