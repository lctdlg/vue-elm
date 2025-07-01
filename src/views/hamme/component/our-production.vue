<template>
  <div class="our-production">
    <ContainerWrap>
      <div class="h1">Products We Offer</div>
      <div class="h2">Interface Design · Business Processes · Operational Models — All Tailored to You</div>
      <div class="tabs">
        <TabSwitcher v-model="activeTab" :tabs="['CRM', 'PAMM', 'Copy Trading']" />
      </div>
      <div class="tabs-container">tabContainer</div>
    </ContainerWrap>
  </div>
</template>
<script>
import ContainerWrap from '@/views/hamme/common/container-wrap.vue'
import TabSwitcher from '@/components/TabSwitcher/index.vue'
export default {
  name: 'CooperativePartner',
  components: {
    ContainerWrap,
    TabSwitcher
  },
  data() {
    return {
      activeTab: 'CRM'
    }
  }
}
</script>
<style scoped>
.our-productionsd {
  width: 100%;
  background: #fff;
}
.h1 {
  font-weight: 600;
  font-size: 48px;
  line-height: 1;
  color: #020f2c;
  text-align: center;
  margin-top: 174px;
  margin-bottom: 24px;
}
.h2 {
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: #020f2c;
  text-align: center;
}
@media screen and (max-width: 1200px) {
  .h1 {
    font-size: 24px;
  }
  .h2 {
    width: 100%;
    font-size: 12px;
    padding: 0 12px;
    box-sizing: border-box;
    line-height: 1.5;
  }
}
.tabs {
  margin-top: 58px;
  margin-bottom: 72px;
}
</style>
