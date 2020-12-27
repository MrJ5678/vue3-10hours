/*
 * @Author: hhhhhq
 * @Date: 2020-12-21 12:23:30
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-12-21 15:53:46
 * @Description: file content
 */
export default {
  data() {
    return {
      timeout: "",
    }
  },
  methods: {
    debounce(func, wait = 1000) {
      if (this.timeout) {
        clearTimeout(this.timeout)
      }
      this.timeout = setTimeout(func, wait)
    },
  },
}
