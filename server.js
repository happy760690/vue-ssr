const Koa = require('koa')
const Router = require('koa-router')
const Static = require('koa-static')
const Vue = require('vue')
const VueServerRender = require('vue-server-renderer')

const app = new Koa({})
const router = new Router()
const render = VueServerRender.createRenderer()

const vm = new Vue({
    data(){
        return {msg: 'hello mingjuan'}
    },
    template:'<div>{{msg}}</div>'
})


router.get('/', async ctx => {
    ctx.body = await render.renderToString(vm)
})



app.use(router.routes());

app.listen(3000)