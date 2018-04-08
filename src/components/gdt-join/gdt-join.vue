<template src="./gdt-join.html"></template>

<script>
import moment from 'moment';
import gdtLoading from '@/components/gdt-loading/gdt-loading';

export default {
  name: 'gdt-join',
  data() {
    return {
      join: null,
      loading: null,
      errors: [],
      name: null,
      email: null,
      userPayment: 'cuota-general',
      telephone: null,
      message: null,
    };
  },
  created() {
    moment.locale('es');
    this.getJoin();
  },
  components: {
    'gdt-loading': gdtLoading,
  },
  methods: {
    getJoin() {
      const url = 'http://guindostan.org/wp-json/wp/v2/pages/24';
      this.loading = true;

      return window.fetch(url)
        .then(response => response.json())
        .then((json) => {
          this.loading = false;
          this.join = json;
        })
        .catch((err) => {
          throw err.message;
        });
    },
    checkForm(event) {
      event.preventDefault();
      const formURL = 'http://guindostan.org/wp-json/contact-form-7/v1/contact-forms/754/feedback';
      const formData = new FormData();
      formData.append('user-name', this.name);
      formData.append('user-email', this.email);
      formData.append('user-payment', this.userPayment);
      formData.append('user-phone', this.telephone);
      formData.append('user-message', this.message);
      return window.fetch(formURL, {
        method: 'POST',
        body: formData,
      })
      .then(response => response.json())
      .then((json) => {
        this.join = json;
      })
      .catch((err) => {
        throw err.message;
      });
    },
  },
};
</script>

<style scoped src="./gdt-join.css"></style>
