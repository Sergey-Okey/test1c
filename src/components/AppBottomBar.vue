<template>
  <div class="navigation-wrapper">
    <button class="scroll-btn left" @click="scrollLeft" v-if="canScrollLeft">
      <i class="fas fa-chevron-left"></i>
    </button>
    <div class="navigation" ref="menu" @scroll="checkScroll">
      <li v-for="item in navigationItems" :key="item.path">
        <router-link :to="item.path" class="nav-link" :class="{ active: isActive(item.path) }">
          <i :class="[item.icon, 'nav-icon', { visible: isActive(item.path) }]"></i>
          {{ item.label }}
        </router-link>
      </li>
    </div>
    <button class="scroll-btn right" @click="scrollRight" v-if="canScrollRight">
      <i class="fas fa-chevron-right"></i>
    </button>
  </div>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  name: "AppBottomBar",
  setup() {
    const route = useRoute();

    const isActive = (path) => route.path === path;

    return { route, isActive };
  },
  data() {
    return {
      canScrollLeft: false,
      canScrollRight: false,
      navigationItems: [
        { path: "/", label: "Акции", icon: "fas fa-percentage" },
        { path: "/smartphones", label: "Смартфоны", icon: "fas fa-mobile-alt" },
        { path: "/laptops", label: "Ноутбуки", icon: "fas fa-laptop" },
        { path: "/tvs", label: "Телевизоры", icon: "fas fa-tv" },
        { path: "/videotech", label: "Видеотехника", icon: "fas fa-video" },
        { path: "/headphones", label: "Наушники", icon: "fas fa-headphones" },
        { path: "/gaming", label: "Гейминг", icon: "fas fa-gamepad" },
        { path: "/smartwatches", label: "Умные часы", icon: "fas fa-watch" },
        { path: "/monoblocks", label: "Моноблоки", icon: "fas fa-desktop" },
        { path: "/tablets", label: "Планшеты", icon: "fas fa-tablet-alt" },
      ],
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
      const { scrollLeft, scrollWidth, clientWidth } = menu;

      this.canScrollLeft = scrollLeft > 0;
      this.canScrollRight = Math.ceil(scrollLeft + clientWidth) < scrollWidth;
    },
  },
  mounted() {
    this.checkScroll();
    window.addEventListener("resize", this.checkScroll);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkScroll);
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
    display: flex;
    .nav-link {
      display: flex;
      align-items: center;
      cursor: pointer;
      text-decoration: none;
      padding: 10px 15px;
      border-radius: 20px;
      color: #333;
      font-weight: 500;
      white-space: nowrap;
      transition: background-color 0.3s ease, color 0.3s ease;
      font-family: Roboto;
      font-size: 16px;

      .nav-icon {
        margin-right: 10px;
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      .nav-icon.visible {
        opacity: 1;
      }

      &.active {
        background-color: #e11c4b;
        color: #fff;

        .nav-icon {
          opacity: 1;
        }
      }
    }
  }
}
</style>
