<!--
 * @Author: hhhhhq
 * @Date: 2020-12-16 08:33:41
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-08 08:24:09
 * @Description: file content
-->
<template>
  <app-header />
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <teleport to="body">
    <div v-if="isLoginOpen">
      <login-modal />
    </div>
  </teleport>
</template>

<script>
import firebase from "./utilities/firebase"
import AppHeader from "./components/AppHeader.vue"
import LoginModal from "./components/LoginModal.vue"

export default {
  name: "App",
  components: {
    AppHeader,
    LoginModal,
  },
  computed: {
    isLoginOpen() {
      return this.$store.state.isLoginOpen
    },
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        this.$store.commit("setIsLoggedin", true)
        this.$store.commit("setAuthUser", user)
      } else {
        // No user is signed in.
        this.$store.commit("setIsLoggedin", false)
        this.$store.commit("setAuthUser", {})
      }
    })
    // console.log(this.$store.state)
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
