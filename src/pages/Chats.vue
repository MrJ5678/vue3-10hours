<!--
 * @Author: hhhhhq
 * @Date: 2021-01-05 15:19:23
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-07 11:17:53
 * @Description: file content
-->
<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-center text-2xl">real time chat</h1>
      <div class="border rounded-lg">
        <div class="h-64 p-2" v-if="!state.isLoading">
          <div
            v-for="chat in state.chats"
            :key="chat.message"
            class="w-full"
            :class="chat.userId === userId ? 'text-right' : 'text-left'"
          >
            {{ chat.message }}
          </div>
        </div>
        <div class="h-64 p-2" v-else>loading ...</div>
      </div>
      <div class="h-8 p-2">
        <input
          class="p-1 border rounded shadow"
          type="text"
          v-model="state.message"
          placeholder="start typing ..."
          @keydown.enter="addMessage"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { computed, onMounted, reactive } from "vue"
import firebase from "../utilities/firebase"
import { useStore } from "vuex"

export default {
  name: "Chat",
  setup() {
    const state = reactive({
      chats: {},
      isLoading: false,
      message: "",
      collection: null,
    })

    const store = useStore()
    const userId = computed(() => store.state.authUser.uid)

    onMounted(async () => {
      const db = firebase.database()
      state.collection = db.ref("chats")
      state.isLoading = true
      const data = await state.collection.once("value")
      state.chats = data.val()

      // state.collection.on("value", snapshot => {
      //   state.chats = snapshot.val()
      // })
      state.isLoading = false
    })

    function addMessage() {
      console.log("addMessage")
      const newChat = state.collection.push()
      newChat.set({ userId: userId, message: state.message })
      state.message = ""
    }

    return { state, addMessage, userId }
  },
}
</script>

<style></style>
