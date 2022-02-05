<template>
  <div id="app">
    <div v-for="n of news.news" :key="n.id">{{ n.category }}</div>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    news() {
      return this.$store.state.news;
    },
  },
  mounted() {
    this.$store.dispatch("getNews");
  },
};
</script>

<style>
div {
  color: red;
}
</style>
