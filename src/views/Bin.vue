<template>
  <div class="container">
    <h2>BinBox</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Email</th>
          <th scope="col">Title</th>
          <th scope="col">time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) of binMail" :key="index">
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
  name: "bin",
  mounted () {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.$store.dispatch('fetchDataBinBox')
    }
  },
  computed: {
    binMail() {
      return this.$store.getters["binBox"];
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