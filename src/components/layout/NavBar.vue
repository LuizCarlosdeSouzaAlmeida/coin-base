<template>
  <header>
    <div class="container">
      <a href="/">
        <img :src="logoSvg" class="Logo" />
      </a>
      <nav>
        <router-link class="link" to="/">Home</router-link>
        <router-link class="link" to="/post">Post</router-link>
      </nav>
      <div></div>
      <button class="star-button">
        <p>{{ stars }} ESTRELAS</p>
        <img :src="starSvg" class="star-icon" />
      </button>
    </div>
  </header>
</template>

<script>
import logoSvg from "@/assets/Logo.svg";
import starSvg from "@/assets/Star.svg";
export default {
  name: "NavBar",
  setup() {
    return {
      logoSvg,
      starSvg,
    };
  },
  computed: {
    stars() {
      return this.$store.state.stars;
    },
  },
};
</script>

<style scoped>
header .container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2.5rem;
}

header .Logo {
  height: 28px;
  margin-left: 5px;
}

.link {
  color: #333333;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  position: relative;
  margin: 10px;
}
.router-link-exact-active:after {
  position: absolute;
  content: "";
  height: 3px;
  bottom: -6px;
  background-color: #fd749b;
  margin: 0;
  left: 0;
  right: 0;
  width: 70%;
  transition: 0.5s;
  border-radius: 2px;
}
.star-icon {
  height: 20px;
  width: 20px;
  margin-left: 5px;
}
.star-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
