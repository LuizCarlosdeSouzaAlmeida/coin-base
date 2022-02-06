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
