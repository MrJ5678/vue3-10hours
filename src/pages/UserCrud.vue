<!--
 * @Author: hhhhhq
 * @Date: 2021-01-07 20:54:55
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-08 16:40:23
 * @Description: file content
-->
<template>
  <section class="w-full flex">
    <div class="m-auto">
      <h1 class="text-2xl my-2 text-center">User Crud</h1>
      <div class="mt-10">
        <button class="px-2 py-1 border rounded" @click="isModalOpen = true">
          add user
        </button>
        <table>
          <thead>
            <tr>
              <th class="px-4 py-2 border">ID</th>
              <th class="px-4 py-2 border">avatar</th>
              <th class="px-4 py-2 border">first name</th>
              <th class="px-4 py-2 border">last name</th>
              <th class="px-4 py-2 border">email</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in state.users.data" :key="user.id">
              <td class="border px-4 py-2">{{ user.id }}</td>
              <td class="border px-4 py-2">
                <img
                  :src="user.avatar"
                  alt="user.first_name"
                  class="rounded-full"
                  width="50"
                />
              </td>
              <td class="border px-4 py-2">{{ user.first_name }}</td>
              <td class="border px-4 py-2">{{ user.last_name }}</td>
              <td class="border px-4 py-2">{{ user.email }}</td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-between mt-4">
          <button
            class="border py-2 px-3 rounded hover:shadow"
            @click="prev"
            :disabled="state.users.page === 1"
            :class="state.users.page === 1 ? 'bg-gray-100' : ''"
          >
            prev
          </button>
          <button
            class="border py-2 px-3 rounded hover:shadow"
            @click="next"
            :disabled="state.users.page === state.users.total_pages"
            :class="
              state.users.page === state.users.total_pages ? 'bg-gray-100' : ''
            "
          >
            next
          </button>
        </div>
      </div>
    </div>
  </section>
  <teleport to="body">
    <modal v-if="isModalOpen" @close="isModalOpen = false">
      <template #title>
        add new user
      </template>
      <template #body>
        <form @submit.prevent="submit">
          <div class="p-2">
            <label for="username">user name</label>
            <input
              id="username"
              type="text"
              v-model="state.form.name"
              class="w-full border p-2 rounded"
              placeholder="user name"
            />
          </div>
          <div class="p-2">
            <label for="email">email</label>
            <input
              id="email"
              type="email"
              v-model="state.form.email"
              class="w-full border p-2 rounded"
              placeholder="user email"
            />
          </div>
          <div class="p-2">
            <label for="avatar">avatar</label>
            <input
              id="avatar"
              type="text"
              v-model="state.form.avatar"
              class="w-full border p-2 rounded"
              placeholder="avatar url"
            />
          </div>
          <div class="p-2">
            <input
              type="submit"
              class="w-full border p-2 rounded hover:bg-gray-300"
              value="create"
            />
          </div>
        </form>
      </template>
    </modal>
  </teleport>
</template>

<script>
import { onMounted, reactive, ref } from "vue"
import Modal from "../components/Modal"
import axios from "../plugins/axios"

export default {
  name: "Crud",
  components: {
    Modal,
  },
  setup() {
    const isModalOpen = ref(false)
    const state = reactive({
      users: {},
      form: {
        name: "",
        email: "",
        avatar: "",
      },
    })

    onMounted(async () => {
      const { data } = await axios.get(`/users`)
      state.users = data
    })

    async function next() {
      const { data } = await axios.get(`/users?page=2`)
      state.users = data
    }

    async function prev() {
      const { data } = await axios.get(`/users?page=1`)
      state.users = data
    }

    function submit() {
      axios.post("/users", state.form)
    }
    return { isModalOpen, state, next, prev, submit }
  },
}
</script>

<style></style>
