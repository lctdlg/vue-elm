<template>
  <div class="shop-car">
    <div class="container">
      <div class="container-left">
        <div class="car-wrapper">
          <div class="car">
            <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M39 32H13L8 12H44L39 32Z" fill="#999" />
              <path
                d="M3 6H6.5L8 12M8 12L13 32H39L44 12H8Z"
                stroke="#999"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle
                cx="13"
                cy="39"
                r="3"
                stroke="#999"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle
                cx="39"
                cy="39"
                r="3"
                stroke="#999"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div class="price">￥50</div>
        <div class="desc">另需配送费￥4元</div>
      </div>
      <div class="container-right">
        <div class="pay">{{ payDesc }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ShopCar',
  computed: {
    payDesc() {
      return '￥20元起送'
    }
  },
  methods: {}
}
</script>
<style scoped>
.shop-car {
  width: 100%;
  height: 100%;
}
.shop-car .container {
  width: 100%;
  height: 100%;
  display: flex;
}
.container .container-left {
  flex: 1;
  background: #07111b;
}
.container-left .car-wrapper {
  position: relative;
  top: -10px;
  display: inline-block;
  width: 56px;
  height: 56px;
  margin: 0 12px;
  padding: 6px;
  box-sizing: border-box;
  background: #07111b;
  border-radius: 50%;
}
.car-wrapper .car {
  width: 44px;
  height: 44px;
  background: #333;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container-left .price {
  display: inline-block;
  font-size: 16px;
  color: #999;
  margin-top: 12px;
  vertical-align: top;
  border-right: 1px solid rgb(255 255 255 / 10%);
  padding-right: 12px;
}
.container-left .desc {
  display: inline-block;
  color: #999;
  font-size: 10px;
  line-height: 24px;
  margin: 12px 0 0 12px;
  vertical-align: top;
}
.container .container-right {
  flex: 0 0 105px;
}
.container-right .pay {
  font-size: 12px;
  color: #999;
  height: 48px;
  line-height: 48px;
  text-align: center;
  background: #333;
}
</style>
