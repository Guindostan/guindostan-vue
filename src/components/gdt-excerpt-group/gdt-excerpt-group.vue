<template src="./gdt-excerpt-group.pug" lang="pug"></template>

<script>

export default {
  name: 'gdt-excerpt-group',
  data() {
    return {
      media: '',
    };
  },
  props: {
    group: {
      type: Object,
      default: undefined,
      required: true,
    },
  },
  created() {
    this.retrieveMedia();
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./gdt-excerpt-group.css"></style>
