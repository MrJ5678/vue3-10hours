/*
 * @Author: hhhhhq
 * @Date: 2020-12-18 11:31:02
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-12-29 21:42:21
 * @Description: file content
 */
import { createApp } from "vue"
import App from "./App.vue"
import "./assets/style.css"
import router from "./router"

const app = createApp(App)
app.use(router)
app.mount("#app")
