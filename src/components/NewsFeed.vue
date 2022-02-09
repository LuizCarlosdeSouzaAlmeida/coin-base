<template>
  <div class="container">
    <div v-for="n of newsPage" :key="n.id" class="news">
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
    <div class="pagination">
      <Pagination
        :records="records"
        v-model="page"
        :per-page="perPage"
        @paginate="callback"
        :options="options"
      >
      </Pagination>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import Pagination from "v-pagination-3";
import PaginationTemplate from "./Pagination.vue";
import NewsCover from "./NewsCover.vue";

export default {
  name: "News",
  components: { NewsCover, Pagination },
  data() {
    return {
      page: 1,
      cont: 0,
      perPage: 3,
      options: {
        chunk: 3,
        chunksNavigation: "scroll",
        template: PaginationTemplate,
        format: false,
      },
    };
  },
  computed: {
    news() {
      return this.$store.state.news.news;
    },
    selectedNews() {
      return this.$store.state.selectedNews;
    },
    newsPage() {
      if (this.news) {
        return this.news.slice(
          (this.page - 1) * this.perPage,
          this.page * this.perPage
        );
      }
      return this.news;
    },
    records() {
      if (this.news) {
        return this.news.length;
      }
      return 0;
    },
  },
  created() {
    this.moment = moment;
    this.$store.dispatch("getNews");
  },
  updated() {
    console.log(this.cont++);
  },
  methods: {
    selectNews(e) {
      this.$store.dispatch("selectNews", e);
    },
    callback(page) {
      this.page = page;
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
  font-size: 15px;
}
</style>
