<template>
  <div>
    <div v-for="n of news" :key="n.id">
      <NewsCover :img="n.url_image"></NewsCover>
      {{ n }}
    </div>
  </div>
</template>

<script>
import NewsCover from "./NewsCover.vue";

export default {
  name: "News",
  components: { NewsCover },
  computed: {
    news() {
      return this.$store.state.news.news;
    },
  },
  mounted() {
    this.$store.dispatch("getNews");
  },
};
</script>
