<template src="./gdt-group.html"></template>

<script>
export default {
  name: 'gdt-group',
  data() {
    return {
      group: '',
      media: '',
    };
  },
  props: [
    'id',
    'slug',
  ],
  created() {
    this.getGroup();
  },
  methods: {
    retrieveMedia() {
      const url = `http://guindostan.org/wp-json/wp/v2/media/${this.group.featured_media}`;

      return window.fetch(url)
        .then(response => response.json())
        .then((json) => {
          this.media = json;
        })
        .catch((err) => {
          throw err.message;
        });
    },
    getGroup() {
      const url = `http://guindostan.org/wp-json/wp/v2/groups/${this.id}`;

      return window.fetch(url)
        .then(response => response.json())
        .then((json) => {
          this.group = json;
          this.retrieveMedia();
        })
        .catch((err) => {
          throw err.message;
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./gdt-group.css"></style>
