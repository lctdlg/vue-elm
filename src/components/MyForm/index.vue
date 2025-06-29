<template>
  <form><slot></slot></form>
</template>

<script>
export default {
  name: 'MyForm',
  provide() {
    return {
      myFormContext: {
        getModel: () => this.model,
        getRules: () => this.rules
      }
    }
  },
  props: {
    model: {
      type: Object,
      default: () => {}
    },
    rules: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    async validate(callback) {
      const tasks = this.$children
        .filter((child) => typeof child.validate === 'function')
        .map((child) => child.validate())
      const results = await Promise.all(tasks)
      const isValid = results.every((r) => r === true)
      callback && callback(isValid)
    }
  }
}
</script>
