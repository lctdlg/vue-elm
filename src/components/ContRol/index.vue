<template>
  <div class="cont-rol">
    <!--  @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled" -->
    <Transition name="move">
      <div v-show="food?.count > 0" class="cart-decrease" @click.stop="_decrease">
        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
            fill="#f01414"
            stroke="#f01414"
            stroke-width="4"
            stroke-linejoin="round"
          />
          <path d="M16 24L32 24" stroke="#FFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </Transition>
    <Transition name="num">
      <div v-show="food?.count > 0" class="cart-count">{{ food.count }}</div>
    </Transition>
    <!-- stop 阻止冒泡 在子组件注册的事件会传播到父组件 prevent阻止默认原生事件 比如a标签的跳转 -->
    <div class="cart-add" @click="_increase">
      <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
          fill="#f01414"
          stroke="#f01414"
          stroke-width="4"
          stroke-linejoin="round"
        />
        <path d="M24 16V32" stroke="#FFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M16 24L32 24" stroke="#FFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
export default {
  name: 'ContRol',
  props: {
    food: {
      type: Object,
      default: null
    }
  },
  methods: {
    // 进入前
    beforeEnter(el) {},
    // 进入了
    enter(el, done) {},
    afterEnter() {},
    enterCancelled() {},
    // 移出前
    beforeLeave() {},
    leave: function (el, done) {
      // ...
      done()
    },
    afterLeave: function (el) {
      // ...
    },
    // leaveCancelled 只用于 v-show 中
    leaveCancelled: function (el) {
      // ...
    },
    _increase(e) {
      this.$emit('increase', e.target)
    },
    _decrease() {
      this.$emit('decrease')
    }
  }
}
</script>

<style scoped>
.cont-rol {
  display: flex;
  align-items: center;
}
.cont-rol .cart-count {
  font-size: 10px;
  color: #666;
}
.cont-rol .cart-add,
.cart-decrease {
  padding: 6px;
  width: 36px;
  height: 36px;
  box-sizing: border-box;
}
/* 进入 */
.move-enter-active {
  animation: slideLeft 0.3s linear;
}
/* 移出 */
.move-leave-active {
  animation: slideRight 0.3s linear;
}
/* 打滚动画 */
@keyframes slideLeft {
  from {
    transform: translateX(100%) rotate(180deg);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slideRight {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%) rotate(180deg);
  }
}
</style>
