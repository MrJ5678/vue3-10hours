<!--
 * @Author: hhhhhq
 * @Date: 2020-12-18 16:31:07
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-12-22 21:22:04
 * @Description: file content
-->
<template>
  <nav
    class="w-full text-2xl bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2"
  >
    <router-link v-for="item in list" :key="item.to" :to="item.to">{{
      item.title
    }}</router-link>
    <button @click="$emit('open-login-modal')">Login</button>
  </nav>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      list: [
        { title: "Dc heros", to: "/dc-heros" },
        { title: "Calendar", to: "/calendar" },
        { title: "Markdown", to: "/markdown" },
        { title: "Slider Carousel", to: "/slider" },
      ],
    }
  },
}
</script>

<style>
nav a {
  margin-right: 1.5rem;
}
</style>
