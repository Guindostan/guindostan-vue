<template src="./gdt-excerpt-activity.pug" lang="pug"></template>

<script>
import moment from 'moment';

export default {
  name: 'gdt-excerpt-activity',
  data() {
    return {
      media: '',
      thumbnail: '',
      category: '',
      date: '',
      time: '',
      price: '',
      calendar: '',
    };
  },
  props: {
    activity: {
      type: Object,
      default: undefined,
      required: true,
    },
  },
  created() {
    moment.locale('es');
    this.retrieveMedia();
    this.getCategory(this.activity.categories[0]);
    this.date = moment(this.activity.acf.fecha).format('D MMMM YYYY');
  },
  methods: {
    retrieveMedia() {
      const url = `http://guindostan.org/wp-json/wp/v2/media/${this.activity.featured_media}`;

      return window.fetch(url)
        .then(response => response.json())
        .then((json) => {
          this.media = json;
          this.thumbnail = json.media_details.sizes.thumbnail.source_url;
        })
        .catch((err) => {
          throw err.message;
        });
    },
    getCategory(catId) {
      const url = `http://guindostan.org/wp-json/wp/v2/categories/${catId}`;

      return window.fetch(url)
        .then(response => response.json())
        .then((json) => {
          this.category = json.slug;
        })
        .catch((err) => {
          throw err.message;
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./gdt-excerpt-activity.css"></style>
