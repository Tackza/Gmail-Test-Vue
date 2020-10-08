<template>
  <div class="container">
    <form @submit.prevent="sendEmail">
      <div class="form-group">
        <label>To: </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          v-model="formEmail.emailName"
        />
      </div>
      <div class="form-group">
        <label>Title: </label>
        <input type="text" class="form-control" v-model="formEmail.name" />
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Subject: </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          v-model="formEmail.description"
        ></textarea>
      </div>
      <button class="btn btn-primary btn-lg" type="submit">Send</button>
    </form>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Email</th>
          <th scope="col">Title</th>
          <th scope="col">time</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) of inboxMail" :key="index">
          <td>{{ item.emailName }}</td>
          <td>
            {{ item.name }}
            <p class="text-muted">{{ item.description }}</p>
          </td>
          <td>
            {{ item.time | convertTime}}
          </td>
          <td>
            <button class="btn btn-danger" @click="remove(item)">Delete</button>
            <input type="checkbox" @change="favourite(item)" />favourite
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {
      formEmail: {
        emailName: "",
        name: "",
        description: "",
      },
    };
  },
  computed: {
    inboxMail() {
      return this.$store.getters["inbox"];
    },
  },
  methods: {
    sendEmail() {
      this.$store.commit("sendEmailToSentBox", { dataEmail: this.formEmail });
      this.formEmail = {
        emailName: "",
        name: "",
        description: "",
      };
    },
    remove(item) {
      this.$store.commit("removeEmail", item);
    },
    favourite(item) {
      this.$store.commit("favouriteMail", item);
    },
  },
  filters: {
    convertTime: function(value) {
      return moment(value).format('HH:mm DD MMM YYYY');
    }
  }
};
</script>
