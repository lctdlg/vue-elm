/**
 * 防抖函数
 * @param {Function} func 被防抖的函数
 * @param {Number} duration 防抖时间
 * @returns {Function} 返回一个防抖函数
 */
export function debounce(func, duration = 500) {
  let timer
  return function () {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func()
    }, duration)
  }
}
