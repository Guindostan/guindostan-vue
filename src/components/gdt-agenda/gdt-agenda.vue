<template src="./gdt-agenda.pug" lang="pug"></template>

<script>
import excerptActivity from '@/components/gdt-excerpt-activity/gdt-excerpt-activity';
import moment from 'moment';

export default {
  name: 'gdt-agenda',
  data() {
    return {
      activities: {},
      error: '',
    };
  },
  created() {
    this.fetch();
  },
  components: {
    'gdt-excerpt-activity': excerptActivity,
  },
  methods: {
    fetch() {
      this.loading = true;
      const url = 'http://guindostan.org/wp-json/wp/v2/activities';

      return window.fetch(url)
        .then(response => response.json())
        .then((json) => {
          this.activities = json.filter((activity) => {
            const eventDate = moment(activity.acf.fecha).format('YYYY-MM-DD');
            const todayDate = moment().format('YYYY-MM-DD');
            return moment(eventDate).isAfter(todayDate);
          });
          this.loading = false;
        })
        .catch((err) => {
          this.activities = undefined;
          this.loading = false;
          this.error = err.message;
          throw err.message;
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./gdt-agenda.css"></style>
