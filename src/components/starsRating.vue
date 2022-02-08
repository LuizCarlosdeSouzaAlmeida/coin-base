<template>
  <div class="container">
    <span>Avalie essa notícia: </span>
    <ul>
      <li><img :src="starSvg" /></li>
      <li><img :src="starSvg" /></li>
      <li><img :src="starSvg" /></li>
      <li><img :src="starOffSvg" /></li>
      <li><img :src="starOffSvg" /></li>
    </ul>
  </div>
</template>

<script>
import starSvg from "@/assets/Star.svg";
import starOffSvg from "@/assets/Star-off.svg";
export default {
  name: "StarsRating",
  setup() {
    return {
      starSvg,
      starOffSvg,
    };
  },
  data() {
    return {
      stars: Number,
    };
  },
  methods: {
    setStars(stars) {
      this.stars = stars;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  font-weight: 700;
}
.container ul {
  display: flex;
  flex-direction: row;
  align-items: left;
  list-style: none;
  padding-left: 10px;
}
</style>
