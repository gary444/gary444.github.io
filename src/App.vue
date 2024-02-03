<script setup lang="ts">
import Nav from "./components/Nav.vue";
</script>

<template>
  <div class="h-screen w-screen flex flex-col">
    <Nav />
    <div id="container" class="flex-grow overflow-y-auto h-full mt-[65px]">
      <router-view></router-view>
    </div>
  </div>
</template>
