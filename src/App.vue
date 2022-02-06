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
:root {
  --gradient-cover: linear-gradient(174.48deg, #fd749b -12.41%, #281ac8 88.56%);
  --gradient-button: linear-gradient(
    178.18deg,
    #fd749b -13.56%,
    #281ac8 158.3%
  );
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  width: 100%;
  height: 100%;
  font-family: "Poppins", sans-serif;
}
</style>
