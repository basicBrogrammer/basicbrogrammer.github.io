<template>
  <div>
    <img v-if="article?.cover_image" :src="article.cover_image" class="border-2 rounded-lg" />
    <h1 class="color-primary text-3xl font-extrabold my-1">
      {{ article?.title }}
    </h1>
    <div class="m-2 flex flex-wrap">
      <ArticleTag v-for="tag in tags" :key="tag" :tag="tag" />
    </div>
    <ContentRenderer v-if="article" :value="article" class="my-2" />
  </div>
</template>

<script setup>
const route = useRoute()
const { data: article } = await useAsyncData(
  `article-${route.params.slug}`,
  () => queryContent('articles', route.params.slug).findOne()
)

const tags = computed(() => {
  if (!article.value?.tags) return []
  return article.value.tags.split(',').map((tag) => tag.trim())
})

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('en', options)
}
</script>
