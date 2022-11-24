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
</style>
