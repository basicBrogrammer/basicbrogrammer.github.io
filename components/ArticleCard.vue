<template>
  <div class="my-4 border-2 rounded-lg border-primary">
    <NuxtLink :to="`/blog/${article.slug}`">
      <div
        class="cover-img"
        :style="{ backgroundImage: `url(${article.cover_image})` }"
      ></div>
    </NuxtLink>
    <div class="p-3">
      <NuxtLink :to="`/blog/${article.slug}`">
        <h3 class="font-bold tracking-wider text-center color-secondary">
          {{ article.title }}
        </h3>
      </NuxtLink>
      <p class="py-1 my-2 font-medium border-t-2">
        {{ article.description }}
      </p>
      <ArticleTag v-for="tag in tags" :key="tag" :tag="tag" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  article: {
    type: Object,
    required: true,
  },
})

const tags = computed(() => {
  return props.article.tags.split(',').map((tag) => tag.trim())
})
</script>

<style scoped>
.cover-img {
  display: block;
  width: 100%;
  height: auto;
  padding-bottom: 25%;
  background-size: cover;
  background-position: center center;
  @apply rounded-lg;
}
</style>
