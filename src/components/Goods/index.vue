<template>
  <div class="goods-wrapper">
    <!-- goods -->
    <div class="goods">
      <EleScroll ref="menus" class="menu-wrapper" :data="list">
        <div class="menu-items">
          <div
            v-for="(it, index) in list"
            :key="index"
            ref="menu"
            class="menu-item"
            :class="[currentIndex === index ? 'active-menu-item' : '']"
            @click="selectMenu(index, $event)"
          >
            <span>{{ it.name }}</span>
          </div>
        </div>
      </EleScroll>
      <EleScroll ref="foods" class="foods-wrapper" :data="list" :listen-scroll="true" @scroll="scroll">
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
      currentIndex: 0,
      list: [],
      scrollY: 0,
      foodsCalcu: [],
      meunList: []
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
    // currentIndex() {
    //   for (let i = 0; i < this.foodsCalcu.length; i++) {
    //     const height1 = this.foodsCalcu[i]
    //     const height2 = this.foodsCalcu[i + 1]
    //     if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
    //       this.$refs.menus.scrollToElement(this.$refs.menu[i], 200)
    //       return i
    //     }
    //   }
    //   return 0
    // }
  },
  async mounted() {
    await this.fetchData()
    this.initFoodsCalcu()
  },
  activated() {
    console.log('keep激活了')
  },
  deactivated() {
    console.log('keep离开了')
  },
  methods: {
    /**
     * foods区域滚动时返回的滚动信息
     * 用来实现menus区域的滚动和高亮
     */
    scroll(e) {
      // Math.abs 负数转为正数  Math.abs 四舍五入取整
      this.scrollY = Math.abs(Math.round(e.y))
      this.handleContentScroll()
    },
    handleContentScroll() {
      const index = this.foodsCalcu.findIndex((top, i) => {
        return this.scrollY >= top && this.scrollY < (this.foodsCalcu[i + 1] || Infinity)
      })
      if (index !== -1 && index !== this.currentIndex) {
        this.currentIndex = index
        this.$refs.menus.scrollToElement(this.$refs.menu[index], 200)
      }
    },
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
    selectMenu(index, event) {
      if (!event._constructed) {
        // 过滤掉原生的js点击事件（原生的js点击事件没有_constructed属性）
        return
      }
      this.currentIndex = index
      this.$refs.foods.scrollToElement(this.$refs.food[index], 200)
    },
    initFoodsCalcu() {
      this.$nextTick(() => {
        const foodlist = this.$refs.food
        this.meunList = this.$refs.menu
        let height = 0
        this.foodsCalcu.push(height)
        foodlist.forEach((el) => {
          height += el.clientHeight
          this.foodsCalcu.push(height)
        })
      })
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
  }
}
</script>
<style scoped>
.goods-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
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
  position: relative;
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
  margin: 2px 0 8px;
}
.foods-item .container .extra span {
  font-size: 10px;
  color: #999;
  padding-right: 8px;
}
.foods-item .container .description {
  font-size: 12px;
  color: #999;
  margin-bottom: 8px;
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
  width: 80px;
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
