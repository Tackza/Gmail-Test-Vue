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
            {{ item.time | convertTime }}
          </td>
          <td>
            <button class="btn btn-danger" @click="remove(item)">Delete</button>

            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
              @click="favourite(item)"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import moment from "moment";
import firebase from "../../FirebaseInstance";
import { uuid } from "../../utils";
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
  mounted() {
    this.fetchData();
  },
  computed: {
    inboxMail() {
      return this.$store.getters["inbox"];
    },
  },
  methods: {
     fetchData() {
      this.$store.dispatch("fetchData");
    },

     sendEmail() {
      const dataEmail = {
        emailName: this.formEmail.emailName,
        name: this.formEmail.name,
        description: this.formEmail.description,
        id: uuid(),
        stared: false,
        time: Date(),
      };
      
      this.$store.dispatch("sendEmailToSentBox", { dataEmail });
      
      this.formEmail = {
        emailName: "",
        name: "",
        description: "",
      };
    },

    async remove(item) {
      this.$store.dispatch("removeEmail", item);
    },

    async favourite(item) {
      this.$store.commit("favouriteMail", item);

      await firebase.firestore
        .collection("favourite")
        .doc(item.id.toString())
        .set(item);
    },
  },
  filters: {
    convertTime: function (value) {
      return moment(value).format("HH:mm DD MMM YYYY");
    },
  },
};
</script>
