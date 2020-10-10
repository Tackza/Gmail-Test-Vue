import Vue from "vue";
import Vuex from "vuex";
import firebase from "../../FirebaseInstance";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    inbox: [],
    bin: [],
    send: [],
    favourite: [],
  },
  mutations: {
    sendEmailToSentBox(state, { dataEmail }) {
      state.inbox.push(dataEmail);
      state.send.push(dataEmail);
    },

    removeEmail(state, item) {
      state.bin.push(item);

      let targetMail = state.inbox.filter((mail) => mail.id !== item.id);
      state.inbox = targetMail;
    },
    favouriteMail(state, item) {
      item.stared = true;
    },
    updateData(state, data) {
      state.inbox = data;
    },
    updateDataSendBox(state, data) {
      state.send = data;
    },
    updateDataBinBox(state, data) {
      state.bin = data;
    },
    updateDataFavouriteBox(state, data) {
      state.favourite = data;
    },
  },
  getters: {
    inbox(state) {
      return state.inbox;
    },
    sentBox(state) {
      return state.send;
    },
    binBox(state) {
      return state.bin;
    },
    favouriteBox(state) {
      return state.favourite;
    },
    showFavourite(state) {
      const showItem = state.inbox.filter((item) => item.stared === true);
      return showItem;
    },
  },

  actions: {
    async fetchData({ commit }) {
      let result = await firebase.firestore.collection("mail").get();
      const resultMap = result.docs.map((doc) => doc.data());
      commit("updateData", resultMap);
    },

    async fetchDataSendBox({ commit }) {
      let result = await firebase.firestore.collection("sendBox").get();
      let resultData = result.docs.map((doc) => doc.data());
      commit("updateDataSendBox", resultData);
    },

    async fetchDataBinBox({ commit }) {
      let result = await firebase.firestore.collection("binBox").get();
      let resultData = result.docs.map((doc) => doc.data());
      commit("updateDataBinBox", resultData);
    },

    async fetchDataFavouriteBox({ commit }) {
      let result = await firebase.firestore.collection("favouriteBox").get();
      let resultData = result.docs.map((doc) => doc.data());
      commit("updateDataFavouriteBox", resultData);
    },

    async sendEmailToSentBox({ commit }, { dataEmail }) {
      const id = dataEmail.id;
      await firebase.firestore
        .collection("mail")
        .doc(id.toString())
        .set(dataEmail);

      await firebase.firestore
        .collection("sendBox")
        .doc(id.toString())
        .set(dataEmail);

      commit("updateDataSendBox", dataEmail);
    },

    async removeEmail({ commit }, item) {
      await firebase.firestore
        .collection("mail")
        .doc(item.id.toString())
        .delete();

      await firebase.firestore
        .collection("binBox")
        .doc(item.id.toString())
        .set(item);
      
      commit("removeEmail" , item);
    },
  },
});
