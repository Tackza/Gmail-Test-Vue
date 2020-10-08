<template>
  <div class="container">
    <h2>Favourite</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Email</th>
          <th scope="col">Title</th>
          <th scope="col">time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) of favouriteMail" :key="index">
          <td>{{ item.emailName }}</td>
          <td>
            {{ item.name }}
            <p class="text-muted">{{ item.description }}</p>
          </td>
          {{ item.time | convertTime}}
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  computed: {
    favouriteMail() {
      return this.$store.getters["showFavourite"];
    },
  },
  filters: {
    convertTime: function(value) {
      return moment(value).format('HH:mm DD MMM YYYY');
    }
  }
};
</script>

<style>
</style>