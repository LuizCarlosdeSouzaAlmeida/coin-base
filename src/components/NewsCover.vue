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
  height: 450px !important;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
