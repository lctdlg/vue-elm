<template>
  <div class="system-des">
    <ContainerWrap>
      <div class="h1">Integrated Systems Architecture</div>
      <div class="h2">
        Explore how our technology infrastructure supports your brokerage operations with seamless integrations across
        platforms.
      </div>
      <div class="btn">Get A Demo</div>
    </ContainerWrap>
  </div>
</template>
<script>
import ContainerWrap from '@/views/hamme/common/container-wrap.vue'
export default {
  name: 'SystemDes',
  components: {
    ContainerWrap
  }
}
</script>
<style scoped>
.system-des {
  width: 100%;
  background-color: #fff;
  background-image: url('../../../assets/Haame-平台链接图.png');
  background-repeat: no-repeat;
  background-size: 1076px 474px;
  background-position: center;
  margin-bottom: 24px;
  height: 680px;
}
.h1 {
  height: 58px;
  font-weight: 600;
  font-size: 48px;
  line-height: 1;
  color: #020f2c;
  text-align: center;
}
.h2 {
  height: 52px;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: #020f2c;
  text-align: center;
}
.btn {
  width: 146px;
  height: 52px;
  border-radius: 14px;
  background: #020f2c;
  font-size: 16px;
  font-weight: 600;
  line-height: 52px;
  color: #ffffff;
  text-align: center;
  margin: 0 auto;
}
@media screen and (max-width: 1200px) {
  .h1 {
    font-size: 24px;
  }
  .h2 {
    font-size: 12px;
  }
}
</style>
