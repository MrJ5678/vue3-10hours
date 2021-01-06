/*
 * @Author: hhhhhq
 * @Date: 2021-01-05 10:58:36
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-05 11:07:57
 * @Description: file content
 */
import { onMounted, onUnmounted } from "vue"
export default function useWindowEvent(eventName, handleEvent) {
  onMounted(() => {
    window.addEventListener(eventName, handleEvent)
  })

  onUnmounted(() => {
    window.removeEventListener(eventName, handleEvent)
  })
}
