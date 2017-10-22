<template src="./gdt-groups.pug" lang="pug"></template>

<script>
import gdtGroupExcerpt from '@/components/gdt-excerpt-group/gdt-excerpt-group';
import gdtLoading from '@/components/gdt-loading/gdt-loading';

export default {
  name: 'gdt-groups',
  data() {
    return {
      groups: {},
      loading: true,
    };
  },
  created() {
    this.getGroups();
  },
  components: {
    'gdt-excerpt-group': gdtGroupExcerpt,
    'gdt-loading': gdtLoading,
  },
  methods: {
    getGroups() {
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
