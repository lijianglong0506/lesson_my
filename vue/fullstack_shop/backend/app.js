const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const cors = require('koa2-cors');

const index = require('./routes/index');
const users = require('./routes/users');

app.use(cors());
// 错误处理
onerror(app);

app.use(bodyparser({
    enableTypes:['json', 'form', 'text']
}))

app.use(json())
// 
app.use(logger())
// 静态资源
app.use(require('koa-static')(__dirname + '/public'));
app.use(views(__dirname + '/views', {
    extension: 'ejs'
}))

app.use(async (ctx, next) => {

    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
})

app.listen(3000, () => {
    console.log('服务器启动了');

})