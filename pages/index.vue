<template>
  <div>
    <ArticleCard
      v-for="article in filteredArticles"
      :key="article.slug"
      :article="article"
    />
  </div>
</template>

<script setup>
const route = useRoute()
const tag = computed(() => route.query.tag || '')

const { data: articles } = await useAsyncData(
  'articles',
  () => queryContent('articles')
    .only([
      'title',
      'description',
      'img',
      'slug',
      'tags',
      'cover_image',
      'datePosted',
    ])
    .where({ published: true })
    .sort({ datePosted: -1 })
    .find(),
  {
    watch: [tag]
  }
)

// Filter by tag if specified
const filteredArticles = computed(() => {
  if (!articles.value) return []
  if (!tag.value) return articles.value
  return articles.value.filter(article =>
    article.tags && article.tags.includes(tag.value)
  )
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
