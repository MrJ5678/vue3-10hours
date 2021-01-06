<!--
 * @Author: hhhhhq
 * @Date: 2020-12-30 10:47:13
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-12-30 10:50:12
 * @Description: file content
-->
<template>
  <section class="my-3 text-center">
    <button class="border px-2 rounded" @click="loginWithGoogle">
      login with Google
    </button>
  </section>
</template>

<script>
import firebase from "../../utilities/firebase"

export default {
  name: "GoogleLogin",
  methods: {
    loginWithGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider()
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken
          // The signed-in user info.
          var user = result.user
          console.log(token)
          console.log(user)
          this.$emit("close-login-from-google")
          // ...
        })
        .catch(() => {})
    },
  },
}
</script>

<style></style>
