import Vue from 'vue'

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

Vue.directive('lazy', lazyLoad)
