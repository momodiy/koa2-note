const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')

/*
* 使用ctx.body解析中间件
* 在koa中不便直接获取的，通过解析，在koa中this.body就能直接获取到数据
* ctx.request.body默认为undefined
* 在这里用于解析form表单post发送的数据
* */
app.use(bodyParser())

app.use(async ctx => {

    if (ctx.url === '/' && ctx.method === 'GET') {
        // 当GET请求时候返回表单页面
        let html = `
      <h1>koa2 request post demo</h1>
      <form method="POST" action="/">
        <p>userName</p>
        <input name="userName" /><br/>
        <p>nickName</p>
        <input name="nickName" /><br/>
        <p>email</p>
        <input name="email" /><br/>
        <button type="submit">submit</button>
      </form>
    `
        ctx.body = html
    } else if (ctx.url === '/' && ctx.method === 'POST') {
        // 当POST请求的时候，中间件koa-bodyparser解析POST表单里的数据，并显示出来
        console.log(ctx.request);
        console.log(222);
        console.log(ctx.request.body);
        let postData = ctx.request.body
        ctx.body = postData
    } else {
        // 其他请求显示404
        ctx.body = '<h1>404！！！ o(╯□╰)o</h1>'
    }
})

app.listen(3000, () => {
    console.log('[demo] request post is starting at port 3000')
})

