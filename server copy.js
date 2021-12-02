const Koa = require('koa')
const Router = require('koa-router')
const Static = require('koa-static')
const Vue = require('vue')
const fs = require('fs')
const path = require('path')
const VueServerRender = require('vue-server-renderer')

const app = new Koa({})
const router = new Router()

// Create a renderer
const template = fs.readFileSync(path.join(__dirname, './template.html'), 'utf8')
const render = VueServerRender.createRenderer({
    template: template,
})

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