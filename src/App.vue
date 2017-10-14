<template>
  <div id="app">
    <gdt-sidebar class="sidebar"></gdt-sidebar>
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import gdtSidebar from '@/components/gdt-sidebar/gdt-sidebar';

export default {
  name: 'app',
  components: {
    'gdt-sidebar': gdtSidebar,
  },
};
</script>

<style src="./main.css"></style>
<style scoped src="./App.css"></style>
