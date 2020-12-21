<!--
 * @Author: hhhhhq
 * @Date: 2020-12-18 16:31:07
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-12-21 09:24:24
 * @Description: file content
-->
<template>
  <nav
    class="w-full text-4xl bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2"
  >
    <router-link v-for="item in list" :key="item.to" :to="item.to">{{
      item.title
    }}</router-link>
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
