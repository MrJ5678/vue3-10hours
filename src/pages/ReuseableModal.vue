<!--
 * @Author: hhhhhq
 * @Date: 2021-01-04 21:02:12
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-05 10:55:24
 * @Description: file content
-->
<template>
  <section class="w-full flex">
    <div class="m-auto">
      <h1 class="text-2xl my-5">Reuseable Modal</h1>
      <modal v-if="isModal1Open" @close="isModal1Open = false">
        <template #title>modal1</template>
        <template #body>
          <p>this is the body slot</p>
        </template>
      </modal>
      <button
        class="border rounded px-2 mx-4 bg-blue-500 text-white"
        @click="isModal1Open = true"
      >
        modal1
      </button>

      <modal v-if="isModal2Open" @close="isModal2Open = false">
        <template #title>
          modal2
        </template>
        <template #body>
          <p>this is body slot for modal 2</p>
        </template>
      </modal>
      <button
        class="border rounded px-2 mx-4 bg-blue-500 text-white"
        @click="isModal2Open = true"
      >
        modal2
      </button>
    </div>
  </section>
</template>

<script>
import { ref } from "vue"
import Modal from "../components/Modal"
export default {
  components: { Modal },
  setup() {
    const isModal1Open = ref(false)
    const isModal2Open = ref(false)

    return { isModal1Open, isModal2Open }
  },
}
</script>

<style></style>
