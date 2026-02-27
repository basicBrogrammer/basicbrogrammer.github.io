<template>
  <div id="about-page">
    <ContentRenderer v-if="article" :value="article" class="my-2" />
  </div>
</template>

<script setup>
const { data: article } = await useAsyncData('about', async () => {
  const pages = await queryCollection('pages').all()
  return pages.find((page) => page.path === '/about' || page.stem === 'about') || null
})
</script>

<style>
#about-page p {
  @apply my-5;
}
</style>
