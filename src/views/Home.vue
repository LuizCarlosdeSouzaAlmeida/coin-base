<template>
  <div class="container home-cover">
    <div class="cover">
      <div class="cover-text">
        <p id="page">{{ page }}</p>
        <h1 id="title">{{ title }}</h1>
        <p id="subtitle">{{ subtitle }}</p>
      </div>
      <div class="cover-img">
        <img :src="ImgSvg" />
      </div>
    </div>
    <div class="wave">
      <img :src="WaveSvg" />
    </div>
  </div>
  <NewsFeed></NewsFeed>
</template>

<script>
import ImgSvg from "@/assets/IMG.svg";
import WaveSvg from "@/assets/Wave.svg";
import NewsFeed from "@/components/NewsFeed.vue";
export default {
  name: "Home",
  components: {
    NewsFeed,
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
      WaveSvg,
    };
  },
};
</script>

<style scoped lang="scss">
.container .home-cover {
  color: #fff;
  background: linear-gradient(174.48deg, #fd749b -12.41%, #281ac8 88.56%);
  height: 600px;
}
.cover {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2% 10% 0%;
}
.cover-text {
  width: 360px;
}
#page {
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
}
#subtitle {
  font-weight: 400;
  font-size: 19px;
  line-height: 27px;
}
.cover-text h1 {
  padding: 1rem 0;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
}
.cover-img {
  display: flex;
  justify-content: center;
  align-items: center;
}
.cover-img img {
  height: 400px;
}
.wave img {
  box-sizing: content-box;
  height: auto;
  width: 100%;
}
</style>
