<!--
 * @Author: hhhhhq
 * @Date: 2020-12-21 09:11:13
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-12-21 11:20:22
 * @Description: file content
-->
<template>
  <div class="w-full flex flex-wrap">
    <h1 class="w-full text-center text-3xl my-3">Markdown App</h1>
    <section class="w-10/12 m-auto h-screen flex">
      <article class="w-1/2 border">
        <textarea class="w-full h-full border" v-model="text"></textarea>
      </article>
      <article class="w-1/2 border bg-gray-100">{{ text }}</article>
    </section>
  </div>
</template>

<script>
export default {
  name: "Markdown",
  data() {
    return {
      text: "",
    }
  },
}
</script>

<style></style>
