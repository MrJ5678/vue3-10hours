/*
 * @Author: hhhhhq
 * @Date: 2021-01-07 15:13:17
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-07 21:11:35
 * @Description: file content
 */
export default function(next, store) {
  if (!store.state.isLoggedIn) {
    next("/")
    store.commit("setLoginModal", true)
  } else {
    next()
  }
}
