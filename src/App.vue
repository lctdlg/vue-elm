<template>
  <div id="app">
    <!-- <SellHeader />
    <MyTab /> -->
    <Hamme />
  </div>
</template>

// <script>
// import SellHeader from '@/components/SellHeader'
// import MyTab from '@/components/Tab'
import Hamme from './views/hamme/index.vue'
export default {
  name: 'App',
  components: {
    // SellHeader,
    // MyTab,
    Hamme
  }
}
</script>

<style>
#app {
  height: 100%;
}
</style>
