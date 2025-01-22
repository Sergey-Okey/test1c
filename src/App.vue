<template>
  <div class="conteiner">
    <AppTopBar />
    <AppHeader />
    <AppBottomBar />
    <router-view />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppTopBar from "./components/AppTopBar.vue";
import AppBottomBar from "./components/AppBottomBar.vue";
export default {
  name: "App",
  components: {
    AppHeader,
    AppTopBar,
    AppBottomBar
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Rosario:wght@400;500;700&display=swap");

#app {
  font-family: "Roboto" sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

a {
  text-decoration: none;
}

.conteiner {
  margin: 0 auto;
  padding: 0 5%;
  max-width: 1200px;
  width: 100%;
}
</style>
