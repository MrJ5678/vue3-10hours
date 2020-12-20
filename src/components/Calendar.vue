<!--
 * @Author: hhhhhq
 * @Date: 2020-12-19 07:58:08
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-12-19 17:45:14
 * @Description: file content
-->
<template>
  <div class="m-auto">
    <h1 class="text-3xl my-2 text-center">Vue Calendar</h1>
    <section class="mx-2 flex justify-between">
      <h2 class="font-bold">{{ currentMonthName }}</h2>
      <h2 class="font-bold ">{{ currentYear }}</h2>
    </section>
    <section class="flex">
      <p
        class="text-center py-2"
        style="width: 14.28%;"
        v-for="day in days"
        :key="day"
      >
        {{ day }}
      </p>
    </section>
    <section class="flex flex-wrap">
      <p
        class="text-center"
        style="width: 14.28%;"
        v-for="n in startDay()"
        :key="n"
      ></p>
      <p
        class="text-center"
        v-for="n in daysInMonth()"
        :class="{ currentDay: validateToday(n) }"
        style="width: 14.28%;"
        :key="n"
      >
        {{ n }}
      </p>
    </section>
    <section class="flex justify-between my-2">
      <button class="px-2 border rounded" @click="previous()">Previous</button>
      <button class="px-2 border rounded" @click="next()">Next</button>
    </section>
  </div>
</template>

<script>
export default {
  name: "Calendar",
  data() {
    return {
      currentMonth: new Date().getMonth() + 1,
      currentYear: new Date().getFullYear(),
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    }
  },
  computed: {
    currentMonthName() {
      return new Date(
        this.currentYear,
        this.currentMonth - 1
      ).toLocaleString("default", { month: "long" })
    },
  },
  methods: {
    daysInMonth() {
      return new Date(this.currentYear, this.currentMonth - 1, 0).getDate()
    },
    startDay() {
      return new Date(this.currentYear, this.currentMonth - 1, 1).getDay()
    },
    next() {
      if (this.currentMonth === 12) {
        this.currentMonth = 1
        console.log("before currentYear++")
        this.currentYear++
        console.log("after currentYear++")
      } else {
        this.currentMonth++
      }
    },
    previous() {
      if (this.currentMonth === 1) {
        this.currentMonth = 12
        this.currentYear--
      } else {
        this.currentMonth--
      }
    },
    validateToday(n) {
      return (
        new Date().getDate() === n &&
        new Date().getFullYear() === this.currentYear &&
        new Date().getMonth() === this.currentMonth - 1
      )
    },
  },
}
</script>

<style>
.currentDay {
  padding: 0 5px;
  background-color: red;
  color: white;
  border-radius: 4px;
}
</style>
