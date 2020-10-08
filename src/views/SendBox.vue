<template>
  <div class="container">
    <table class="table" >
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
          <td>{{ item.time }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "SendBox",
  computed: {
    sentboxMail() {
      return this.$store.getters["sentBox"];
    },
  },
};
</script>

<style>
</style>