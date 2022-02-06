<template>
  <header>
    <div class="container">
      <img :src="logoSvg" class="Logo" />
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/post">Post</router-link>
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
  margin-left: 5px;
  color: var(--vermelho);
  font-family: "Arial Black", Times;
  font-size: 40px;
}
</style>
