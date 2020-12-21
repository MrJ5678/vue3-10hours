<!--
 * @Author: hhhhhq
 * @Date: 2020-12-18 22:32:57
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-12-18 22:36:02
 * @Description: file content
-->
<template>
  <div class="w-full flex justify-center">
    <div>
      <h1 class="text-2xl text-center">Dc heros -- {{ herosCount }}</h1>
      <ul>
        <li
          class="flex justify-between"
          v-for="(hero, index) in dcHeros"
          :key="hero.name"
        >
          <div>{{ hero.name }} -- {{ index }}</div>
          <button @click="removeHero(hero)">x</button>
        </li>
      </ul>
      <form class="mt-10" @submit.prevent="addHero(newData)">
        <input
          class="border rounded"
          type="text"
          v-model.lazy="newData"
          placeholder="type hero here"
        />
        <button
          class="border rounded bg-gradient-to-r from-red-700 to-pink-500 text-white"
          type="submit"
        >
          Add hero
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "DcHeros",
  data() {
    return {
      newData: "",
      dcHeros: [
        { name: "SuperGirl" },
        { name: "Flash" },
        { name: "Batman" },
        { name: "Arro" },
      ],
    }
  },
  computed: {
    herosCount() {
      return `${this.dcHeros.length} Heros`
    },
  },
  methods: {
    addHero(newData) {
      if (!newData) {
        alert("check your input")
      } else {
        this.dcHeros.push({ name: newData })
        this.newData = ""
      }
    },
    removeHero(hero) {
      let answer = window.confirm("do you want to remove it?")
      if (answer) {
        this.dcHeros = this.dcHeros.filter(dchero => dchero.name !== hero.name)
      }
    },
  },
}
</script>

<style></style>
