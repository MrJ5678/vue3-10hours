<!--
 * @Author: hhhhhq
 * @Date: 2020-12-16 08:33:41
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-12-20 10:48:54
 * @Description: file content
-->
<template>
  <app-header />
  <div class="w-full flex">
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue"

export default {
  name: "App",
  components: {
    AppHeader,
  },
}
</script>

<style>
.textarea {
  vertical-align: bottom;
}
.x {
  justify-content: center;
}
</style>
