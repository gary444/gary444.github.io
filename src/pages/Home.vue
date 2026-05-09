<template>
  <div class="flex w-full mt-20 bg-white justify-center text-center">
    <div
      class="my-7 sm:my-14 w-full px-5 sm:px-0 sm:w-3/4 text-xl sm:text-3xl font-light tracking-wide leading-snug text-gray-800"
    >
      <img
        src="/assets/profile.jpg"
        alt="Gareth Rendle"
        class="w-48 h-48 sm:w-64 sm:h-64 rounded-full object-cover object-right mx-auto mb-6 shadow-md"
      />
      <!-- <p class="mb-2 sm:mb-4 text-2xl sm:text-4xl">Hello!</p> -->
      <p class="leading-normal">
        Hello! <br />I'm <strong>Gareth Rendle</strong>,
        a virtual reality researcher with a focus on social VR and MR.
      </p>
      <p class="leading-normal">
        On this site, you can find a list of my <router-link to="/publications" class="underline hover:text-blue-600">publications</router-link> and <router-link to="/projects" class="underline hover:text-blue-600">research projects</router-link>.
      </p>
      <div class="flex flex-col items-center gap-3 mt-8 text-base">
        <a href="https://www.linkedin.com/in/gareth-rendle-8b422793/" target="_blank"
          class="flex items-center gap-3 w-52 px-5 py-2.5 rounded-2xl bg-gray-800 text-white hover:brightness-110 transition">
          <span class="w-5 flex justify-center"><fa :icon="['fab', 'linkedin']" /></span>
          LinkedIn
        </a>
        <a href="https://scholar.google.com/citations?user=_fXp_JwAAAAJ&hl=en" target="_blank"
          class="flex items-center gap-3 w-52 px-5 py-2.5 rounded-2xl bg-gray-800 text-white hover:brightness-110 transition">
          <span class="w-5 flex justify-center"><fa :icon="['fas', 'graduation-cap']" class="text-sm" /></span>
          Google Scholar
        </a>
        <a href="https://orcid.org/0000-0003-0399-8294" target="_blank"
          class="flex items-center gap-3 w-52 px-5 py-2.5 rounded-2xl bg-gray-800 text-white hover:brightness-110 transition">
          <span class="w-5 flex justify-center"><fa :icon="['fab', 'orcid']" /></span>
          ORCID
        </a>
        <a href="https://github.com/gary444" target="_blank"
          class="flex items-center gap-3 w-52 px-5 py-2.5 rounded-2xl bg-gray-800 text-white hover:brightness-110 transition">
          <span class="w-5 flex justify-center"><fa :icon="['fab', 'github']" /></span>
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
p {
  font-family: "Work Sans", sans-serif;
}
</style>
