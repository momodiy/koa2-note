const Koa = require('koa')
const views = require('koa-views')
const path = require('path')
const static = require('koa-static')
const {uploadFile} = require('./util/upload')

const app = new Koa()


/**
 * 使用第三方中间件 start
 * ejs 模板引擎
 */
app.use(views(path.join(__dirname, './view'), {
    extension: 'ejs'
}))

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './static'

app.use(static(
    path.join(__dirname, staticPath)
))
/**
 * 使用第三方中间件 end
 */


app.use(async ctx => {
    if (ctx.method === 'GET') {
        let title = 'upload pic async'
        await ctx.render('index', {
            title,
        })
    } else if (ctx.url === '/api/picture/upload.json' && ctx.method === 'POST') {
        // 上传文件请求处理
        let serverFilePath = path.join(__dirname, 'static/image')

        // 上传文件事件
        let result = await uploadFile(ctx, {
            fileType: 'steven',
            path: serverFilePath
        })
        ctx.body = result
    } else {
        // 其他请求显示404
        ctx.body = '<h1>404！！！ o(╯□╰)o</h1>'
    }

})


app.listen(3000, () => {
    console.log('[demo] upload-pic-async is starting at port 3000')
})

