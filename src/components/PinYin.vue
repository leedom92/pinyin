<template>
  <div class="pinyin">
    <template v-if="text">
      <div class="item inline-block px-4" v-for="item in text" @click="clearWord">
        <div class="chinese text-4xl mb-4">{{ pinyin(item)[0][0] }}</div>
        <div class="chinese text-red text-7xl">{{ item }}</div>
      </div>
    </template>
    <div v-else class="text-amber">
      <div class="item relative inline-block" v-for="item in '你倒是说句话啊！'" @click="inputWord">
        <div class="pinyin text-4xl text-white mb-2">{{ pinyin(item)[0][0] }}</div>
        <div class="chinese text-7xl">{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import pinyin from "pinyin";

defineProps({
  text: String
})

const emit = defineEmits(['clear', 'input'])

const clearWord = () => {
  emit('clear')
}

const inputWord = () => {
  emit('input')
}
</script>

<style scoped>

</style>