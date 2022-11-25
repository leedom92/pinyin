<template>
  <div class="pinyin">
    <div v-if="text" class="cursor-pointer" @click="clearWord">
      <div class="item inline-block" :class="[text.length >= 5 ? 'px-0' : 'px-4']" v-for="item in text">
        <div class="chinese text-xl sm:text-4xl mb-4">{{ pinyin(item)[0][0] }}</div>
        <div class="chinese text-red text-5xl sm:text-7xl">{{ item }}</div>
      </div>
    </div>
    <div v-else class="cursor-pointer" @click="inputWord">
      <div class="item relative inline-block" v-for="item in '你倒是说句话啊！'">
        <div class="pinyin text-xl sm:text-4xl mb-2">{{ pinyin(item)[0][0] }}</div>
        <div class="chinese text-amber text-5xl sm:text-7xl">{{ item }}</div>
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