<script setup>
import pinyin from 'pinyin'

defineProps({
  text: String,
})

const emit = defineEmits(['clear', 'input'])

const clearWord = () => {
  emit('clear')
}

const inputWord = () => {
  emit('input')
}
</script>

<template>
  <div class="pinyin-chinese custom-font-family">
    <div
      v-if="text"
      class="cursor-pointer"
      @click="clearWord"
    >
      <div
        v-for="item in text"
        :key="item"
        class="item inline-block"
        :class="[text.length >= 5 ? 'px-0' : 'px-4']"
      >
        <div class="pinyin text-xl sm:text-4xl mb-4">
          {{ pinyin(item)[0][0] }}
        </div>
        <div class="chinese text-red text-5xl sm:text-7xl">
          {{ item }}
        </div>
      </div>
    </div>
    <div
      v-else
      class="cursor-pointer"
      @click="inputWord"
    >
      <div
        v-for="item in '你倒是说句话啊！'"
        :key="item"
        class="item relative inline-block"
      >
        <div class="pinyin text-xl sm:text-4xl mb-2">
          {{ pinyin(item)[0][0] }}
        </div>
        <div class="chinese text-amber text-5xl sm:text-7xl">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
