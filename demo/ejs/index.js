const Koa = require('koa')
const views = require('koa-views')
const path = require('path')
const app = new Koa()

//koa-views 不支持自定义扩展名，这里必须为 ejs
app.use(views(path.join(__dirname, './view'), {
    extension: 'ejs' //
}))

app.use(async ctx => {
    let title = 'hello koa2'
    await ctx.render('index', {
        title,
    })
})

app.listen(3000, () => {
    console.log('[demo] ejs is starting at port 3000')
})

