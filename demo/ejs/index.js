const Koa = require('koa')
const views = require('koa-views')
const path = require('path')
const app = new Koa()

/*koa-views
* @param 加载的资源路径（不包含扩展名）
*
*/

console.log(path.join(__dirname, './view'));
app.use(views(path.join(__dirname, './view'), {
    extension: 'jade'
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

