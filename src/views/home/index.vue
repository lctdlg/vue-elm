<template>
  <div class="home">
    <SellHeader />
    <MyTab />
    <div class="home-container">
      <KeepAlive>
        <RouterView />
      </KeepAlive>
    </div>
  </div>
</template>

<script>
import SellHeader from '@/components/SellHeader'
import MyTab from '@/components/Tab'
export default {
  name: 'Home',
  components: {
    SellHeader,
    MyTab
  }
}
</script>

<style scoped>
.home {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.home .home-container {
  flex: 1;
}
</style>
