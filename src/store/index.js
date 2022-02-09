import { createStore } from "vuex";
import axios from "axios";

const REQUEST_URL = "https://mocki.io/v1/e7550604-190d-4d41-8097-4383cf9dfaca";
export default createStore({
  state: {
    news: [],
    selectedNews: {},
    stars: 3,
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
      if (state.selectedNews.id === undefined)
        state.selectedNews = news.news[0];
    },
    SET_SELECTED_NEWS(state, news) {
      state.selectedNews = news;
    },
    SET_STARS(state, stars) {
      state.stars = stars;
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
    setStars({ commit }, stars) {
      commit("SET_STARS", stars);
    },
  },
  modules: {},
});
