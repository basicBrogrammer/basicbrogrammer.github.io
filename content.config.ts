import { defineCollection, defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    articles: defineCollection({
      type: 'page',
      source: 'articles/*.md',
    }),
    pages: defineCollection({
      type: 'page',
      source: '*.md',
    }),
  },
})
