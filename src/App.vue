<template>
  <div id="app">
    <SellHeader />
    <MyTab />
  </div>
</template>

<script>
import SellHeader from '@/components/SellHeader'
import MyTab from '@/components/Tab'
export default {
  name: 'App',
  components: {
    SellHeader,
    MyTab
  }
}
</script>

<style>
#app {
  height: 100%;
}
</style>
