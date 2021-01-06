<!--
 * @Author: hhhhhq
 * @Date: 2020-12-18 16:31:07
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-05 15:20:39
 * @Description: file content
-->
<template>
  <nav
    class="w-full text-2xl bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2"
  >
    <router-link v-for="item in list" :key="item.to" :to="item.to">{{
      item.title
    }}</router-link>
    <button v-if="!isLoggedIn" @click="$emit('open-login-modal')">Login</button>
    <button v-else class="mx-2" @click="logout">Log out</button>
  </nav>
</template>

<script>
import firebase from "../utilities/firebase"

export default {
  name: "AppHeader",
  props: {
    isLoggedIn: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      list: [
        { title: "Dc heros", to: "/dc-heros" },
        { title: "Calendar", to: "/calendar" },
        { title: "Markdown", to: "/markdown" },
        { title: "Slider", to: "/slider" },
        { title: "Calculator", to: "/calculator" },
        { title: "ReuseableModal", to: "/reuseableModal" },
        { title: "Chat", to: "/chats" },
      ],
    }
  },
  methods: {
    logout() {
      console.log("logout")
      firebase
        .auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
          // console.log(res)
        })
        .catch(error => {
          // An error happened.
          console.log(error)
        })
    },
  },
}
</script>

<style>
nav * {
  margin-right: 1.5rem;
}
button:disabled {
  cursor: not-allowed;
}
</style>
