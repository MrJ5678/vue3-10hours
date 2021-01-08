/*
 * @Author: hhhhhq
 * @Date: 2020-12-18 11:31:02
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-06 11:43:30
 * @Description: file content
 */
import { createApp } from "vue"
import App from "./App.vue"
import "./assets/style.css"
import router from "./router"
import store from "./store/index"

const app = createApp(App)
app.use(router)
app.use(store)
app.mount("#app")
