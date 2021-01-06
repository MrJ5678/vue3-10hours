<!--
 * @Author: hhhhhq
 * @Date: 2020-12-16 08:33:41
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-12-30 11:04:31
 * @Description: file content
-->
<template>
  <app-header :isLoggedIn="isLoggedIn" @open-login-modal="isLoginOpen = true" />
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <teleport to="body">
    <login-modal v-if="isLoginOpen" @close-login-modal="isLoginOpen = false" />
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
  data() {
    return {
      isLoginOpen: false,
      isLoggedIn: false,
      authUser: {},
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        this.isLoggedIn = true
        this.authUser = user
      } else {
        // No user is signed in.
        this.isLoggedIn = false
        this.authUser = {}
      }
    })
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
