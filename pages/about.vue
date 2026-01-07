<template>
  <div id="about-page">
    <ContentRenderer v-if="article" :value="article" class="my-2" />
  </div>
</template>

<script setup>
const { data: article } = await useAsyncData(
  'about',
  () => queryContent('about').findOne()
)
</script>

<style>
#about-page p {
  @apply my-5;
}
</style>
