<template>
  <nuxt-link :class="tag" :to="{ name: 'index', query: { tag } }">{{
    tag
  }}</nuxt-link>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
a {
  @apply p-1 m-1 border-2 rounded-lg border-current font-mono;
}
a::before {
  content: '#';
}
.vue {
  color: #35495e;
  background-color: #41b883;
}
.github {
  color: black;
  background-color: white;
}
.react {
  color: #61dafb;
  background-color: #282c34;
}
.javascript {
  color: black;
  background-color: #fcdc00;
}
.typescript {
  color: white;
  background-color: #007acc;
}
.redux {
  color: white;
  background-color: #764abc;
  border-color: black;
}
.opensource {
  color: white;
  background-color: green;
}
[class='100daysofcode'] {
  background-color: #004d4d;
  color: #ffff7d;
}
.elixir {
  background-color: #4a245d;
  color: #fff;
}
.webdev {
  background-color: #562765;
  color: #fff;
}
.productivity {
  background-color: #2a0798;
  color: #fff;
}
</style>
