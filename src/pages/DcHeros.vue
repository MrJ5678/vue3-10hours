<!--
 * @Author: hhhhhq
 * @Date: 2020-12-18 22:32:57
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-12-30 21:53:31
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
      <form class="mt-10" @submit.prevent="addHero()">
        <input
          ref="newHeroRef"
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
import { computed, onMounted, ref } from "vue"

export default {
  name: "DcHeros",
  setup() {
    const newHeroRef = ref("")
    const newData = ref("")
    const dcHeros = ref([
      { name: "SuperGirl" },
      { name: "Flash" },
      { name: "Batman" },
      { name: "Arro" },
    ])

    const herosCount = computed({
      get: () => `${dcHeros.value.length} Heros`,
    })

    onMounted(() => {
      newHeroRef.value.focus()
    })

    function removeHero(hero) {
      let answer = window.confirm("do you want to remove it?")
      if (answer) {
        dcHeros.value = dcHeros.value.filter(
          dchero => dchero.name !== hero.name
        )
      }
    }

    function addHero() {
      if (!newData.value) {
        alert("check your input")
      } else {
        dcHeros.value.unshift({ name: newData.value })
        newData.value = ""
      }
    }

    return { dcHeros, newData, removeHero, herosCount, addHero, newHeroRef }
  },
}
</script>

<style></style>
