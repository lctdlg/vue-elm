<template>
  <div class="container-wrap">
    <slot></slot>
  </div>
</template>

<style scoped>
.container-wrap {
  width: 1228px;
  margin: 0 auto;
}
@media screen and (max-width: 1200px) {
  .container-wrap {
    width: 100%;
  }
}
</style>
