<template>
  <div class="goods-wrapper">
    <!-- goods -->
    <div class="goods">
      <EleScroll ref="menu" class="menu-wrapper" :data="list">
        <div class="menu-items">
          <div
            v-for="(it, index) in list"
            :key="index"
            class="menu-item"
            :class="[activeIndex === index ? 'active-menu-item' : '']"
            @click="selectMenu(index)"
          >
            <span>{{ it.name }}</span>
          </div>
        </div>
      </EleScroll>
      <EleScroll ref="foods" class="foods-wrapper" :data="list">
        <div>
          <div v-for="(item, id) in list" ref="food" :key="id">
            <div class="title">{{ item.name }}</div>
            <div class="foods-items">
              <div
                v-for="(food, index) in item.foods"
                :key="index"
                class="foods-item"
                :class="[false && 'active-foods-item']"
              >
                <div class="icon">
                  <img v-lazy="food.icon" width="57" height="57" alt="" />
                </div>
                <div class="container">
                  <div class="name">{{ food.name }}</div>
                  <div class="description">{{ food.description }}</div>
                  <div class="extra">
                    <span>{{ `月售${food.sellCount}份` }}</span>
                    <span>{{ `好评率${food.rating}%` }}</span>
                  </div>
                  <div class="price">
                    <span class="now">{{ `￥${food.price}` }}</span>
                    <span v-show="false" class="old">{{ `￥${food.oldPrice}` }}</span>
                  </div>
                  <div class="cart-control-wrapper">
                    <ContRol
                      :food="food"
                      @increase="
                        (e) => {
                          increase(id, index, e)
                        }
                      "
                      @decrease="decrease(id, index)"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </EleScroll>
    </div>
    <!-- 购物车 -->
    <div class="shop-car-wrapper">
      <ShopCar ref="shopCar" :select-foods="selectFoods" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import EleScroll from '@/components/EleScroll'
import ShopCar from '@/components/ShopCar'
import ContRol from '@/components/ContRol'

export default {
  name: 'Goods',
  components: {
    EleScroll,
    ContRol,
    ShopCar
  },
  data() {
    return {
      test: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
      activeIndex: 0,
      list: []
    }
  },
  computed: {
    selectFoods() {
      const foods = []
      this.list.forEach((goods) => {
        goods.foods.forEach((food) => {
          if (food.count) {
            foods.push(food)
          }
        })
      })
      return foods
    }
  },
  created() {},
  async mounted() {
    await this.fetchData()
    // this.lazyImg()
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch('api/goods.json', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const { goods, errno } = await response.json()
        if (errno === 0 && goods) {
          this.list = goods
        }
      } catch (_e) {
        this.list = null
      }
    },
    selectMenu(index) {
      this.$refs.foods.scrollToElement(this.$refs.food[index], 200)
      this.activeIndex = index
    },
    // 减少
    increase(id, index, e) {
      if (this.list[id]['foods'][index].count) {
        this.list[id]['foods'][index].count++
      } else {
        // 动态添加响应式数据
        Vue.set(this.list[id]['foods'][index], 'count', 1)
      }
      this.$refs.shopCar.drop(e)
    },
    // 添加
    decrease(id, index) {
      if (this.list[id]['foods'][index].count) {
        this.list[id]['foods'][index].count--
      }
    }
    // lazyImg() {
    //   const observer = new IntersectionObserver((entries, observer) => {
    //     console.log(entries, observer)
    //   })
    //   this.$refs.imgDom.forEach((el) => {
    //     observer.observe(el)
    //   })
    //   // observer()
    // }
  }
}
</script>
<style scoped>
.goods-wrapper {
  height: 100%;
  position: relative;
}
.goods-wrapper .goods {
  position: absolute;
  top: 0;
  bottom: 48px;
  left: 0;
  width: 100%;
}
.goods {
  display: flex;
}
.goods .foods-wrapper {
  flex: 1;
  overflow: hidden;
}
.foods-wrapper .title {
  background: #f3f5f7;
  border-left: 2px solid #d9dde1;
  color: #666;
  font-size: 12px;
  height: 26px;
  line-height: 26px;
  padding-left: 14px;
}
.foods-items .foods-item {
  position: relative;
  margin: 18px;
  padding-bottom: 18px;
  display: flex;
}
.foods-item .icon {
  flex: 0 0 57px;
  margin-right: 10px;
}
.foods-item .container {
  flex: 1;
}
.foods-item .container .name {
  font-size: 14px;
  color: #333;
}
.foods-item .container .extra span {
  font-size: 10px;
  color: #999;
  padding-right: 8px;
}
.foods-item .container .description {
  font-size: 10px;
  color: #999;
}
.foods-item .container .price .now {
  font-size: 14px;
  color: #f01414;
  margin-right: 8px;
}
.foods-item .container .price .old {
  font-size: 10px;
  color: #999;
}
.foods-item .container .cart-control-wrapper {
  position: absolute;
  bottom: 12px;
  right: 0;
}
.goods .menu-wrapper {
  overflow: hidden;
  flex: 0 0 80px;
}
.menu-items .menu-item {
  padding: 0 10px;
  background: #f3f5f7;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.menu-items .active-menu-item {
  background: #fff;
}
.menu-item span {
  font-size: 12px;
  color: #666;
}
.active-menu-item span {
  color: #333;
}
.goods-wrapper .shop-car-wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 48px;
  width: 100%;
}
</style>
