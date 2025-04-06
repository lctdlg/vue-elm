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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
