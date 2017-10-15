<template src="./gdt-groups.pug" lang="pug"></template>

<script>
import gdtGroups from '@/components/gdt-excerpt-group/gdt-excerpt-group';

export default {
  name: 'gdt-groups',
  data() {
    return {
      groups: {},
    };
  },
  created() {
    this.getGroups();
  },
  components: {
    'gdt-excerpt-group': gdtGroups,
  },
  methods: {
    getGroups() {
      this.loading = true;
      const url = 'http://guindostan.org/wp-json/wp/v2/groups';

      return window.fetch(url)
        .then(response => response.json())
        .then((json) => {
          this.groups = json;
          this.loading = false;
        })
        .catch((err) => {
          this.activities = undefined;
          this.loading = false;
          throw err.message;
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./gdt-groups.css"></style>
