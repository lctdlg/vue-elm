import Vue from 'vue'

// 图片懒加载
const lazyLoad = {
  inserted: (el, bingding) => {
    /**
     * 指令绑定元素时
     */
    // 获取图片连接 定义变量
    const imgSrc = bingding.value
    // 设置属性
    el.setAttribute('data-src', imgSrc)
    // 创建观察者
    el._observer = new IntersectionObserver((entries) => {
      // 传入的观察元素 数组
      entries.forEach((it) => {
        // 判断如果出现在屏幕
        if (it.isIntersecting) {
          const img = it.target
          img.src = img.dataset.src
          // 完成后解除监听
          el._observer.unobserve(img)
        }
      })
    })
    el._observer.observe(el)
  },
  unbind: (el) => {
    /**
     * 指令与元素解绑
     */
    if (el._observer) {
      el._observer.disconnect() // 清理观察者
    }
  }
}

// 阻止左侧右侧返回默认事件
const disableBack = {
  bind(el, binding) {
    // let startX = 0
    // const threshold = 60 // 滑动阈值
    // const touchStart = (e) => {
    //   startX = e.touches[0].clientX
    // }
    // const touchMove = (e) => {
    //   const deltaX = e.touches[0].clientX - startX
    //   alert(deltaX, '==')
    //   // 右滑超过阈值且不在弹窗内容区域滑动
    //   if (deltaX > threshold && !el.contains(e.target)) {
    //     e.preventDefault()
    //   }
    // }
    // el._preventSwipeBackHandlers = { touchStart, touchMove }
    // document.addEventListener('touchstart', touchStart, { passive: false })
    // document.addEventListener('touchmove', touchMove, { passive: false })
  },
  unbind(el) {
    // const { touchStart, touchMove } = el._preventSwipeBackHandlers || {}
    // document.removeEventListener('touchstart', touchStart)
    // document.removeEventListener('touchmove', touchMove)
  }
}

Vue.directive('lazy', lazyLoad)
Vue.directive('disableBack', disableBack)
