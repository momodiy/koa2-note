const Koa = require('koa')
const path = require('path')
const static = require('koa-static')

const app = new Koa()

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './static'
// path.join() 方法使用平台特定的分隔符把全部给定的 path 片段连接到一起，并规范化生成的路径。

/*
* static 静态缓存 （dir,option,files）
* 详细配置信息： https://github.com/koajs/static-cache#staticcachedir--options--files
* */

//path.join(__dirname, staticPath) 待访问的静态资源路径
// .../koa2-note/demo/static-use-middleware/static

app.use(static(
    path.join(__dirname, staticPath)
))

app.use(async ctx => {
    ctx.body = 'hello world'
})

app.use(async ctx => {
    console.log(343434);
})

app.listen(3000, () => {
    console.log('[demo] static-use-middleware is starting at port 3000')
})

