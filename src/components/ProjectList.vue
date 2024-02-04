<template>
  <div class="flex w-full mt-20 bg-white justify-center text-center">
    <div
      class="my-7 sm:my-14 w-full px-5 sm:px-0 sm:w-3/4 text-xl sm:text-3xl font-light tracking-wide leading-snug text-gray-800"
    >
      <p class="mb-2 sm:mb-4 text-2xl sm:text-4xl">Hello!</p>
      <p class="leading-normal">
        <br>I'm <strong> Gareth Rendle</strong>,
        <!-- <img
          src="../assets/hiyeon.png"
          class="w-[30px] sm:w-[55px] pb-1 mr-2 sm:mr-4 opacity-80 inline"
        /> -->
        a VR researcher with a specialisation in real-time avatars and collaborative VR applications. 
      </p>
      <p class="leading-normal">
        <br>Here, you can find a list of my current and previous research and university projects.</p>
    </div>
  </div>
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
