import { createStore } from "vuex";
import axios from "axios";

const REQUEST_URL = "https://mocki.io/v1/e7550604-190d-4d41-8097-4383cf9dfaca";
export default createStore({
  state: {
    news: [],
    selectedNews: {
      id: null,
      date: null,
      category: "teste",
      url_image: "",
      title: "",
      short_text: "",
      long_text: "",
    },
  },
  getters: {},
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
    },
  },
  actions: {
    getNews({ commit }) {
      axios.get(REQUEST_URL).then((response) => {
        commit("SET_NEWS", response.data);
      });
    },
  },
  modules: {},
});
