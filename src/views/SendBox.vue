<template>
  <div class="container">
    <h2>SentBox</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Email</th>
          <th scope="col">Title</th>
          <th scope="col">time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) of sentboxMail" :key="index">
          <td>{{ item.emailName }}</td>
          <td>
            {{ item.name }}
            <p class="text-muted">{{ item.description }}</p>
          </td>
          {{
            item.time | convertTime
          }}
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "SendBox",
  mounted() {
    this.fetchData();
  },
  computed: {
    sentboxMail() {
      return this.$store.getters["sentBox"];
    },
  },
  methods: {
    fetchData() {
      this.$store.dispatch('fetchDataSendBox')
    }
  },
  filters: {
    convertTime: function (value) {
      return moment(value).format("HH:mm DD MMM YYYY");
    },
  },
};
</script>

<style>
</style>