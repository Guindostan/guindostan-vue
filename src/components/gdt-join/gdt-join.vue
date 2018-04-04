<template src="./gdt-join.html"></template>

<script>
import moment from 'moment';
import gdtLoading from '@/components/gdt-loading/gdt-loading';

export default {
  name: 'gdt-join',
  data() {
    return {
      join: '',
    };
  },
  created() {
    moment.locale('es');
    this.getJoin();
  },
  components: {
    'gdt-loading': gdtLoading,
  },
  methods: {
    getJoin() {
      const url = 'http://guindostan.org/wp-json/wp/v2/pages/24';

      return window.fetch(url)
        .then(response => response.json())
        .then((json) => {
          this.join = json;
        })
        .catch((err) => {
          throw err.message;
        });
    },
  },
};
</script>

<style scoped src="./gdt-join.css"></style>
