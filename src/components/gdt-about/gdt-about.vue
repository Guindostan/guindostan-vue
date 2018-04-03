<template src="./gdt-about.html"></template>

<script>
import moment from 'moment';
import gdtLoading from '@/components/gdt-loading/gdt-loading';

export default {
  name: 'gdt-about',
  data() {
    return {
      about: '',
    };
  },
  created() {
    moment.locale('es');
    this.getAbout();
  },
  components: {
    'gdt-loading': gdtLoading,
  },
  methods: {
    getAbout() {
      const url = 'http://guindostan.org/wp-json/wp/v2/pages/14';

      return window.fetch(url)
        .then(response => response.json())
        .then((json) => {
          this.about = json;
        })
        .catch((err) => {
          throw err.message;
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./gdt-about.css"></style>
