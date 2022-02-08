<template>
  <div class="container">
    <img :src="img_url" />
  </div>
</template>

<script>
export default {
  name: "NewsCover",
  props: {
    img: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      img_url: this.img,
    };
  },
};
</script>

<style scoped>
.container {
  background: white;
  padding: 0% !important;
  width: 100%;
}
img {
  width: 100%;
  height: 500px !important;
  object-fit: cover;
}
</style>
