<template>
  <div class="header">
    <div class="logo">
      <a href="/"><span>ЭЛЕКТРОСИТИ</span></a>
    </div>
    <div class="search">
      <AppSearch />
    </div>
    <div class="nav">
      <router-link to="/profile" class="nav-item">
        <i class="far fa-user"></i>
        <span>Сергей</span>
      </router-link>
      <router-link to="/purchases" class="nav-item">
        <i class="far fa-shopping-bag"></i>
        <span>Покупки</span>
      </router-link>
      <router-link to="/favorites" class="nav-item">
        <i class="far fa-heart"></i>
        <span>Избранное</span>
      </router-link>
      <router-link to="/basket" class="nav-item">
        <i class="far fa-shopping-cart"></i>
        <span>Корзина</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import AppSearch from "./AppSearch.vue";

export default {
  name: "AppHeader",
  components: {
    AppSearch,
  },
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  width: 100%;
  align-items: center;
  padding: 20px 0;
  justify-content: space-between;
  .logo {
    a span {
      font-family: "Rosario", sans-serif;
      font-size: 22px;
      font-weight: 700;
      line-height: 26.66px;
      letter-spacing: 0.105em;
      text-align: center;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      color: #e11c4b;
    }
  }
  .nav {
    display: flex;
    gap: 24px;
    .nav-item {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      color: #000000;
      font-family: Roboto;
      font-size: 16px;
      font-weight: 400;
      line-height: 18.75px;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      &:hover i {
        color: #e11c4b;
        transition: 0.3s;
      }
      i {
        font-size: 14px;
        margin-bottom: 2px;
        color: #8d8d8d;
      }
    }
  }
}
</style>
