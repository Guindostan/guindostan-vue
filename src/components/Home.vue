<template src="./Home.html"></template>

<script>
import gdtNavbar from '@/components/gdt-navbar/gdt-navbar';

export default {
  name: 'home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  components: {
    'gdt-navbar': gdtNavbar,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./Home.css"></style>
