<!--
 * @Author: hhhhhq
 * @Date: 2020-12-30 21:56:04
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-01-05 11:06:41
 * @Description: file content
-->
<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-center text-2xl">Caculator page</h1>
      <p
        class="w-36 h-10 text-3xl text-right mt-10 mr-2 overflow-x-scroll"
        style="direction: rtl"
      >
        {{ currentNum }}
      </p>
      <div class="text-right my-2 mx-4 h-5">
        <small v-if="selectedOperation"
          >{{ preNum }} {{ selectedOperation }} {{ currentNum }}</small
        >
      </div>
      <div class="grid grid-cols-4 gap-1">
        <button
          @click="pressed('1')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          1
        </button>
        <button
          @click="pressed('2')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          2
        </button>
        <button
          @click="pressed('3')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          3
        </button>
        <button
          @click="pressed('+')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          +
        </button>
        <button
          @click="pressed('4')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          4
        </button>
        <button
          @click="pressed('5')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          5
        </button>
        <button
          @click="pressed('6')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          6
        </button>
        <button
          @click="pressed('-')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          -
        </button>
        <button
          @click="pressed('7')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          7
        </button>
        <button
          @click="pressed('8')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          8
        </button>
        <button
          @click="pressed('9')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          9
        </button>
        <button
          @click="pressed('*')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          *
        </button>
        <button @click="pressed('c')" class="p-2 h-10 border rounded shadow">
          C
        </button>
        <button @click="pressed('0')" class="p-2 h-10 border rounded shadow">
          0
        </button>
        <button
          @click="pressed('=')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          =
        </button>
        <button
          @click="pressed('/')"
          class="p-2 w-10 h-10 border rounded shadow"
        >
          /
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue"
import useWindowEvent from "../utilities/composition/useWindowEvent"

export default {
  name: "Caculator",
  setup() {
    const operations = ["+", "-", "*", "/"]
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    const currentNum = ref("")
    const preNum = ref("")
    const selectedOperation = ref("")

    const handleKeydown = e => pressed(e.key)
    // console.log(e.key)
    useWindowEvent("keydown", handleKeydown)

    function pressed(value) {
      if (value === "=" || value === "Enter") calculate()
      else if (value === "c") clear()
      else if (operations.includes(value)) applyOperation(value)
      else if (numbers.includes(value)) appendNumber(value)
    }

    const clear = () => (currentNum.value = "")

    function calculate() {
      if (selectedOperation.value === "*") multiply()
      // currentNum.value = preNum.value * currentNum.value
      else if (selectedOperation.value === "/") divide()
      // currentNum.value = preNum.value / currentNum.value
      else if (selectedOperation.value === "-") subtract()
      // currentNum.value = preNum.value + currentNum.value
      else if (selectedOperation.value === "+") sum()
      // currentNum.value = preNum.value - currentNum.value
      preNum.value = ""
      selectedOperation.value = ""
    }

    function multiply() {
      currentNum.value = preNum.value * currentNum.value
    }

    function divide() {
      currentNum.value = preNum.value / currentNum.value
    }

    function subtract() {
      currentNum.value = preNum.value - currentNum.value
    }

    function sum() {
      currentNum.value = +preNum.value + +currentNum.value
    }

    function appendNumber(value) {
      currentNum.value = currentNum.value + value
    }

    function applyOperation(value) {
      calculate()
      preNum.value = currentNum.value
      currentNum.value = ""
      selectedOperation.value = value
    }

    return {
      currentNum,
      pressed,
      appendNumber,
      calculate,
      applyOperation,
      preNum,
      selectedOperation,
    }
  },
}
</script>

<style></style>
