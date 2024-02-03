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
import ProjectCard from "./ProjectCard.vue";
import projects from "../projects.yaml";
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
