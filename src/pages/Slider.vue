<!--
 * @Author: hhhhhq
 * @Date: 2020-12-21 22:25:21
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-12-22 15:20:12
 * @Description: file content
-->
<template>
  <div class="w-full flex flex-wrap relative">
    <div class="absolute w-full" v-for="(color, index) in sliders" :key="color">
      <transition name="fade">
        <div
          v-if="currentSlide === index"
          class="w-full"
          :class="color"
          style="height: 350px"
        ></div>
      </transition>
    </div>
    <!-- <div class="my-2 flex w-full">
      <div class="m-auto">
        <transition name="fade">
          <h1 v-if="isTitleShowing">slider carousel</h1>
        </transition>
        <button
          class="px-2 rounded border"
          @click="isTitleShowing = !isTitleShowing"
        >
          toggle text
        </button>
      </div>
    </div> -->
    <div class="w-full" style="height: 340px;">
      <div class="absolute bottom-0 w-full flex justify-center">
        <div
          v-for="(slider, index) in sliders"
          :key="slider"
          @click="makeActive(index)"
          class="w-4 h-4 mx-2 rounded-full cursor-pointer shadow-md"
          :class="currentSlide === index ? 'bg-gray-700' : 'bg-gray-300'"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      currentSlide: 0,
      intervalId: null,
      sliders: ["bg-green-600", "bg-blue-600", "bg-yellow-600"],
      isTitleShowing: true,
    }
  },
  mounted() {
    this.intervalId = setInterval(() => {
      if (this.currentSlide === 2) {
        this.currentSlide = 0
      } else {
        this.currentSlide++
      }
    }, 5000)
  },
  beforeUnmount() {
    clearInterval(this.intervalId)
  },
  methods: {
    makeActive(index) {
      this.currentSlide = index
    },
  },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
