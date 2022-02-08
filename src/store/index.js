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
      url_image:
        "https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/11/20190904-matilda-tn2-1200x675-1.jpg",
      title: "Matilda",
      short_text: "",
      long_text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    stars: "03",
  },
  getters: {},
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
    },
    SET_SELECTED_NEWS(state, news) {
      state.selectedNews = news;
    },
  },
  actions: {
    getNews({ commit }) {
      axios.get(REQUEST_URL).then((response) => {
        commit("SET_NEWS", response.data);
      });
    },
    selectNews({ commit }, news) {
      commit("SET_SELECTED_NEWS", news);
    },
  },
  modules: {},
});
