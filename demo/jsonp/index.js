const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {

    console.log(ctx.url);
    console.log(99999);
    console.log(ctx.url === '/getData.jsonp');
    // 如果jsonp 的请求为GET
    if (ctx.method === 'GET' && ctx.url === '/getData.jsonp') {

        // 获取jsonp的callback
        let callbackName = ctx.query.callback || 'callback'
        let returnData = {
            success: true,
            data: {
                text: 'this is a jsonp api',
                time: new Date().getTime(),
            }
        }

        // jsonp的script字符串
        let jsonpStr = `<h1>${callbackName}</h1><br><h3>(${JSON.stringify(returnData)})</h3>`

        // 用text/javascript，让请求支持跨域获取
        ctx.type = 'text/javascript'

        /*
        * 输出jsonp字符串
        * ctx.body 会将其值做为字符串输出
        *
        * */

        ctx.body = jsonpStr

        // ctx.body='<!DOCTYPE html>\n' +
        //     '<html lang="en">\n' +
        //     '<head>\n' +
        //     '    <meta charset="UTF-8">\n' +
        //     '    <title>Title</title>\n' +
        //     '</head>\n' +
        //     '<body>\n' +
        //     '<h1>inter</h1>\n' +
        //     '</body>\n' +
        //     '</html>';
    } else {

        ctx.body = 'hello jsonp'

    }
})

app.listen(3000, () => {
    console.log('[demo] jsonp is starting at port 3000')
})

