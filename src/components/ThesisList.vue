<template>
  <div class="flex flex-col w-full items-center divide-y divide-gray-100">
    <ProjectCard
      v-for="(project, index) in projects"
      :key="index"
      :project="project"
    />
  </div>
</template>

<script setup lang="ts">
import ProjectCard from "./PublicationCard.vue";
import projects from "../thesis.yaml";
</script>
