/*
 * @Author: hhhhhq
 * @Date: 2021-01-08 11:29:11
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-08 11:30:01
 * @Description: file content
 */
import axios from "axios"

axios.defaults.baseURL = process.env.VUE_APP_API_URL

export default axios
