import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Agenda from '@/components/gdt-agenda/gdt-agenda';
import Activity from '@/components/gdt-activity/gdt-activity';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          name: 'Agenda',
          component: Agenda,
        },
        {
          path: '/actividad/:id/:slug',
          name: 'actividad',
          component: Activity,
          props: true,
        },
      ],
    },
  ],
});
