<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Store',
  data() {
    return {
      data: []
    }
  },
  created() {
    console.log('1212')
  },
  methods: {}
}
</script>
