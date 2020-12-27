<!--
 * @Author: hhhhhq
 * @Date: 2020-12-22 15:22:31
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-12-27 15:18:06
 * @Description: file content
-->
<template>
  <div>
    <section
      class="h-screen w-screen bg-gray-400 fixed top-0 opacity-50 z-20"
      @click="$emit('close-login-modal')"
    ></section>
    <div class="absolute inset-0">
      <div class="flex h-full">
        <div class="m-auto bg-white p-2 rounded shadow z-30 w-1/3">
          <div class="p-2 border">
            <h1 class="mx-2 text-xl text-center">Login</h1>
            <form class="px-2 my-2" @submit.prevent="submit">
              <div class="my-4">
                <label for="username">Email or Username</label>
                <input
                  id="username"
                  v-model="form.email"
                  class="rounded shadow p-2 w-full"
                  type="text"
                  placeholder="enter your email or username"
                />
              </div>
              <div class="my-4">
                <label for="password">Password</label>
                <input
                  id="password"
                  v-model="form.password"
                  class="rounded shadow p-2 w-full"
                  type="password"
                  placeholder="enter your password"
                />
              </div>
              <div class="my-4">
                <button
                  type="submit"
                  class="w-full p-2 rounded shadow-md bg-gradient-to-r from-red-700 to-pink-600 text-white"
                >
                  login
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
export default {
  name: "LoginModal",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    }
  },
  methods: {
    submit() {
      // submit the form
    },
  },
}
</script>

<style></style>
