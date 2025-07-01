<template>
  <div class="ecosystem-partners">
    <div class="h1">Our Ecosystem & Partners</div>
    <div class="h2">
      Pioneering together with leading institutions—see what our partners say and explore our ecosystem.
    </div>
    <div class="bg"></div>
  </div>
</template>

<style scoped>
.ecosystem-partners {
  background: #fff;
  text-align: center;
  margin-bottom: 200px;
}
.h1 {
  /* width: 610px; */
  font-weight: 600;
  font-size: 48px;
  color: #020f2c;
  height: 58px;
  line-height: 1;
  /* margin: 0 auto; */
}
.h2 {
  width: 768px;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  height: 52px;
  color: #020f2c;
  margin: 0 auto 84px;
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
.bg {
  background-color: #fff;
  background-image: url('../../../assets/生态-合作伙伴.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: 1272px;
  height: 760px;
  /* height: 760px; */
  /* padding-top: 61.89%; */
  margin: 0 auto;
}
@media screen and (max-width: 1200px) {
  .bg {
    width: 100%;
    height: 0;
    padding-top: 59%;
  }
}
</style>
