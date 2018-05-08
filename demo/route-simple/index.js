const Koa = require('koa')
const fs = require('fs')
const app = new Koa()

/**
 * 用Promise封装异步读取文件方法
 * @param  {string} page html文件名称
 * @return {promise}
 */
const render = page =>
    new Promise((resolve, reject) => {
        let viewUrl = `./view/${page}`
        fs.readFile(viewUrl, "binary", (err, data) => {
            err ? reject(err) : resolve(data)
        })
    });


/**
 * 根据URL获取HTML内容
 * @param  {string} url koa2上下文的url，ctx.url
 * @return {string}     获取HTML文件内容
 */
const route = url => {
    let view = '';
    switch (url) {
        case '/':
            view = 'index.html'
            break

        case '/index':
            view = 'index.html'
            break
        case 'todo':
            view = 'todo.html'
            break
        default:
            view = '404.html'
            break
    }

}

// app.use(fn)  相当于加载时执行的函数，执行结束后才继续向下执行
app.use(async ctx => {
    let url = ctx.request.url
    let html = await route(url)
    ctx.body = html
})

app.listen(3000, () => {
    console.log('[demo] route-simple is starting at port 3000')
})

