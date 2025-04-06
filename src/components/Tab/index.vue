<template>
  <div ref="tab" class="tab">
    <div v-for="(it, index) in routerList" :key="index" class="tab-item">
      <RouterLink :to="it.url">{{ it.name }}</RouterLink>
    </div>
    <div ref="tab-bar" class="tab-bar"></div>
  </div>
</template>

<script>
export default {
  name: 'Mytab',
  data() {
    return {
      routerList: [
        {
          url: '/home/goods',
          name: '商品',
          id: 0
        },
        {
          url: '/home/ratings',
          name: '评论',
          id: 1
        },
        {
          url: '/home/seller',
          name: '商家',
          id: 2
        }
      ],
      currentId: 0,
      width: 0
    }
  },
  mounted() {
    this.init()
    window.addEventListener('resize', this.init)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.init)
  },
  methods: {
    // 方案1
    // init() {
    //   this.currentId = this.routerList.filter((it) => it.url === this.$route.path)[0].id
    //   const width = this.$refs['tab'].clientWidth / this.routerList.length
    //   const leftLists = []
    //   this.routerList.forEach((_it, index) => {
    //     leftLists.push(width * index)
    //   })
    //   this.$refs['tab-bar'].style.width = width + 'px'
    //   this.$refs['tab-bar'].style.left = leftLists[this.currentId] + 'px'
    //   this.$watch('$route.name', () => {
    //     this.currentId = this.routerList.filter((it) => it.url === this.$route.path)[0].id
    //     this.$refs['tab-bar'].style.left = leftLists[this.currentId] + 'px'
    //   })
    // }
    // 方案2
    init() {
      this.width = this.$refs['tab'].clientWidth / this.routerList.length
      this.$refs['tab-bar'].style.width = this.width + 'px'
      this.currentId = this.routerList.filter((it) => it.url === this.$route.path)[0].id
      const leftLists = []
      this.routerList.forEach((_it, index) => {
        leftLists.push(this.width * index)
      })
      this.$refs['tab-bar'].style.transform = `translateX(${leftLists[this.currentId]}px) translateZ(0px)`
      this.$watch('$route.name', () => {
        this.currentId = this.routerList.filter((it) => it.url === this.$route.path)[0].id
        this.$refs['tab-bar'].style.transform = `translateX(${leftLists[this.currentId]}px) translateZ(0px)`
      })
    }
  }
}
</script>

<style scoped>
.tab {
  display: flex;
  position: relative;
}
.tab .tab-bar {
  position: absolute;
  bottom: 0;
  /* left: 0; */
  /* width: 100px; */
  /* width: var(--width); */
  height: 2px;
  background: #f01414;
  /* transition: property duration timing-function delay;
  property：指定应用过渡效果的 CSS 属性名称。可以是一个具体的属性，如 color、background-color，或者是 all 来应用所有可过渡的属性。
  duration：过渡效果持续的时间，单位为秒（s）或毫秒（ms）。
  timing-function：定义动画的速度曲线，如 linear、ease、ease-in、ease-out、ease-in-out 或 cubic-bezier 函数。
  delay：过渡效果开始前的延迟时间，单位为秒（s）或毫秒（ms）。 */
  transition: all 0.3s linear;

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

@keyframes TabsMove {
  from {
    transform: translateX(0);
  }
  to {
    /* 变量无法生效 */
    transform: translateX(var(--left));
  }
}
</style>
