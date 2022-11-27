<script setup>
import pinyin from "pinyin";

defineProps({
  msg: String,
});
</script>

<template>
  <h1>{{ msg }}</h1>
  <h1 class="mt-0 flex justify-center items-end">
    <div class="text-3xl pr-2">Evan You</div>
    <div class="text-lg">
      (
        <div class="item relative inline-block w-5" v-for="item in '尤雨溪'">
          <div class="pinyin text-xs">{{ pinyin(item)[0][0] }}</div>
          <div class="chinese">{{ item }}</div>
        </div>
      )
    </div>
  </h1>
</template>

<style lang="scss" scoped>
.item {
  font-family: 'smiley-sans';
}
</style>
