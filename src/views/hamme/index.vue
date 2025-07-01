<template>
  <div class="haame">
    <!-- header -->
    <TopHeader />
    <!-- 产品导航 -->
    <ProducitonNav @open="open" />
    <!-- 合作伙伴 -->
    <CooperativePartner />
    <!-- 我们的产品介绍 -->
    <OurProduction />
    <!-- 为什么选择我们 -->
    <Advantage />
    <!-- 系统介绍 -->
    <SystemDes />
    <!-- 最新消息 -->
    <LatestNews />
    <!-- 生态 与 合作伙伴 -->
    <EcosystemPartners />
    <!-- footer -->
    <MyFooter />
    <MyDialog :visible.sync="showDialog" :width="dialogWidth">
      <SubmitInfo />
    </MyDialog>
  </div>
</template>
<script>
// TopHeader
import TopHeader from './component/top-header.vue'
// ProducitonNav
import ProducitonNav from './component/produciton-nav.vue'
// 合作伙伴
import CooperativePartner from './component/cooperative-partner.vue'
// 我们的产品
import OurProduction from './component/our-production.vue'
// 我们的优势
import Advantage from './component/advantage.vue'
// 系统介绍
import SystemDes from './component/system-des.vue'
// 最新消息
import LatestNews from './component/latest-news.vue'
// 我们的生态系统和合作伙伴
import EcosystemPartners from './component/ecosystem-partners.vue'
// footer
import MyFooter from './component/my-footer.vue'
// 表单
import SubmitInfo from './common/submit-info.vue'
import MyDialog from './common/my-dialog.vue'

export default {
  name: 'Haame',
  components: {
    ProducitonNav,
    TopHeader,
    CooperativePartner,
    OurProduction,
    Advantage,
    SystemDes,
    LatestNews,
    EcosystemPartners,
    MyFooter,
    MyDialog,
    SubmitInfo
  },
  data() {
    return {
      dialogWidth: '848px',
      showDialog: false
    }
  },
  mounted() {
    this.handleResize()
    this.debouncedResize = this.debounce(this.handleResize, 200)
    window.addEventListener('resize', this.debouncedResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.debouncedResize)
  },
  methods: {
    open() {
      this.showDialog = !this.showDialog
    },
    handleResize() {
      if (window.innerWidth > 1200) {
        this.dialogWidth = '848px'
      } else {
        this.dialogWidth = '90%'
      }
    },
    debounce(fn, delay) {
      const that = this
      let timer = null
      return function () {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          fn.apply(that, arguments)
        }, delay)
      }
    }
  }
}
</script>

<style scoped>
.haame {
  height: 100%;
  overflow: auto;
  user-select: text;
}
</style>
