<template>
  <NuxtLink :class="tag" :to="{ path: '/', query: { tag } }">{{
    tag
  }}</NuxtLink>
</template>

<script setup>
defineProps({
  tag: {
    type: String,
    required: true,
  },
})
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
  position: relative;
  overflow: hidden;
  color: #3d2a00;
  border-color: #c9a227;
  background: linear-gradient(
    125deg,
    #ffd700 0%,
    #ffec8b 18%,
    #ffe135 38%,
    #fffef0 50%,
    #ffd700 62%,
    #daa520 82%,
    #ffec8b 100%
  );
  background-size: 280% 280%;
  animation: webdev-sparkle 3.5s ease-in-out infinite;
  text-shadow: 0 0 2px rgb(255 255 255 / 75%);
}

.webdev::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(
    110deg,
    transparent 0%,
    transparent 40%,
    rgb(255 255 255 / 65%) 50%,
    transparent 60%,
    transparent 100%
  );
  transform: translateX(-120%);
  animation: webdev-shine 2.6s ease-in-out infinite;
  pointer-events: none;
}

@keyframes webdev-sparkle {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes webdev-shine {
  0% {
    transform: translateX(-120%);
  }
  25%,
  100% {
    transform: translateX(120%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .webdev {
    animation: none;
    background-size: 100% 100%;
  }

  .webdev::after {
    display: none;
  }
}
.productivity {
  background-color: #2a0798;
  color: #fff;
}
</style>
