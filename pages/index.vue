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
const tag = computed(() => {
  const queryTag = route.query.tag
  if (Array.isArray(queryTag)) return queryTag[0] || ''
  return queryTag || ''
})

const toTagList = (rawTags) => {
  if (Array.isArray(rawTags)) {
    return rawTags.map((value) => String(value).trim()).filter(Boolean)
  }
  if (typeof rawTags !== 'string') {
    return []
  }
  return rawTags.split(',').map((value) => value.trim()).filter(Boolean)
}

const toMetaObject = (doc) => {
  if (doc?.meta && typeof doc.meta === 'object') {
    return doc.meta
  }
  return {}
}

const { data: articles } = await useAsyncData('articles', async () => {
  const docs = await queryCollection('articles').all()

  return docs
    .map((doc) => {
      const meta = toMetaObject(doc)
      return {
        ...doc,
        ...meta,
        slug: typeof doc.stem === 'string' ? doc.stem.split('/').pop() : '',
        tags: toTagList(meta.tags || doc.tags),
        published: meta.published ?? doc.published ?? true,
        datePosted: meta.datePosted || doc.datePosted || '',
        cover_image: meta.cover_image || doc.cover_image || '',
      }
    })
    .filter((doc) => doc.published !== false && doc.published !== 'false')
    .filter((doc) => Boolean(doc.slug))
    .sort((a, b) => new Date(b.datePosted || 0) - new Date(a.datePosted || 0))
})

// Filter by tag if specified
const filteredArticles = computed(() => {
  if (!articles.value) return []
  if (!tag.value) return articles.value
  return articles.value.filter((article) => article.tags.includes(tag.value))
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
