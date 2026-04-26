<template>
  <div class="flex flex-col w-full items-center">
    <div
      v-for="artist in sortedArtists"
      :key="artist"
      class="w-full sm:w-7/12 px-7 sm:px-0 py-8 border-b border-gray-100"
    >
      <h2
        class="text-2xl font-semibold text-gray-700 tracking-wide mb-4"
        style="font-family: 'Quicksand', sans-serif"
      >
        {{ artist }}
      </h2>
      <ul class="space-y-2">
        <li v-for="file in grouped[artist]" :key="file.title">
          <a
            :href="file.url"
            target="_blank"
            class="flex items-center gap-2 text-base text-gray-500 hover:text-gray-800 transition-colors"
            style="font-family: 'Quicksand', sans-serif"
          >
            <DocumentIcon class="w-4 h-4 flex-none text-gray-400" />
            {{ file.title }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DocumentIcon } from "@heroicons/vue/24/outline";

const modules = import.meta.glob("../DrumTranscriptions/**/*.pdf", {
  eager: true,
  query: "?url",
  import: "default",
});

type FileEntry = { title: string; url: string };

const grouped: Record<string, FileEntry[]> = {};

for (const [path, url] of Object.entries(modules)) {
  const parts = path.replace("../DrumTranscriptions/", "").split("/");
  const artist = parts[0];
  const filename = parts[parts.length - 1];
  const title = filename
    .replace(/\.pdf$/i, "")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  if (!grouped[artist]) grouped[artist] = [];
  grouped[artist].push({ title, url: url as string });
}

for (const artist of Object.keys(grouped)) {
  grouped[artist].sort((a, b) => a.title.localeCompare(b.title));
}

const sortedArtists = Object.keys(grouped).sort();
</script>
