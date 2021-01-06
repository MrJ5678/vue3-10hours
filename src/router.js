/*
 * @Author: hhhhhq
 * @Date: 2020-12-20 10:38:45
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-05 15:20:19
 * @Description: file content
 */
import { createRouter, createWebHashHistory } from "vue-router"
import Home from "./pages/Home"
import DcHeros from "./pages/DcHeros"
import Calendar from "./pages/Calendar"
import Markdown from "./pages/Markdown"
import Slider from "./pages/Slider"
import Calculator from "./pages/Calculator"
import ReuseableModal from "./pages/ReuseableModal"
import Chats from "./pages/Chats"

const routes = [
  { path: "/", component: Home },
  { path: "/dc-heros", component: DcHeros },
  { path: "/calendar", component: Calendar },
  { path: "/markdown", component: Markdown },
  { path: "/slider", component: Slider },
  { path: "/calculator", component: Calculator },
  { path: "/reuseableModal", component: ReuseableModal },
  { path: "/chats", component: Chats },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
