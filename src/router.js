/*
 * @Author: hhhhhq
 * @Date: 2020-12-20 10:38:45
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-08 08:21:09
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
import UserCrud from "./pages/UserCrud"
import store from "./store/index"

const routes = [
  { path: "/", component: Home },
  { path: "/dc-heros", component: DcHeros },
  { path: "/calendar", component: Calendar },
  { path: "/markdown", component: Markdown },
  { path: "/slider", component: Slider },
  { path: "/calculator", component: Calculator, meta: { middleware: "auth" } },
  { path: "/reuseableModal", component: ReuseableModal },
  {
    path: "/chats",
    component: Chats,
    meta: { middleware: "auth" },
  },
  { path: "/crud", component: UserCrud },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, _, next) => {
  // console.log(store.state)
  if (to.meta.middleware) {
    const middleware = require(`./middleware/${to.meta.middleware}`)
    if (middleware) {
      middleware.default(next, store)
    }
  } else {
    next()
  }
})

export default router
