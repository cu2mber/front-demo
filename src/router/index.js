import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import SignupView from '@/views/auth/SignupView.vue';
import SigninView from '@/views/auth/SigninView.vue';
import FindIdView from '@/views/auth/FindIdView.vue';
import FindPasswordView from '@/views/auth/FindPasswordView.vue';
import NoticeListView from '@/views/notice/NoticeListView.vue';
import NoticeDetailView from '@/views/notice/NoticeDetailView.vue';
import EventListView from '@/views/event/EventListView.vue';
import EventDetailView from '@/views/event/EventDetailView.vue';
import CheckRouteView from '@/views/CheckRouteView.vue';
import RecruitListView from '@/views/recruitment/RecruitListView.vue';
import RecruitDetailView from '@/views/recruitment/RecruitDetailView.vue';

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
      component: SignupView,
    },
    {
      path: '/login',
      name: '로그인',
      component: SigninView,
    },
    {
      path: '/findId',
      name: '아이디찾기',
      component: FindIdView,
    },
    {
      path: '/findPassword',
      name: '비밀번호찾기',
      component: FindPasswordView,
    },
    {
      path: '/notices',
      name: '공지사항',
      component: NoticeListView,
    },
    {
      path: '/notices/:id',
      name: '공지사항상세',
      component: NoticeDetailView,
    },
    {
      path: '/notices/create',
      name: '공지사항등록',
      component: () => import('../views/notice/NoticeEditView.vue'),
    },
    {
      path: '/notices/:id/edit',
      name: '공지사항수정',
      component: () => import('../views/notice/NoticeEditView.vue'),
    },
    {
      path: '/events',
      name: '행사',
      component: EventListView,
    },
    {
      path: '/evnets/:id',
      name: '행사상세',
      component: EventDetailView,
    },
    // {
    //   path: '/evnets/:id/edit',
    //   name: '행사수정',
    //   component: () => import('../views/event/EventEditView.vue')
    // },
    {
      path: '/routes',
      name: '노선확인',
      component: CheckRouteView,
    },
    {
      path: '/recruits',
      name: '모집',
      component: RecruitListView,
    },
    {
      path: '/recruits/:id',
      name: '모집상세',
      component: RecruitDetailView,
    },
    // {
    //   path: '/recruits/:id/edit',
    //   name: '모집수정',
    //   component: () => import('../views/recruitment/RecruitEditView.vue')
    // }
  ],
});

export default router;
