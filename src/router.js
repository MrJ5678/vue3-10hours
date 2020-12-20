/*
 * @Author: hhhhhq
 * @Date: 2020-12-20 10:38:45
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-12-20 10:38:46
 * @Description: file content
 */
import { createRouter, createWebHashHistory } from "vue-router"
import DcHeros from "./components/DcHeros"
import Calendar from "./components/Calendar"

const routes = [
  { path: "/dc-heros", component: DcHeros },
  { path: "/calendar", component: Calendar },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
