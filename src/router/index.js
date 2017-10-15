import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Agenda from '@/components/gdt-agenda/gdt-agenda';
import Activity from '@/components/gdt-activity/gdt-activity';
import Groups from '@/components/gdt-groups/gdt-groups';
import Group from '@/components/gdt-group/gdt-group';

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
        {
          path: '/grupos',
          name: 'grupos',
          component: Groups,
        },
        {
          path: '/grupo/:id/:slug',
          name: 'group',
          component: Group,
          props: true,
        },
      ],
    },
  ],
});
