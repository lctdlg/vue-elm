<template>
  <div class="latest-news">
    <div class="container">
      <div class="h1">Latest News</div>
      <div class="h2">
        Market intelligence, product updates, and engaging with fintech communites around the globe, just fellow us
      </div>
      <div class="cards">
        <div class="card">
          <div class="card-img"></div>
          <div class="card-h1">Haame Recognized Most Innovative CRM Provider by FXVC</div>
          <div class="card-h2">
            On October 19, the much-anticipated FXVC brand launch conference opened grandly in Xiamen...
          </div>
          <div class="more">
            <span>Read More</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.66666 4.6665H11.3333V11.3332"
                stroke="#656B8A"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.66666 11.3332L11.3333 4.6665"
                stroke="#656B8A"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div class="card">
          <div class="card-img"></div>
          <div class="card-h1">Haame Recognized Most Innovative CRM Provider by FXVC</div>
          <div class="card-h2">
            On October 19, the much-anticipated FXVC brand launch conference opened grandly in Xiamen...
          </div>
          <div class="more">
            <span>Read More</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.66666 4.6665H11.3333V11.3332"
                stroke="#656B8A"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.66666 11.3332L11.3333 4.6665"
                stroke="#656B8A"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div class="card">
          <div class="card-img"></div>
          <div class="card-h1">Haame Recognized Most Innovative CRM Provider by FXVC</div>
          <div class="card-h2">
            On October 19, the much-anticipated FXVC brand launch conference opened grandly in Xiamen...
          </div>
          <div class="more">
            <span>Read More</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.66666 4.6665H11.3333V11.3332"
                stroke="#656B8A"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.66666 11.3332L11.3333 4.6665"
                stroke="#656B8A"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.latest-news {
  width: 100%;
  background: #fff;
}
.container {
  width: 1228px;
  height: 915px;
  background-color: #fff;
  background-image: url('../../../assets/渐变圆形背景.png');
  background-repeat: no-repeat;
  /* background-size: 915px 915px; */
  background-size: cover;
  background-position: center;
  margin: 0 auto;
  text-align: center;
}
@media screen and (max-width: 1200px) {
  .container {
    width: 100%;
    height: 100%;
  }
}
.h1 {
  /* width: 289px; */
  height: 58px;
  font-weight: 600;
  font-size: 48px;
  line-height: 1;
  color: #020f2c;
  /* margin: 0 auto; */
}
.h2 {
  /* width: 557px; */
  height: 52px;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: #020f2c;
  /* margin: 24px auto 48px; */
}
@media screen and (max-width: 1200px) {
  .h1 {
    font-size: 24px;
  }
  .h2 {
    font-size: 12px;
  }
}
.cards {
  display: flex;
  justify-content: space-between;
}
@media screen and (max-width: 1200px) {
  .cards {
    display: block;
  }
}
.card {
  flex: 0 0 392px;
  width: 392px;
  min-height: 464px;
  background: #fff;
  border-radius: 24px;
  box-shadow: 0px 4px 9px 0px #b8bedb1a;
  box-shadow: 0px 16px 16px 0px #b8bedb17;
  box-shadow: 0px 36px 21px 0px #b8bedb0d;
  box-shadow: 0px 63px 25px 0px #b8bedb03;
  padding: 24px;
  box-sizing: border-box;
}
@media screen and (max-width: 1200px) {
  .card {
    width: 100%;
  }
}
.card-img {
  width: 100%;
  height: 200px;
  background-image: url('../../../assets/产品.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.card-h1 {
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: #020f2c;
  margin-top: 12px;
}
.card-h2 {
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
  color: #656b8a;
  margin-top: 12px;
  margin-bottom: 14px;
}
.more span {
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  color: #656b8a;
}
.more svg {
  vertical-align: middle;
}
</style>
