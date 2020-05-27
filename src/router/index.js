// Basic
import Vue from 'vue';
import Router from 'vue-router';

// Views :: Slides
import Slide1 from '@/views/ongoing/Slide1.vue';
import Slide2 from '@/views/ongoing/Slide2.vue';
import Slide3 from '@/views/ongoing/Slide3.vue';

// Use Router
Vue.use(Router);

const router = new Router({
  // mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'slide1',
      component: Slide1,
      meta: { transitionName: 'slide', transitionOrder: 1 },
    },
    {
      path: '/slide2',
      name: 'slide2',
      component: Slide2,
      meta: { transitionName: 'slide', transitionOrder: 2 },
    },
    {
      path: '/slide3',
      name: 'slide3',
      component: Slide3,
      meta: { transitionName: 'slide', transitionOrder: 3 },
    },
  ],
});

export default router;