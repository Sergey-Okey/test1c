<template>
  <div class="stock_grid">
    <div class="grid-items">
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StockPage',
};
</script>

<style lang="scss" scoped>
.stock_grid {
  display: flex;
  justify-content: center;
  padding: 20px;

  .grid-items {
    display: grid;
    grid-template-columns: repeat(3, minmax(361px, 1fr));
    gap: 34px;
    justify-items: center;

    .grid-item {
      width: 361px;
      height: 203px;
      background-color:#ddd;
      border-radius: 10px;
    }
  }
  @media (max-width: 1024px) {
    .grid-items {
      grid-template-columns: repeat(2, minmax(361px, 1fr));
    }
  }

  @media (max-width: 768px) {
    .grid-items {
      grid-template-columns: 1fr;
    }

    .grid-item {
      width: 100%;
    }
  }
}
</style>
