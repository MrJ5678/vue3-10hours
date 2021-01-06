/*
 * @Author: hhhhhq
 * @Date: 2021-01-05 11:16:44
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-05 11:40:24
 * @Description: file content
 */
import { ref } from "vue"
export default function useDebounce() {
  const timeout = ref("")

  function debounce(func, wait = 1000) {
    console.log("开始执行 debounce")
    if (timeout.value) {
      clearTimeout(timeout.value)
    }
    timeout.value = setTimeout(func, wait)
    console.log("结束执行 debounce")
  }

  return debounce
}
