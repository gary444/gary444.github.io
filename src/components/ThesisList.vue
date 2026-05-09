<template>
  <div class="flex flex-col w-full items-center divide-y divide-gray-100">
    <ThesisCard
      v-for="(thesis, index) in theses"
      :key="index"
      :thesis="thesis"
    />
  </div>
</template>

<script setup lang="ts">
import ThesisCard from "./ThesisCard.vue";
import theses from "../thesis.yaml";
</script>
