<template>
  <div class="container">
    <span>Avalie essa notícia: </span>
    <div class="star-rating">
      <StarRating
        v-model:rating="stars"
        :show-rating="showRating"
        :star-size="starSize"
      ></StarRating>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  name: "StarsRating",
  components: {
    StarRating,
  },
  data() {
    return {
      stars: 3,
      starSize: 25,
      showRating: false,
    };
  },
  created() {
    this.stars = this.$store.state.stars;
  },
  updated() {
    this.$store.dispatch("setStars", this.stars);
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  font-weight: 700;
}
.star-rating {
  padding-left: 10px;
}
</style>
