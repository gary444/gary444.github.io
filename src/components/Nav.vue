<template>
  <nav class="fixed flex flex-row z-10 bg-white w-screen mt-0">
    <!-- left white box to hide the box shadow of the main div -->
    <div class="flex-none bg-white z-20 w-7" />
    <!-- main div -->
    <div
      :class="{ scrolled: isScrolledDown }"
      class="nav flex-grow flex items-center justify-between px-0 sm:px-5 py-6 sm:py-4 border-b"
    >
      <!-- name -->
      <router-link
        to="/"
        class="text-[22px] sm:text-2xl text-black"
        style="font-family: 'Karla', sans-serif"
      >
        Gareth Rendle
      </router-link>
      <!-- link buttons -->
      <div class="flex flex-row space-x-5 text-slate-700 font-medium">
        <router-link to="/projects" class="hover:text-slate-600"
          >Research Projects</router-link
        >
        <router-link to="/publications" class="hover:text-slate-600">Publications</router-link>
        <router-link to="/drum" class="hover:text-slate-600">Drum Transcriptions</router-link>
      </div>
      <div
        class="text-[20px] sm:text-2xl flex items-center space-x-5 sm:space-x-7 text-gray-400"
      >
        <a
          href="https://www.linkedin.com/in/gareth-rendle-8b422793/"
          target="_blank"
          class="hover:text-blue-500"
        >
          <fa :icon="['fab', 'linkedin']"></fa>
        </a>
        <a
          href="https://orcid.org/0000-0003-0399-8294"
          target="_blank"
          class="hover:text-green-500"
        >
          <fa :icon="['fab', 'orcid']"></fa>
        </a>
        <a
          href="https://scholar.google.com/citations?user=_fXp_JwAAAAJ&hl=en"
          target="_blank"
          class="hover:text-blue-600"
        >
          <fa :icon="['fas', 'graduation-cap']"></fa>
        </a>
        <a
          href="https://github.com/gary444"
          target="_blank"
          class="hover:text-gray-500"
        >
          <fa :icon="['fab', 'github']"></fa>
        </a>
<!--         <a
          href="CV_HiyeonKim.pdf"
          target="_blank"
          class="text-2xl sm:text-lg font-bold hover:text-indigo-500"
          style="font-family: 'Quicksand', sans-serif"
        >
          CV
        </a> -->
      </div>
    </div>
    <!-- right white box to hide the box shadow of the main div -->
    <div class="flex-none bg-white z-20 w-7" />
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isScrolledDown = ref(false);

function setIsScrolledDown() {
  // set true, if the user is at the top of the page
  if (window.scrollY > 0 && !isScrolledDown.value) isScrolledDown.value = true;
  else if (window.scrollY <= 0 && isScrolledDown.value)
    isScrolledDown.value = false;
}
window.addEventListener("scroll", setIsScrolledDown);
// TODO: fix it for mobile scrolling
window.addEventListener("touchmove", setIsScrolledDown);
</script>

<style scoped>
.nav.scrolled {
  @apply shadow-xl;
  border-bottom: 0px;
}
</style>
