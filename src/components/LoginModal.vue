<!--
 * @Author: hhhhhq
 * @Date: 2020-12-22 15:22:31
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-12-30 10:56:14
 * @Description: file content
-->
<template>
  <div>
    <section
      class="h-screen w-screen bg-gray-400 fixed top-0 opacity-50 z-20"
      @click="close"
    ></section>
    <div class="absolute inset-0">
      <div class="flex h-full">
        <div class="m-auto bg-white p-2 rounded shadow z-30 w-1/3">
          <div class="p-2 border">
            <h1 class="mx-2 text-4xl text-center">Login</h1>
            <google-login @close-login-from-google="close"></google-login>
            <p class="my-5 text-center">Or</p>
            <form class="px-2 my-2" @submit.prevent="submit">
              <div class="my-4">
                <label for="username">Email or Username</label>
                <input
                  ref="emailRef"
                  id="username"
                  v-model="email"
                  class="rounded shadow p-2 w-full"
                  type="text"
                  placeholder="enter your email or username"
                />
              </div>
              <div class="my-4">
                <label for="password">Password</label>
                <input
                  id="password"
                  v-model="password"
                  class="rounded shadow p-2 w-full"
                  type="password"
                  placeholder="enter your password"
                />
              </div>
              <div class="my-4 login-button-wrapper">
                <button
                  type="submit"
                  class="w-full p-2 rounded shadow-md bg-gradient-to-r from-red-700 to-pink-600 text-white loginButton"
                  :class="{ isLoading }"
                  :disabled="isLoading"
                >
                  <span v-if="!isLoading">login</span>
                  <span v-else>loading</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../utilities/firebase"
import GoogleLogin from "./Login/GoogleLogin.vue"

export default {
  name: "LoginModal",
  components: {
    GoogleLogin,
  },
  data() {
    return {
      email: "Mr.j@tom.com",
      password: "123456",
      isLoading: false,
    }
  },
  mounted() {
    this.$refs.emailRef.focus()
  },
  methods: {
    submit() {
      // submit the form
      console.log("submit")
      this.isLoading = true
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.email = ""
          this.password = ""
          this.isLoading = false
          this.close()
        })
        .catch(e => {
          console.log(e)
          this.isLoading = false
        })
    },
    close() {
      this.$emit("close-login-modal")
    },
  },
}
</script>

<style>
.login-button-wrapper .isLoading {
  background-image: none;
  background-color: grey;
  cursor: not-allowed;
}
</style>
