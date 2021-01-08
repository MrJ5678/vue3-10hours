<!--
 * @Author: hhhhhq
 * @Date: 2020-12-20 10:54:53
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-07 10:39:45
 * @Description: file content
-->
<template>
  <div class="m-auto">
    <h1 class="text-center text-2xl my-2">welcome to vue3</h1>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      store: this.$store.state,
    }
  },
}
</script>

<style></style>
