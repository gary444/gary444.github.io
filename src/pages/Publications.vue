<script setup lang="ts">
import PublicationsList from "../components/PublicationsList.vue";
import CoAuthorPublicationsList from "../components/CoAuthorPublicationsList.vue";
import ThesisList from "../components/ThesisList.vue";
</script>

<template>
  <div class="flex w-full mt-20 bg-white justify-center text-center">
    <div
      class="my-7 sm:my-14 w-full px-5 sm:px-0 sm:w-3/4 text-xl sm:text-3xl font-light tracking-wide leading-snug text-gray-800"
    >
      <p class="leading-normal">Publications as First Author</p>
    </div>
  </div>
  <PublicationsList />
  <div class="flex w-full mt-20 bg-white justify-center text-center">
    <div
      class="my-7 sm:my-14 w-full px-5 sm:px-0 sm:w-3/4 text-xl sm:text-3xl font-light tracking-wide leading-snug text-gray-800"
    >
      <p class="leading-normal">Publications as Co-Author</p>
    </div>
  </div>
  <CoAuthorPublicationsList />
  <div class="flex w-full mt-20 bg-white justify-center text-center">
    <div
      class="my-7 sm:my-14 w-full px-5 sm:px-0 sm:w-3/4 text-xl sm:text-3xl font-light tracking-wide leading-snug text-gray-800"
    >
      <p class="leading-normal">Doctoral Thesis</p>
    </div>
  </div>
  <ThesisList />
</template>
