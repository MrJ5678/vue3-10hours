<!--
 * @Author: hhhhhq
 * @Date: 2020-12-21 09:11:13
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-05 11:37:09
 * @Description: file content
-->
<template>
  <div class="w-full flex flex-wrap">
    <h1 class="w-full text-center text-3xl my-3">Markdown App</h1>
    <section class="w-10/12 m-auto h-screen flex">
      <article class="w-1/2 border">
        <textarea
          ref="martkdownTextArea"
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
import useDebounce from "../utilities/composition/useDebounce"

export default {
  name: "Markdown",
  data() {
    return {
      text: "",
      debounce: "",
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
  mounted() {
    this.debounce = useDebounce()
    this.$refs.martkdownTextArea.focus()
  },
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
