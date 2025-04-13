<template>
  <div class="shop-car">
    <div class="container" @click="toggleList">
      <div class="container-left">
        <div class="car-wrapper">
          <div :class="['car', carClass]">
            <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M39 32H13L8 12H44L39 32Z" fill="#999" />
              <path
                d="M3 6H6.5L8 12M8 12L13 32H39L44 12H8Z"
                stroke="#999"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle
                cx="13"
                cy="39"
                r="3"
                stroke="#999"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle
                cx="39"
                cy="39"
                r="3"
                stroke="#999"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="count-wrapper">
            <div class="count">{{ count }}</div>
          </div>
        </div>
        <div class="price">￥{{ totalPrice }}</div>
        <div class="desc">另需配送费￥4元</div>
      </div>
      <div class="container-right" @click="handlePay">
        <div class="pay" :class="[totalPrice >= 20 ? 'pay-light' : '']">{{ payDesc }}</div>
      </div>
    </div>
    <div class="ball-container">
      <div v-for="(ball, index) in balls" :key="index">
        <Transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
          <div v-show="ball.show" class="ball">
            <div class="inner inner-hook"></div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>
<script>
const BALL_LEN = 10
function createBalls() {
  const balls = []
  for (let i = 0; i < BALL_LEN; i++) {
    balls.push({
      show: false
    })
  }
  return balls
}
export default {
  name: 'ShopCar',
  props: {
    selectFoods: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      show: false,
      balls: createBalls(),
      dropBalls: []
    }
  },
  computed: {
    totalPrice() {
      let price = 0
      this.selectFoods.forEach((it) => {
        price += it.count * it.price
      })
      return price
    },
    count() {
      let num = 0
      this.selectFoods.forEach((it) => {
        num += it.count
      })
      return num
    },
    payDesc() {
      if (this.totalPrice === 0) {
        return '￥20元起送'
      } else if (this.totalPrice < 20) {
        return `还差￥${20 - this.totalPrice}元起送`
      }
      return '去结算'
    },
    carClass() {
      if (this.count) {
        return 'car-light'
      }
      return ''
    }
  },
  methods: {
    drop(e) {
      for (let i = 0; i < this.balls.length; i++) {
        const ball = this.balls[i]
        if (!ball.show) {
          ball.show = true
          ball.el = e
          this.dropBalls.push(ball)
          return
        }
      }
    },
    handlePay() {
      if (this.totalPrice >= 20) {
        alert('请先登录')
      }
    },
    // 打开列表
    toggleList() {
      // if (this.count) {
      // }
    },
    // 进入中
    beforeEnter(e) {
      const ball = this.dropBalls[this.dropBalls.length - 1]
      const rect = ball.el.getBoundingClientRect()
      const x = rect.left - 32
      const y = -(window.innerHeight - rect.top - 22)
      e.style.display = ''
      /**
       * translate3d可以开启GPU加速
       */
      e.style.webkitTransform = `translate3d(0,${y}px,0)`
      e.style.transform = `translate3d(0,${y}px,0)`
      const inner = e.querySelector('.inner-hook')
      inner.style.webkitTransform = `translate3d(${x}px,0,0)`
      inner.style.transform = `translate3d(${x}px,0,0)`
    },
    // done设置完成
    enter(e, done) {
      this._reflow = document.body.offsetHeight
      e.style.webkitTransform = `translate3d(0,0,0)`
      e.style.transform = `translate3d(0,0,0)`
      const inner = e.querySelector('.inner-hook')
      inner.style.webkitTransform = `translate3d(0,0,0)`
      inner.style.transform = `translate3d(0,0,0)`
      // 使用js设置了动画效果 必须设置监听完成transitionend 过渡事件 再进行done回调 或者会立即同步调用 也就是立刻完成过渡
      e.addEventListener('transitionend', done)
    },
    // 完成后
    afterEnter(e) {
      const ball = this.dropBalls.shift()
      // 球的状态关闭 dom随之display = 'none 加上也可以
      ball.show = false
      e.style.display = 'none'
    }
  }
}
</script>
<style scoped>
.shop-car {
  width: 100%;
  height: 100%;
}
.ball-container .ball {
  position: fixed;
  left: 32px;
  bottom: 22px;
  z-index: 200;
  /**
  过渡效果 贝塞尔曲线动画效果
   */
  transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41);
}
.ball-container .ball .inner {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #f01414;
  transition: all 0.4s linear;
}
.shop-car .container {
  width: 100%;
  height: 100%;
  display: flex;
}
.container .container-left {
  flex: 1;
  background: #07111b;
}
.container-left .car-wrapper {
  position: relative;
  top: -10px;
  display: inline-block;
  width: 56px;
  height: 56px;
  margin: 0 12px;
  padding: 6px;
  box-sizing: border-box;
  background: #07111b;
  border-radius: 50%;
}
.car-wrapper .car {
  width: 44px;
  height: 44px;
  background: #333;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.car-wrapper .car-light {
  background: #f01414;
}
.car-light svg,
svg circle,
svg path {
  fill: #fff;
  stroke: #fff;
}
.car-wrapper .count-wrapper {
  position: absolute;
  top: 0;
  right: 0;
}
.count-wrapper .count {
  font-size: 10px;
  height: 16px;
  line-height: 16px;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(90deg, #fc9153, #f01414);
  padding: 0 5px;
  border-radius: 16px;
  text-align: center;
}
.container-left .price {
  display: inline-block;
  font-size: 16px;
  color: #999;
  margin-top: 12px;
  vertical-align: top;
  border-right: 1px solid rgb(255 255 255 / 10%);
  padding-right: 12px;
}
.container-left .desc {
  display: inline-block;
  color: #999;
  font-size: 10px;
  line-height: 24px;
  margin: 12px 0 0 12px;
  vertical-align: top;
}
.container .container-right {
  flex: 0 0 105px;
}
.container-right .pay {
  font-size: 12px;
  color: #999;
  height: 48px;
  line-height: 48px;
  text-align: center;
  background: #333;
}
.container-right .pay-light {
  background: #00b43c;
  color: #fff;
}
</style>
