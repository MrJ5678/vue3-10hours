<!--
 * @Author: hhhhhq
 * @Date: 2020-12-16 08:33:41
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-12-18 11:33:07
 * @Description: file content
-->
<template>
  <h1>Dc heros -- {{ herosCount }}</h1>
  <ul>
    <li v-for="(hero, index) in dcHeros" :key="hero.name">
      {{ hero.name }} -- {{ index }}
      <button @click="removeHero(hero)">remove hero</button>
      <div>
        <input type="text" />
      </div>
    </li>
  </ul>
  <form @submit.prevent="addHero(newData)">
    <input type="text" v-model.lazy="newData" placeholder="type hero here" />
    <button type="submit">Add hero</button>
  </form>
</template>

<script>
export default {
  name: "App",
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

<style>
.textarea {
  vertical-align: bottom;
}
</style>
