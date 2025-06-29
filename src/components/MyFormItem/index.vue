<template>
  <div class="form-item">
    <!-- <label>{{ label }}</label> -->
    <div>
      <slot></slot>
      <div v-if="error" class="error-msg">{{ error }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyFormItem',
  inject: ['myFormContext'],
  props: {
    // label: {
    //   type: String,
    //   default: ''
    // },
    prop: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      error: ''
    }
  },
  computed: {
    modelValue() {
      return this.myFormContext.getModel()[this.prop]
    },
    rules() {
      return this.myFormContext.getRules()[this.prop] || []
    }
  },
  watch: {
    modelValue() {
      this.validate()
    }
  },
  methods: {
    validate() {
      const value = this.modelValue
      for (const rule of this.rules) {
        if (rule.required && (value === '' || value === undefined)) {
          this.error = rule.message || '该字段是必填的'
          return false
        }
        if (rule.minLength && value.length < rule.minLength) {
          this.error = rule.message || `长度不能少于 ${rule.minLength}`
          return false
        }
        // 自定义校验函数（同步）
        if (typeof rule.validator === 'function') {
          const result = rule.validator(value)
          if (result !== true) {
            this.error = result || rule.message || '格式错误'
            return false
          }
        }
      }
      this.error = ''
      return true
    }
  }
}
</script>

<style scoped>
.form-item {
  margin-bottom: 12px;
}
/* label {
  display: inline-block;
  width: 80px;
} */
.error-msg {
  color: red;
  font-size: 12px;
  margin-top: 4px;
}
</style>
