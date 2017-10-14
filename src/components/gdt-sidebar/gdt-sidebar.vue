<template src="./gdt-sidebar.html" lang="pug"></template>

<script>
import moment from 'moment';

export default {
  name: 'gdt-sidebar',
  data() {
    return {
      msg: 'Sidebar',
      year: moment().format('YYYY'),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./gdt-sidebar.css"></style>
