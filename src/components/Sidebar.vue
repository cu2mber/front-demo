<script setup>
import { useRoute, useRouter } from 'vue-router';
import { computed, ref } from 'vue';

const route = useRoute();
const router = useRouter();

// 메뉴 정의
const menuSets = {
  mypage: [
    { label: '내 정보', path: '/mypage/profile' },
    { label: '신청 내역', path: '/mypage/orders' },
    { label: '후기 내역', path: '/mypage/reviews' },
  ],
  gov: [
    { label: '지자체 정보', path: '/gov/profile' },
    { label: '행사 관리', path: '/gov/events' },
    { label: '모집 관리', path: '/gov/recruit' },
    { label: '경유지 관리', path: '/gov/routes' },
  ],
  admin: [
    { label: '회원 관리', path: '/admin/users' },
    {
      label: '지자체 관리',
      path: '/admin/gov',
      children: [{ label: '모집 관리', path: '/admin/gov/recruit' }],
    },
    { label: '신고 관리', path: '/admin/reports' },
  ],
};

const menus = computed(() => {
  if (route.path.startsWith('/mypage')) return menuSets.mypage;
  if (route.path.startsWith('/gov')) return menuSets.gov;
  if (route.path.startsWith('/admin')) return menuSets.admin;
  return [];
});

const goTo = path => {
  router.push(path);
};

// 열려 있는 메뉴 상태
const openMenu = ref(null);

const toggleMenu = item => {
  if (openMenu.value === item.label) {
    openMenu.value = null;
  } else {
    openMenu.value = item.label;
  }
};
</script>

<template>
  <aside id="sidebar" class="relative h-full w-64 border-r-2 dark:bg-gray-800" aria-label="Sidebar">
    <div class="h-full overflow-y-auto px-3 py-4 dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
        <li v-for="item in menus" :key="item.path">
          <div>
            <button
              v-if="item.children"
              @click="toggleMenu(item)"
              class="group flex w-full items-center justify-between rounded-lg p-2 text-left hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              :class="route.path.startsWith(item.path) ? 'bg-gray-200 dark:bg-gray-700' : ''"
            >
              <span class="ms-3">{{ item.label }}</span>
              <span>
                {{ openMenu === item.label ? '▲' : '▼' }}
              </span>
            </button>

            <button
              v-else
              @click="goTo(item.path)"
              class="group flex w-full items-center rounded-lg p-2 text-left hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              :class="route.path === item.path ? 'bg-gray-200 dark:bg-gray-700' : ''"
            >
              <span class="ms-3">{{ item.label }}</span>
            </button>

            <!-- children (submenu) -->
            <ul v-if="item.children && openMenu === item.label" class="ml-6 mt-2 space-y-1">
              <li v-for="child in item.children" :key="child.path">
                <button
                  @click="goTo(child.path)"
                  class="group flex w-full items-center rounded-lg p-2 text-left text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600"
                  :class="route.path === child.path ? 'bg-gray-200 dark:bg-gray-600' : ''"
                >
                  <span class="ms-3">{{ child.label }}</span>
                </button>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </aside>
</template>
