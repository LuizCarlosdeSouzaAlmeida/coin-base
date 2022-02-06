<template>
  <NavBar></NavBar>
  <div class="container">
    <router-view></router-view>
  </div>
  <Footer></Footer>
</template>

<script>
import NavBar from "./NavBar.vue";
import Footer from "./Footer.vue";
export default {
  name: "Layout",
  components: {
    NavBar,
    Footer,
  },
};
</script>
