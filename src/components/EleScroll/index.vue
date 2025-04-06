<template>
  <div ref="scroll">
    <slot></slot>
  </div>
</template>
<script>
import BScroll from '@better-scroll/core'
export default {
  name: 'Elescroll',
  props: {
    click: {
      type: Boolean,
      default: true
    },
    scrollX: {
      type: Boolean,
      default: false
    },
    probeType: {
      type: Number,
      default: 3
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    data: {
      type: [Object, Array],
      default: () => []
    }
  },
  watch: {
    data() {
      setTimeout(() => {
        this.refresh()
      }, 20)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this._initScroll()
    })
  },
  methods: {
    _initScroll() {
      if (!this.$refs.scroll) {
        return
      }
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.scroll, {
          click: this.click,
          probeType: this.probeType,
          scrollX: this.scrollX
        })
        if (this.listenScroll) {
          const me = this
          this.scroll.on('scroll', (pos) => {
            me.$emit('scroll', pos)
          })
        }
      }
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    },
    scrollToElement(el, time) {
      this.scroll && this.scroll.scrollToElement(el, time)
    }
  }
}
</script>
