<template>
  <div class="navigation-wrapper">
    <button
      class="scroll-btn left"
      @click="scrollLeft"
      v-if="canScrollLeft"
    >
      <i class="fas fa-chevron-left"></i>
    </button>
    <div class="navigation" ref="menu" @scroll="checkScroll">
      <li>
        <router-link to="/" class="nav-link">
          <i class="fas fa-percentage"></i>
          Акции
        </router-link>
        <router-link to="/smartphones" class="nav-link">
          <i class="fas fa-mobile-alt"></i>
          Смартфоны
        </router-link>
        <router-link to="/laptops" class="nav-link">
          <i class="fas fa-laptop"></i>
          Ноутбуки
        </router-link>
        <router-link to="/tvs" class="nav-link">
          <i class="fas fa-tv"></i>
          Телевизоры
        </router-link>
        <router-link to="/videotech" class="nav-link">
          <i class="fas fa-video"></i>
          Видеотехника
        </router-link>
        <router-link to="/headphones" class="nav-link">
          <i class="fas fa-headphones"></i>
          Наушники
        </router-link>
        <router-link to="/headphones" class="nav-link">
          <i class="fas fa-headphones"></i>
          Гейминг
        </router-link>
        <router-link to="/headphones" class="nav-link">
          <i class="fas fa-headphones"></i>
          Умные часы
        </router-link>
        <router-link to="/headphones" class="nav-link">
          <i class="fas fa-headphones"></i>
          Моноблоки
        </router-link>
        <router-link to="/headphones" class="nav-link">
          <i class="fas fa-headphones"></i>
          Планшеты
        </router-link>
      </li>
    </div>
    <button
      class="scroll-btn right"
      @click="scrollRight"
      v-if="canScrollRight"
    >
      <i class="fas fa-chevron-right"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "AppBottomBar",
  data() {
    return {
      canScrollLeft: false,
      canScrollRight: true,
    };
  },
  methods: {
    scrollLeft() {
      this.$refs.menu.scrollBy({ left: -150, behavior: "smooth" });
    },
    scrollRight() {
      this.$refs.menu.scrollBy({ left: 150, behavior: "smooth" });
    },
    checkScroll() {
      const menu = this.$refs.menu;
      this.canScrollLeft = menu.scrollLeft > 0;
      this.canScrollRight =  menu.scrollWidth - menu.clientWidth > menu.scrollLeft;
    },
  },
  mounted() {
    this.checkScroll();
  },
};
</script>

<style scoped lang="scss">
.navigation-wrapper {
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  .scroll-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    border: none;
    background-color: #ddd;
    color: black;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #c10f3e;
      color: white;
    }

    &.left {
      left: 1px;
    }

    &.right {
      right: 1px;
    }

    i {
      font-size: 18px;
    }
  }
}

.navigation {
  width: 100%;
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 10px 0;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  li {
    width: 100%;
    display: flex;
    justify-content: space-around;
    gap: 10px;
    margin: 0 45px;
    i{
    display: none;
    }
  }

  .nav-link {
    display: flex;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    padding: 10px 15px;
    border-radius: 20px;
    color: #333;
    font-weight: 500;
    white-space: nowrap;
    transition: background-color 0.3s ease, color 0.3s ease;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 18.75px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    gap: 5px;
    align-items: center;

    &:hover {
      background-color: #e11c4b;
      color: #fff;
    }

    &.active {
      background-color: #e11c4b;
      color: #fff;

      &::after {
        content: "\f00c";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        position: absolute;
        right: -10px;
        top: 50%;
        transform: translate(100%, -50%);
        color: #e11c4b;
        background: #fff;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
