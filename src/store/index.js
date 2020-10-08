import Vue from "vue";
import Vuex from "vuex";
import { uuid } from "../../utils";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    inbox: [],
    bin: [],
    send: [],
  },
  mutations: {
    sendEmailToSentBox(state, { dataEmail }) {
      const result = {
        emailName: dataEmail.emailName,
        description: dataEmail.description,
        name: dataEmail.name,
        id: uuid(),
        stared: false,
        time: Date(),
      };
      state.inbox.push(result);
      state.send.push(result);
    },

    removeEmail(state, item) {
      state.bin.push(item);

      let targetMail = state.inbox.filter((mail) => mail.id !== item.id);
      state.inbox = targetMail
    },
    favouriteMail(state, item) {
      item.stared = true;
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
    showFavourite(state) {
      const showItem = state.inbox.filter((item) => item.stared === true);
      return showItem;
    },
  },
});
