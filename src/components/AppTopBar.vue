<template>
  <div class="topbar">
    <div class="topbar-left">
      <a href=""><i class="fas fa-map-marker-alt"></i> г. Рязань</a>
      <a href=""><i class="fas fa-store"></i> Магазины</a>
    </div>
    <div class="topbar-right">
      <a href=""><i class="fas fa-phone-alt"></i> 8 (800) 000 00 00</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppTopBar",
};
</script>

<style scoped lang="scss">
.topbar {
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #333;

  }
  a i {
    margin-right: 5px;
    color: #8d8d8d;
  }
  .topbar-left {
    display: flex;
    gap: 36px;
  }
}
</style>
