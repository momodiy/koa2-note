const Koa = require('koa')
const app = new Koa()

app.use(async ctx=> {
  //此时的ctx上下文为打开浏览器时发送get请求的相关上下文（包含请求信息与客户端等信息）
    console.log(ctx);
    let url = ctx.url
  
  // 从上下文的request对象中获取
  let request = ctx.request
  let req_query = request.query
  let req_querystring = request.querystring

  // 从上下文中直接获取
  let ctx_query = ctx.query
  let ctx_querystring = ctx.querystring

    //相当于 url:url
  ctx.body = {
    url,
    req_query,
    req_querystring,
    ctx_query,
    ctx_querystring
  }
})

app.listen(3000, () => {
  console.log('[demo] request get is starting at port 3000')
})

