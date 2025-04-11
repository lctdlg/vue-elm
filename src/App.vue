<template>
  <div id="app">
    <KeepAlive>
      <RouterView />
    </KeepAlive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  height: 100%;
}
</style>
