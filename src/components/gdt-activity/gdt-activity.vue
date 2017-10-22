<template src="./gdt-activity.html"></template>

<script>
import moment from 'moment';
import gdtLoading from '@/components/gdt-loading/gdt-loading';

export default {
  name: 'gdt-activity',
  data() {
    return {
      activity: '',
      media: '',
      date: '',
      time: '',
      loading: true,
    };
  },
  props: [
    'id',
    'slug',
  ],
  created() {
    moment.locale('es');
    this.getPost();
  },
  components: {
    'gdt-loading': gdtLoading,
  },
  methods: {
    retrieveMedia() {
      const url = `http://guindostan.org/wp-json/wp/v2/media/${this.activity.featured_media}`;

      return window.fetch(url)
        .then(response => response.json())
        .then((json) => {
          this.media = json;
          this.loading = false;
        })
        .catch((err) => {
          throw err.message;
        });
    },
    getPost() {
      const url = `http://guindostan.org/wp-json/wp/v2/activities/${this.id}`;

      return window.fetch(url)
        .then(response => response.json())
        .then((json) => {
          this.activity = json;
          this.date = moment(this.activity.acf.fecha).format('D MMMM YYYY');
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
<style scoped src="./gdt-activity.css"></style>
