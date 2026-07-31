<template>
  <div class="flex flex-col w-full items-center divide-y divide-gray-100">
    <SoftwareCard
      v-for="(item, index) in software"
      :key="index"
      :item="item"
    />
  </div>
</template>

<script setup lang="ts">
import SoftwareCard from "./SoftwareCard.vue";
import software from "../software.yaml";
</script>

<style scoped></style>
