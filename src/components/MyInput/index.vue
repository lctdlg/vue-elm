<template>
  <input
    :type="type"
    :value="value"
    class="my-input"
    :placeholder="placeholder"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  name: 'MyInput',
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.my-input {
  padding: 6px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
