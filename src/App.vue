<!--
 * @Author: hhhhhq
 * @Date: 2020-12-16 08:33:41
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-12-22 21:24:53
 * @Description: file content
-->
<template>
  <app-header @open-login-modal="isLoginOpen = true" />
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <login-modal v-if="isLoginOpen" @close-login-modal="isLoginOpen = false" />
</template>

<script>
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
    }
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
