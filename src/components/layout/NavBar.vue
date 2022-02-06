<template>
  <header>
    <div class="container">
      <img :src="logoSvg" class="Logo" />
      <nav>
        <router-link class="link" to="/">Home</router-link>
        <router-link class="link" to="/post">Post</router-link>
      </nav>
      <div></div>
      <button>Estrelas</button>
    </div>
  </header>
</template>

<script>
import logoSvg from "@/assets/Logo.svg";
export default {
  name: "NavBar",
  setup() {
    return {
      logoSvg,
    };
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
  margin: 10px;
}
</style>
