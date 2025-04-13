export const disableGestureBack = () => {
  // 使用touchstart防止滑动
  // document.addEventListener(
  //   'touchstart',
  //   (e) => {
  //     console.log(e, '==')
  //     if (e.touches.length > 0) {
  //       const touch = e.touches[0]
  //       alert(touch.clientX)
  //       if (touch.clientX <= 50) {
  //         e.preventDefault() // 阻止默认事件 也就是手势返回
  //       }
  //     }
  //   },
  //   {
  //     passive: false
  //   }
  // )
  // 返回清理函数
  return () => {
    window.removeEventListener('touchstart', () => {})
  }
}
