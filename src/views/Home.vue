<template>
  <div class="container">
    <div class="cover-text">
      <p>{{ page }}</p>
      <h1>{{ title }}</h1>
      <p>{{ subtitle }}</p>
    </div>
    <div class="cover-img">
      <img :src="ImgSvg" />
    </div>
  </div>
  <News></News>
</template>

<script>
import ImgSvg from "@/assets/IMG.svg";
import News from "@/components/News.vue";
export default {
  name: "Home",
  components: {
    News,
  },
  data() {
    return {
      page: "HOME/BLOG",
      title: "O maior blog para cryptoinvestidores.",
      subtitle:
        "Fique por dentro de tudo que acontece no blog mais atualizado sobre cryptomoedas e mercado financeiro.",
    };
  },
  setup() {
    return {
      ImgSvg,
    };
  },
};
</script>

<style scoped lang="scss">
.container {
  color: #fff;
  background: linear-gradient(174.48deg, #fd749b -12.41%, #281ac8 88.56%);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10% 20%;
}
</style>
