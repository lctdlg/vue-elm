<template>
  <div class="collapse-item" :class="{ 'collapse-item-active': isOpen }">
    <div class="collapse-header" @click="toggle">
      <span :class="{ active: isOpen }">{{ title }}</span>
      <span class="icon">
        <svg v-if="isOpen" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 15L12 9L6 15" stroke="#656B8A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 9L12 15L6 9" stroke="#656B8A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </span>
    </div>
    <div v-if="isOpen" class="collapse-content">
      {{ content }}
    </div>
    <div class="divider"></div>
  </div>
</template>

<script>
export default {
  name: 'CollapseItem',
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    defaultOpen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isOpen: this.defaultOpen
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style scoped>
.collapse-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  color: #020f2c;
  transition: color 0.2s;
  padding: 24px 0;
}

.collapse-header .active {
  color: #0154fc;
}

.collapse-item-active .collapse-header {
  padding: 0;
}
.collapse-item-active .collapse-content {
  padding: 24px 0;
}

.collapse-content {
  color: #656b8a;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: left;
}

.divider {
  height: 1px;
  background-color: #d9dfeb;
}
</style>
