<template>
  <div class="container post-cover" :style="coverImg">
    <div class="cover">
      <div class="cover-text">
        <h1 class="news-title">
          {{ selectedNews.title }}
        </h1>
        <p>
          {{ moment(selectedNews.date).format("DD/MM/YYYY") }} |
          {{ selectedNews.category.toUpperCase() }}
        </p>
      </div>
    </div>
    <div class="wave">
      <img :src="WaveSvg" />
    </div>
  </div>
  <div class="container">
    <div class="news-text">
      <p>
        {{ selectedNews.long_text }}
      </p>
      <StarsRating></StarsRating>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import WaveSvg from "@/assets/Wave.svg";
import StarsRating from "../components/starsRating.vue";
export default {
  name: "Post",
  components: {
    StarsRating,
  },
  created: function () {
    this.moment = moment;
  },
  computed: {
    selectedNews() {
      return this.$store.state.selectedNews;
    },
    coverImg() {
      return {
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7) 100%), url(${this.selectedNews.url_image}) center no-repeat`,
      };
    },
  },
  setup() {
    return {
      WaveSvg,
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.container .post-cover {
  color: #fff;
  height: auto;
  overflow: hidden;
  background-size: cover !important;
}
.cover {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cover-text {
  padding: 150px 0px;
}
.cover-text h1 {
  text-align: center;
  width: 800px;
  font-size: 32px;
}
.cover-text p {
  text-align: center;
  font-size: 12px;
  margin-top: 10px;
  font-weight: 400;
}
.wave {
  position: relative;
  bottom: -45px;
}
.wave img {
  box-sizing: content-box;
  object-fit: fill;
  width: 105%;
}
.container .news-text {
  font-size: 16px;
  line-height: 28px;
  font-weight: 400;
  padding: 10% 20%;
}
.news-text p {
  padding-bottom: 10%;
}
@media screen and (max-width: 768px) {
  .container .news-text {
    padding: 10% 5%;
  }
  .container .cover {
    height: auto;
  }
  .cover-text {
    padding: 100px 0px;
  }
  .cover-text h1 {
    width: 100%;
    font-size: 28px;
  }
  .cover-text p {
    font-size: 12px;
  }
}
</style>
