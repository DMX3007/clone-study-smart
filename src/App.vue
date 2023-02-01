<template>
  <div class="w-full">
    <h1
      :word="timer()"
      class="whitespace-nowrap text-red-600 w-full text-xl font-bold"
    >
      {{ word }}
    </h1>
    <ol v-for="w in renderWords" :key="w">
      <li>{{ w }}</li>
    </ol>
  </div>
</template>

<script>
import { debugStore } from "./scripts/storage";

export default {
  name: "App",

  data() {
    return {
      word: new Date(),
      words: [1, 2, 3],
    };
  },
  methods: {
    timer() {
      setInterval(() => {
        this.word = new Date().getTime();
      }, 100);
    },
    async renderWords() {
      let arr = this.words.slice();
      let data = await debugStore();
      arr.push(...data);
      return arr;
    },
  },
};
</script>
