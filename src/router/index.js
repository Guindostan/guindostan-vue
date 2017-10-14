import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Agenda from '@/components/gdt-agenda/gdt-agenda';

Vue.use(Router);

export default new Router({
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
      ],
    },
  ],
});
