<template>
  <div class="container">
    <div v-for="n of news" :key="n.id" class="news">
      <div class="news-card-border">
        <div class="news-card">
          <NewsCover :img="n.url_image"></NewsCover>
          <div class="news-overview">
            <h1>
              {{ n.title }}
            </h1>
            <p class="news-data">
              {{ moment(n.date).format("DD/MM/YYYY") }} |
              {{ n.category.toUpperCase() }}
            </p>
            <p>
              {{ n.short_text }}
            </p>
            <router-link to="post">
              <button v-on:click="selectNews(n)">Descubra</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import NewsCover from "./NewsCover.vue";

export default {
  name: "News",
  components: { NewsCover },
  created: function () {
    this.moment = moment;
  },
  computed: {
    news() {
      return this.$store.state.news.news;
    },
    selectedNews() {
      return this.$store.state.selectedNews;
    },
  },
  mounted() {
    this.$store.dispatch("getNews");
  },
  methods: {
    selectNews: function (e) {
      console.log(e);
      this.$store.dispatch("selectNews", e);
    },
  },
};
</script>

<style scoped>
.container {
  background: white;
  padding: 0% 15%;
}

.news .news-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: #fff;
  overflow: hidden;
}
.news .news-overview {
  width: 100%;
  flex-direction: column;
  padding: 5% 5%;
  text-align: center;
}
.news .news-card-border {
  border-radius: 20px;
  background: var(--gradient-card);
  padding: 1px;
  margin: 5% 0%;
}

.news-overview h1 {
  background-image: var(--gradient-button);
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  padding: 0%;
  padding: 10px;
}

.news-overview p {
  font-weight: 400;
  padding: 10px;
  padding-bottom: 20px;
}
.news-data {
  font-size: 11px;
}
.news-overview button {
  font-size: 14px;
}
</style>
