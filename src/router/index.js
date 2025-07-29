import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/signup',
      name: '회원가입',
      component: () => import('../views/auth/SignupView.vue')
    },
    {
      path: '/login',
      name: '로그인',
      component: () => import('../views/auth/SigninView.vue')
    },
    {
      path: '/findId',
      name: '아이디찾기',
      component: () => import('../views/auth/FindIdView.vue')
    },
    {
      path: '/findPassword',
      name: '비밀번호찾기',
      component: () => import('../views/auth/FindPasswordView.vue')
    },
    {
      path: '/notices',
      name: '공지사항',
      component: () => import('../views/notice/NoticeListView.vue')
    },
    {
      path: '/notices/:id',
      name: '공지사항상세',
      component: () => import('../views/notice/NoticeDetailView.vue')
    },
    {
      path: '/notices/:id/edit',
      name: '공지사항수정',
      component: () => import('../views/notice/NoticeEditView.vue')
    },
    {
      path: '/events',
      name: '행사',
      component: () => import('../views/event/EventListView.vue')
    },
    {
      path: '/evnets/:id',
      name: '행사상세',
      component: () => import('../views/event/EventDetailView.vue')
    },
    // {
    //   path: '/evnets/:id/edit',
    //   name: '행사수정',
    //   component: () => import('../views/event/EventEditView.vue')
    // },
    {
      path: '/routes',
      name: '노선확인',
      component: () => import('../views/CheckRouteView.vue')
    },
    {
      path: '/recruits',
      name: '모집',
      component: () => import('../views/recruitment/RecruitListView.vue')
    },
    {
      path: '/recruits/:id',
      name: '모집상세',
      component: () => import('../views/recruitment/RecruitDetailView.vue')
    },
    // {
    //   path: '/recruits/:id/edit',
    //   name: '모집수정',
    //   component: () => import('../views/recruitment/RecruitEditView.vue')
    // }
  ],
})

export default router
