<template>
  <div class="search">
    <input type="text" placeholder="Поиск среди товаров" />
  </div>
</template>

<script>
export default {
  name: "AppSearch",
};
</script>

<style scoped lang="scss">
.search {
  position: relative;
  &::before {
    content: "";
    background: url("@/assets/Icons/search.svg") no-repeat center;
    width: 26px;
    height: 26px;
    position: absolute;
    left: 10px;
    top: 55%;
    transform: translateY(-50%);
  }
  input {
    padding: 10px 50px;
    border-radius: 100px;
    width: 520px;
    border: solid 2px #dddddd;
    color: #8d8d8d;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 18.75px;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;

    &:focus {
      border-color: #e11c4b !important;
      outline: none;
    }
  }
}
</style>
