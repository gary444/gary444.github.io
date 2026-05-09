<template>
  <div class="flex flex-col w-full px-7 sm:p-0 sm:w-7/12 py-8 sm:py-10 items-center text-center">
    <h4
      class="text-lg font-semibold text-gray-400 tracking-wide uppercase"
      style="font-family: 'Quicksand', sans-serif"
    >
      {{ thesis.time }}
    </h4>
    <div class="flex flex-row mt-2 items-center justify-center gap-3">
      <h2
        class="text-2xl font-semibold text-gray-700 tracking-wide"
        style="font-family: 'Quicksand', sans-serif"
      >
        {{ thesis.title }}
      </h2>
      <a v-if="thesis.link" :href="thesis.link" target="_blank">
        <ArrowTopRightOnSquareIcon class="w-7 text-red-400 hover:text-red-300" />
      </a>
      <a v-if="thesis.doi" :href="thesis.doi" target="_blank">
        <ArrowTopRightOnSquareIcon class="w-7 text-red-400 hover:text-red-300" />
      </a>
    </div>
    <p
      class="text-base font-normal mt-3 text-gray-400 leading-snug tracking-normal"
      style="font-family: 'Quicksand', sans-serif"
    >
      {{ thesis.authors }}
    </p>
    <p
      v-if="thesis.desc"
      class="text-lg font-normal mt-3 text-gray-600 leading-snug tracking-normal max-w-prose"
      style="font-family: 'Quicksand', sans-serif"
    >
      {{ thesis.desc }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";

defineProps<{
  thesis: any;
}>();
</script>
