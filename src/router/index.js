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
import MyPageView from '@/views/MyPageView.vue';
import AdminPageView from '@/views/AdminPageView.vue';
import GovPageView from '@/views/gov/GovPageView.vue';
import GovEventView from '@/views/gov/GovEventView.vue';

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
      path: '/mypage',
      name: '마이페이지',
      component: MyPageView,
      meta: { layout: 'mypage' },
    },
    {
      path: '/gov',
      name: '지자체페이지',
      component: GovPageView,
      meta: { layout: 'gov' },
    },
    {
      path: '/gov/events',
      name: '지자체행사관리페이지',
      component: GovEventView,
    },
    {
      path: '/gov/recruit',
      name: '지자체모집관리페이지',
      component: GovPageView,
    },
    {
      path: '/gov/routes',
      name: '지자체경유지관리페이지',
      component: GovPageView,
    },
    {
      path: '/admin',
      name: '관리자페이지',
      component: AdminPageView,
      meta: { layout: 'admin' },
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
      path: '/notice',
      name: '공지사항',
      component: NoticeListView,
    },
    {
      path: '/notice/:id',
      name: '공지사항상세',
      component: NoticeDetailView,
    },
    {
      path: '/notice/create',
      name: '공지사항등록',
      component: () => import('../views/notice/NoticeFormView.vue'),
    },
    {
      path: '/notice/:id/edit',
      name: '공지사항수정',
      component: () => import('../views/notice/NoticeFormView.vue'),
    },
    {
      path: '/event',
      name: '행사',
      component: EventListView,
    },
    {
      path: '/event/:id',
      name: '행사상세',
      component: EventDetailView,
    },
    {
      path: '/event/create',
      name: '행사등록',
      component: () => import('../views/event/EventFormView.vue'),
    },
    {
      path: '/event/:id/edit',
      name: '행사수정',
      component: () => import('../views/event/EventFormView.vue'),
    },
    {
      path: '/route',
      name: '노선확인',
      component: CheckRouteView,
    },
    {
      path: '/recruit',
      name: '모집',
      component: RecruitListView,
    },
    {
      path: '/recruit/:id',
      name: '모집상세',
      component: RecruitDetailView,
    },
    // {
    //   path: '/recruits/:id/edit',
    //   name: '모집수정',
    //   component: () => import('../views/recruitment/RecruitEditView.vue')
    // }
    {
      path: '/review/create',
      name: '후기등록',
      component: () => import('../views/review/ReviewFormView.vue'),
    },
    {
      path: '/review/:id/edit',
      name: '후기수정',
      component: () => import('../views/review/ReviewFormView.vue'),
    },
  ],
});

export default router;
