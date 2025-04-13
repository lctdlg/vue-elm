<template>
  <div class="tab-wrapper">
    <div class="container">
      <div ref="tab" class="tab">
        <div v-for="(it, index) in tabs" :key="index" class="tab-item" @click="switchTab(index)">
          <div>{{ it.name }}</div>
        </div>
        <div ref="tab-bar" class="tab-bar" :style="{ width: tabWidth + 'px' }"></div>
      </div>
      <div class="slide-wrapper">
        <KeepAlive>
          <Component :is="activeComponent" ref="component" />
        </KeepAlive>
      </div>
    </div>
  </div>
</template>

<script>
import { debounce } from '@/utils/index'
import Goods from '@/components/Goods'
import Ratings from '@/components/Ratings'
import Seller from '@/components/Seller'
export default {
  name: 'Mytab',
  props: {
    tabs: {
      type: Array,
      default: () => [
        {
          component: Goods,
          name: '商品',
          id: 0
        },
        {
          component: Ratings,
          name: '评论',
          id: 1
        },
        {
          component: Seller,
          name: '商家',
          id: 2
        }
      ]
    }
  },
  data() {
    return {
      currentIndex: 0,
      tabWidth: 0,
      tabPositions: []
    }
  },
  computed: {
    activeComponent() {
      const tab = this.tabs.find((t) => t.id === this.currentIndex)
      return tab ? tab.component : null
    },
    currentPosition() {
      return this.tabPositions[this.currentIndex] || 0
    }
  },
  mounted() {
    this.calculateLayout()
    window.addEventListener('resize', debounce(this.calculateLayout, 1500))
  },
  beforeDestroy() {
    window.removeEventListener('resize', debounce(this.calculateLayout, 1500))
  },
  methods: {
    calculateLayout() {
      const container = this.$refs.tab
      if (!container) return
      this.tabWidth = container.clientWidth / this.tabs.length
      this.tabPositions = this.tabs.map((_, i) => this.tabWidth * i)
      this.updateTabBar()
    },
    updateTabBar() {
      const tabBar = this.$refs['tab-bar']
      if (tabBar) {
        tabBar.style.transform = `translateX(${this.currentPosition}px)`
      }
    },
    switchTab(index) {
      this.currentIndex = index
      this.updateTabBar()
    }
  }
}
</script>

<style scoped>
.tab-wrapper {
  position: fixed;
  top: 136px;
  bottom: 0;
  left: 0;
  right: 0;
}
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.tab {
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  flex: 0 0 38px;
  height: 38px;
}
.slide-wrapper {
  flex: 1;
}
.tab .tab-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background: #f01414;
  /* transition: property duration timing-function delay;
  property：指定应用过渡效果的 CSS 属性名称。可以是一个具体的属性，如 color、background-color，或者是 all 来应用所有可过渡的属性。
  duration：过渡效果持续的时间，单位为秒（s）或毫秒（ms）。
  timing-function：定义动画的速度曲线，如 linear、ease、ease-in、ease-out、ease-in-out 或 cubic-bezier 函数。
  delay：过渡效果开始前的延迟时间，单位为秒（s）或毫秒（ms）。 */
  /* transition: all 0.3s linear; */
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); /* Material Design 标准曲线 */
  will-change: transform; /* 启用硬件加速 */

  /**-moz-animation: ; */
  /* animation: name duration timing-function delay iteration-count direction fill-mode; */
  /* animation: TabsMove 0.3s linear; */
}
.tab .tab-item {
  flex: 1;
  text-align: center;
  padding: 10px 0;
}
.tab-item a {
  text-decoration: none;
  font-size: 16px;
  color: #666;
  display: block;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  user-select: none;
  -moz-user-focus: none;
  -moz-user-select: none;
}

.tab-item a.router-link-active {
  color: #f01414;
}
</style>
