const { defineConfig } = require('@vue/cli-service')
// const appData = require('./data.json')
// const seller = appData.seller
// const goods = appData.goods
// const ratings = appData.ratings
// const foods = appData.foods
module.exports = defineConfig({
  publicPath:
    process.env.NODE_ENV === 'production'
      ? '/vue-elm/' // 替换为你的仓库名称
      : '/',
  transpileDependencies: true,
  devServer: {
    // 代理请求数据
    // setupMiddlewares: (middlewares, devServer) => {
    //   devServer.app.get('/api/seller', (_req, res) => {
    //     res.json({ errno: 0, data: seller })
    //   })
    //   devServer.app.get('/api/goods', (_req, res) => {
    //     res.json({ errno: 0, data: goods })
    //   })
    //   devServer.app.get('/api/ratings', (_req, res) => {
    //     res.json({ errno: 0, data: ratings })
    //   })
    //   devServer.app.get('/api/foods', (_req, res) => {
    //     res.json({ errno: 0, data: foods })
    //   })
    //   return middlewares
    // }
  }
})
