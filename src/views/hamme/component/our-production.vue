<template>
  <div class="our-production">
    <div class="container">
      <div class="h1">Products We Offer</div>
      <div class="h2">Interface Design · Business Processes · Operational Models — All Tailored to You</div>
      <div class="tabs">
        <TabSwitcher v-model="activeTab" :tabs="['CRM', 'PAMM', 'Copy Trading']" />
      </div>
      <div class="tabs-container">
        <div class="tabs-container-left">
          <div class="tabs-container-left-h1">
            All-in-one CRM solution: Automate mid-backend operations, boost customer management efficiency, and drive
            revenue growth.
          </div>
          <div class="tabs-container-left-list">
            <CollapseItem
              title="Adopted by anyone"
              content="Monitor all market activities with real-time data analysis and actionable insights."
              :default-open="true"
            />
            <CollapseItem
              title="Open & extendable"
              content="Monitor all market activities with real-time data analysis and actionable insights."
              :default-open="false"
            />
            <CollapseItem
              title="Al-driven workflows"
              content="Monitor all market activities with real-time data analysis and actionable insights."
              :default-open="false"
            />
            <CollapseItem
              title="Dashboard anything"
              content="Monitor all market activities with real-time data analysis and actionable insights."
              :default-open="false"
            />
          </div>
          <div class="tabs-container-left-btn"><span>read more</span></div>
        </div>
        <div class="tabs-container-right">
          <div class="tabs-container-right-bg"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import ContainerWrap from '@/views/hamme/common/container-wrap.vue'
import CollapseItem from '@/components/CollapseItem/index.vue'
import TabSwitcher from '@/components/TabSwitcher/index.vue'
export default {
  name: 'CooperativePartner',
  components: {
    CollapseItem,
    // ContainerWrap,
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
.container {
  width: calc(464px + 120px + 718px);
  margin: 0 auto;
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

.tabs {
  margin-top: 58px;
  margin-bottom: 72px;
}
.tabs-container {
  display: flex;
  margin-bottom: 166px;
}
.tabs-container .tabs-container-left {
  flex: 1;
  margin-right: 120px;
}
.tabs-container-left-h1 {
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #020f2c;
  text-align: left;
  margin-bottom: 50px;
}
.tabs-container-left-btn {
  width: 130px;
  height: 50px;
  border-radius: 14px;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
}
.tabs-container-left-btn span {
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
}
.tabs-container .tabs-container-right {
  position: relative;
  flex: 0 0 718px;
  width: 718px;
  height: 538px;
  border-radius: 24px;
  background-image: linear-gradient(77.05deg, #4deeff 0%, #0154fc 65%, #733bff 100%);
  /* url('../../../assets/官网产品图 _crm.png'); */
  /* backdrop-filter: blur(20px); */
}
.tabs-container-right-bg {
  position: absolute;
  left: 70px;
  top: 70px;
  right: 0;
  bottom: 0;
  background-image: url('../../../assets/官网产品图 _crm.png');
  background-repeat: no-repeat;
  background-size: 100%;
}

@media screen and (max-width: 1200px) {
  .container {
    width: 100%;
  }
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
  .tabs-container {
    display: block;
    padding: 12px;
    box-sizing: border-box;
  }
  .tabs-container .tabs-container-left {
    margin-right: 0;
    width: 100%;
  }
  .tabs-container .tabs-container-right {
    width: 100%;
  }
  .tabs-container-left-btn {
    margin: 24px 0;
  }
}
</style>
