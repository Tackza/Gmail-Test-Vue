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

    removeEmail(state, id) {
      const moveMailToBin = state.inbox.filter((item) => item.id === id);
      state.bin.push(moveMailToBin[0]);

      const targetMail = state.inbox.filter((item) => item.id !== id);
      state.inbox = targetMail;
    },
    favouriteMail(state, id) {
      state.inbox
        .filter((type) => type.id === id)
        .map((item) => (item.stared = !item.stared));
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
      console.log(showItem);
      return (state.inbox = showItem);
    },
  },
});
