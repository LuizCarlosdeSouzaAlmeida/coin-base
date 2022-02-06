<template>
  <div>
    <div v-for="n of news" :key="n.id">
      <Cover :img="n.url_image"></Cover>
      {{ n }}
    </div>
  </div>
</template>

<script>
import Cover from "./Cover.vue";

export default {
  name: "News",
  components: { Cover },
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
