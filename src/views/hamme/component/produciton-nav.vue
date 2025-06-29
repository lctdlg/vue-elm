<template>
  <div class="produciton">
    <div class="produciton-header">
      <div class="logo">
        <img src="../../../assets/haame-logo.png" alt="" />
      </div>
      <div class="center">
        <div class="it">
          <span>Products</span>
          <svg width="16" height="16" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.7671 6.5L8.76709 10.5L4.76709 6.5"
              stroke="#333333"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="it">
          <span>Products</span>
        </div>
        <div class="it">
          <span>Products</span>
        </div>
        <div class="it">
          <span>Products</span>
        </div>
        <div class="it">
          <span>Products</span>
        </div>
        <div class="it">
          <span>Products</span>
        </div>
      </div>
      <div class="menu">
        <svg
          t="1751184387626"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="6346"
          width="24"
          height="24"
        >
          <path
            d="M170.666667 213.333333h682.666666v85.333334H170.666667V213.333333z m0 512h682.666666v85.333334H170.666667v-85.333334z m0-256h682.666666v85.333334H170.666667v-85.333334z"
            fill="#000"
            p-id="6347"
          />
        </svg>
      </div>
      <div class="produciton-header-btn">Get a Demo</div>
    </div>
    <div class="production-container">
      <div class="h1">Leading CRM for</div>
      <div class="h2">Brokerages & Exchanges</div>
      <div class="h3">Create your own profit-sharing system —— # Forex CRM # PAMM # CopyTrading</div>
      <div class="input-wrap">
        <MyInput @open="$emit('open')" />
      </div>
      <!-- 产品介绍图 -->
      <div class="production-img"></div>
    </div>
    <!-- 遮罩 -->
    <div class="bg"></div>
  </div>
</template>

<script>
import MyInput from './my-input.vue'
export default {
  name: 'ProducitonNav',
  components: {
    MyInput
  }
}
</script>
<style scoped>
.produciton {
  position: relative;
  width: 100%;
  padding-top: 84px;
  box-sizing: border-box;
  background-color: #ffffff;
  background-image: url('../../../assets/grid-bg.png'), url('../../../assets/首图背景.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  text-align: center;
}

.produciton .produciton-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 84px;
  background: #ffffff99;
  width: 1228px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
@media screen and (max-width: 1200px) {
  .produciton .produciton-header {
    width: 100%;
    padding: 0 12px;
    box-sizing: border-box;
  }
}
.produciton-header .logo {
  flex: 0 0 160px;
  width: 160px;
  height: 40px;
  margin-right: 40px;
}
.logo img {
  width: 100%;
  height: 100%;
}
.produciton-header .center {
  flex: 1;
  display: flex;
}
@media screen and (max-width: 1200px) {
  .produciton-header .center {
    display: none;
  }
}
.produciton-header .center .it {
  margin-right: 32px;
}
.produciton-header .center .it span {
  font-weight: 600;
  font-size: 16px;
  color: #020f2c;
}
.produciton-header .center .it svg {
  vertical-align: middle;
  margin-left: 4px;
}
.produciton-header .menu {
  flex: 1;
  display: none;
}
@media screen and (max-width: 1200px) {
  .produciton-header .menu {
    display: block;
    text-align: right;
  }
}
.produciton-header .produciton-header-btn {
  flex: 0 0 138px;
  width: 138px;
  height: 40px;
  border: 1px solid #8f9dbd;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 600;
  color: #020f2c;
  line-height: 40px;
  text-align: center;
  border-radius: 12px;
  cursor: pointer;
}
@media screen and (max-width: 1200px) {
  .produciton-header .produciton-header-btn {
    display: none;
  }
}
.production-container {
  width: 1228px;
  margin: 0 auto;
  position: relative;
}
@media screen and (max-width: 1200px) {
  .production-container {
    width: 100%;
  }
}
.production-container .h1 {
  height: 76px;
  font-size: 64px;
  font-weight: 600;
  color: #041433;
}

.production-container .h2 {
  height: 86px;
  background: linear-gradient(90deg, #0154fc 0%, #4deeff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 70px;
  font-weight: 600;
  display: inline-block;
}
.production-container .h3 {
  font-weight: 500;
  font-size: 20px;
  color: #656b8a;
  margin: 24px 0;
}
@media screen and (max-width: 1200px) {
  .production-container .h1 {
    font-size: 28px;
  }
  .production-container .h2 {
    font-size: 28px;
  }
  .production-container .h3 {
    font-size: 12px;
  }
}
.production-container .input-wrap {
  width: 600px;
  margin: 48px auto 48px;
}
@media screen and (max-width: 750px) {
  .production-container .input-wrap {
    width: 100%;
    padding: 0 12px;
    box-sizing: border-box;
  }
}

.production-img {
  width: 1228px;
  height: 0;
  margin: 0 auto;
  padding-top: 49%;
  background-image: url('../../../assets/首图产品展示.png');
  background-repeat: no-repeat;
  background-size: contain;
}
@media screen and (max-width: 1200px) {
  .production-container .production-img {
    width: 100%;
  }
}

.bg {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  /* height: 110px; */
  padding-top: 5%;
  background-image: url('../../../assets/白色遮罩.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
</style>
