<script setup>
import { RouterView, useRoute } from 'vue-router';
import { computed, ref } from 'vue';
import Navbar from './components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';

const route = useRoute();

const showSidebar = computed(
  () =>
    route.path.startsWith('/mypage') ||
    route.path.startsWith('/gov') ||
    route.path.startsWith('/admin'),
);
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <header class="w-full p-9">
      <Navbar />
    </header>

    <div class="flex flex-1">
      <aside v-if="showSidebar">
        <Sidebar />
      </aside>

      <main class="flex flex-1 items-start justify-center px-4">
        <RouterView :key="route.fullPath" />
      </main>
    </div>

    <footer class="w-full bg-gray-50 p-4 text-center text-sm text-gray-400">
      © 2025 오이소박이
    </footer>
  </div>
</template>

<!-- <style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
