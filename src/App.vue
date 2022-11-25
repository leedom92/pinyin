<script setup>
import { ref } from 'vue';
import HelloWorld from "./components/HelloWorld.vue";
import PinYin from './components/PinYin.vue';

const text = ref('我喜欢')

const clearText = () => {
  const isConfirm = confirm('删除该文字？')
  isConfirm && (text.value = '')
}

const inputText = () => {
  const getText = prompt('请输入你想说的话')
  if (getText) {
    text.value = getText
  } else {
    alert('请输入你想说的话')
  }
}
</script>

<template>
  <div class="mb-12">
    <PinYin :text="text" @clear="clearText" @input="inputText" />
  </div>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />

  <a class="github block mt-10" href="https://github.com/leedom92/pinyin" target="_blank" rel="noopener noreferrer">
    <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true"
      class="github-svg">
      <path fill-rule="evenodd"
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
      </path>
    </svg>
  </a>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

@media (prefers-color-scheme: dark) {
  .github-svg {
    fill: #fff;
  }
}
</style>
