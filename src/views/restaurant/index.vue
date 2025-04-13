<template>
  <div class="restaurant">
    <!-- <SellHeader />
    <MyTab /> -->
    <div class="restaurant-container">
      <!-- <KeepAlive>
        <RouterView />
      </KeepAlive> -->
      <RouterView />
    </div>
  </div>
</template>

<script>
// import SellHeader from '@/components/SellHeader'
// import MyTab from '@/components/Tab'
export default {
  name: 'Restaurant'
  // components: {
  //   SellHeader,
  //   MyTab
  // }
}
</script>

<style scoped>
.restaurant {
  position: relative;
  height: calc(100% - 136px - 38px);
  /* display: flex;
  flex-direction: column; */
}
.restaurant .restaurant-container {
  /* flex: 1; */
  width: 100%;
  height: 100%;
}
</style>
