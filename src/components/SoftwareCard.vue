<template>
  <div
    class="flex flex-col w-full px-7 sm:p-0 sm:w-7/12 py-8 sm:py-10 border-top sm:border-none"
  >
    <div class="flex flex-col text-left">
      <h4
        class="text-base font-semibold text-gray-400 tracking-wide"
        style="font-family: 'Quicksand', sans-serif"
      >
        <fa :icon="['fab', 'github']" class="mr-1"></fa>
        {{ item.repo }}
      </h4>
      <div class="flex flex-row mt-1 items-start">
        <h2
          class="text-2xl mt-2 font-semibold text-gray-700 tracking-wide"
          style="font-family: 'Quicksand', sans-serif"
        >
          {{ item.title }}
        </h2>
        <a :href="item.link" target="_blank">
          <ArrowTopRightOnSquareIcon
            class="w-7 ml-3 text-red-400 hover:text-red-300"
          />
        </a>
      </div>
      <p
        class="text-lg font-normal mt-3 text-gray-600 leading-snug tracking-normal"
        style="font-family: 'Quicksand', sans-serif"
      >
        {{ item.desc }}
      </p>
      <ul class="flex mt-5 flex-wrap tracking-wide">
        <li :key="tool" v-for="tool in item.tools">
          <div
            class="py-1 px-3 mb-2 mr-2 rounded-md border border-amber-400 text-amber-400 font-semibold text-xs"
            style="font-family: 'Quicksand', sans-serif"
          >
            {{ tool }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";

defineProps<{
  item: any;
}>();
</script>

<style scoped></style>
