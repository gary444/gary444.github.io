<template>
  <div class="flex flex-col w-full items-center">
    <div
      v-for="folder in sortedFolders"
      :key="folder"
      class="w-full sm:w-7/12 px-7 sm:px-0 py-8 border-b border-gray-100"
    >
      <h2
        class="text-2xl font-semibold text-gray-700 tracking-wide mb-4"
        style="font-family: 'Quicksand', sans-serif"
      >
        {{ folder }}
      </h2>
      <ul class="space-y-3">
        <li v-for="file in grouped[folder]" :key="file.stem">
          <a
            :href="file.pdfUrl"
            target="_blank"
            class="flex items-center gap-2 text-base text-gray-500 hover:text-gray-800 transition-colors"
            style="font-family: 'Quicksand', sans-serif"
          >
            <DocumentIcon class="w-4 h-4 flex-none text-gray-400" />
            <span>
              <span v-if="file.showArtist" class="text-gray-500 font-medium">{{ file.artist }} &ndash; </span>{{ file.song }}
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DocumentIcon } from "@heroicons/vue/24/outline";

const pdfModules = import.meta.glob("../DrumTranscriptions/**/*.pdf", {
  eager: true,
  query: "?url",
  import: "default",
});

function toTitleCase(str: string): string {
  return str.replace(/\b\w/g, (c) => c.toUpperCase());
}

type FileEntry = {
  stem: string;
  artist: string;
  song: string;
  showArtist: boolean;
  pdfUrl: string;
};

const grouped: Record<string, FileEntry[]> = {};

for (const [path, url] of Object.entries(pdfModules)) {
  const parts = path.replace("../DrumTranscriptions/", "").split("/");
  const folder = parts[0];
  const filename = parts[parts.length - 1];
  const stem = filename.replace(/\.pdf$/i, "");

  const hyphenIdx = stem.indexOf("-");
  const rawArtist = hyphenIdx !== -1 ? stem.slice(0, hyphenIdx) : stem;
  const rawSong = hyphenIdx !== -1 ? stem.slice(hyphenIdx + 1) : stem;

  const artist = toTitleCase(rawArtist.replace(/_/g, " "));
  const song = toTitleCase(rawSong.replace(/_/g, " "));
  const showArtist = artist.toLowerCase() !== folder.toLowerCase();

  if (!grouped[folder]) grouped[folder] = [];
  grouped[folder].push({ stem, artist, song, showArtist, pdfUrl: url as string });
}

for (const folder of Object.keys(grouped)) {
  grouped[folder].sort((a, b) => a.song.localeCompare(b.song));
}

const sortedFolders = Object.keys(grouped).sort();
</script>
