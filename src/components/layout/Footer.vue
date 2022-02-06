<template>
  <div class="container">
    <div class="footer">
      <img :src="logoFooterSvg" class="Logo" />
      <p>© 2021 Desenvolvido por Luiz Carlos de Souza Almeida</p>
    </div>
  </div>
</template>

<script>
import logoFooterSvg from "@/assets/LogoFooter.svg";
export default {
  name: "Footer",
  setup() {
    return {
      logoFooterSvg,
    };
  },
};
</script>

<style scoped>
.footer {
  padding: 2% 5%;
  background-color: #151515;
  color: #555;
  font-size: 12px;
  text-align: left;
}
.Logo {
  margin-bottom: 0.5em;
  height: 22px;
}
</style>
