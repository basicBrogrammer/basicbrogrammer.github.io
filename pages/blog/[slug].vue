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
const slug = computed(() => {
  const routeSlug = route.params.slug
  return Array.isArray(routeSlug) ? routeSlug[0] : routeSlug
})

const toTagList = (rawTags) => {
  if (Array.isArray(rawTags)) {
    return rawTags.map((tag) => String(tag).trim()).filter(Boolean)
  }
  if (typeof rawTags === 'string') {
    return rawTags.split(',').map((tag) => tag.trim()).filter(Boolean)
  }
  return []
}

const { data: article } = await useAsyncData(`article-${slug.value}`, async () => {
  if (!slug.value) return null
  const docs = await queryCollection('articles').all()
  const doc = docs.find((item) => {
    const itemStem = typeof item.stem === 'string' ? item.stem.split('/').pop() : ''
    const itemPathSlug = typeof item.path === 'string' ? item.path.split('/').filter(Boolean).pop() : ''
    return itemStem === slug.value || itemPathSlug === slug.value
  })

  if (!doc) return null

  const meta = doc.meta && typeof doc.meta === 'object' ? doc.meta : {}
  return {
    ...doc,
    ...meta,
    tags: toTagList(meta.tags || doc.tags),
    cover_image: meta.cover_image || doc.cover_image || '',
  }
})

const tags = computed(() => article.value?.tags || [])
</script>
