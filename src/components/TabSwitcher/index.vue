<template>
  <div class="tab-container">
    <div
      v-for="(item, index) in tabs"
      :key="index"
      :class="['tab-item', { active: selected === item }]"
      @click="select(item)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabSwitcher',
  props: {
    tabs: {
      type: Array,
      required: true
    },
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      selected: this.value
    }
  },
  watch: {
    value(val) {
      this.selected = val
    }
  },
  methods: {
    select(item) {
      this.selected = item
      this.$emit('input', item) // v-model 支持
      this.$emit('change', item) // 额外触发 change 事件
    }
  }
}
</script>

<style scoped>
.tab-container {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: inline-flex;
  padding: 8px;
  border-radius: 16px;
  background: linear-gradient(90deg, #0154fc 0%, #4deeff 100%);
  margin: 0 auto;
}

.tab-item {
  padding: 12px 32px;
  cursor: pointer;
  font-weight: 500;
  color: #6c757d;
  transition: all 0.25s;
  border-radius: 12px;
  /* box-shadow: 0px 1px 3px 0px #9fb8e919, 0px 5px 5px 0px #9fb8e916, 0px 12px 7px 0px #9fb8e90c,
    0px 22px 9px 0px #9fb8e902, 0px 34px 9px 0px #9fb8e900; */
  color: #656b8a;
  font-size: 16px;
}

.tab-item.active {
  background-color: #ffffff;
  color: #0154fc;
}
</style>
