<template>
  <div id="app">
    <Layout></Layout>
    <news></news>
  </div>
</template>

<script>
import Layout from "./components/layout";

export default {
  name: "App",
  components: { Layout },
};
</script>

<style>
div {
  color: red;
}
</style>
