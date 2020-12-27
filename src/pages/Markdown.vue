<!--
 * @Author: hhhhhq
 * @Date: 2020-12-21 09:11:13
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-12-21 22:23:20
 * @Description: file content
-->
<template>
  <div class="w-full flex flex-wrap">
    <h1 class="w-full text-center text-3xl my-3">Markdown App</h1>
    <section class="w-10/12 m-auto h-screen flex">
      <article class="w-1/2 border">
        <textarea
          class="w-full h-full border"
          :value="text"
          @input="update"
        ></textarea>
      </article>
      <article class="w-1/2 border bg-gray-100" v-html="markedText"></article>
    </section>
  </div>
</template>

<script>
import marked from "marked"
import debounce from "../utilities/mixins/debounce"

export default {
  name: "Markdown",
  mixins: [debounce],
  data() {
    return {
      text: "",
    }
  },
  computed: {
    markedText() {
      return marked(this.text)
    },
  },
  // beforeCreate() {
  //   console.log("before create")
  // },
  // created() {
  //   console.log("created")
  // },
  // mounted() {
  //   console.log("mounted")
  // },
  // beforeUnmount() {
  //   console.log("before unmount")
  // },
  // unmounted() {
  //   console.log("unmounted")
  // },
  beforeUpdate() {
    console.log("before update")
  },
  updated() {
    console.log("updated")
  },
  methods: {
    update(e) {
      const task = () => (this.text = e.target.value)
      this.debounce(task)
    },
  },
}
</script>

<style></style>
