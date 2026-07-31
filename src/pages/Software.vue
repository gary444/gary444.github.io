<script setup lang="ts">
import SoftwareList from "../components/SoftwareList.vue";
</script>

<template>
  <div class="flex w-full mt-20 bg-white justify-center text-center">
    <div
      class="my-7 sm:my-14 w-full px-5 sm:px-0 sm:w-3/4 text-xl sm:text-3xl font-light tracking-wide leading-snug text-gray-800"
    >
      <p class="leading-normal">Software</p>
      <p
        class="mt-4 text-base sm:text-lg text-gray-600 font-normal"
        style="font-family: 'Quicksand', sans-serif"
      >
        Open-source software from my research, also found on my
        <a
          href="https://github.com/gary444"
          target="_blank"
          class="underline hover:text-blue-600"
          >GitHub profile</a
        >.
      </p>
    </div>
  </div>
  <SoftwareList />
</template>
