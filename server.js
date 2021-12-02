const Koa = require('koa')
const Router = require('koa-router')
const Static = require('koa-static')
const Vue = require('vue')
const fs = require('fs')
const static = require('koa-static')
const path = require('path')
const VueServerRender = require('vue-server-renderer')

const app = new Koa({})
const router = new Router()

const template = fs.readFileSync(path.join(__dirname, './dist/index.ssr.html'), 'utf8')
const ServerBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')
const render = VueServerRender.createBundleRenderer(ServerBundle, { 
    template,
    clientManifest
}) // Render packaged results

router.get('/', async ctx => {
    // ctx.body = await render.renderToString() // css doesn't work
    ctx.body = await new Promise((resolve, reject) => { // Must be written as a callback function
        render.renderToString({url: '/'},(err, data) => {
            if(err) reject(err)
            resolve(data)
        })
    })
})

app.use(router.routes());
app.use(static(path.resolve(__dirname, 'dist')));
// If the server does not have this path, the current home page will be rendered
app.use(async ctx => { // This logic is executed if no match is found
    try{
        ctx.body = await new Promise((resolve, reject) => { // Must be written as a callback function
            render.renderToString({url: ctx.url},(err, data) => {
                // console.log(err, 'cuocuocuccucucucuu')
                if(err) reject(err)
                resolve(data)
            })
        })
    }catch(e){
        console.log(e)
        ctx.body = '404'
    }
    
})
app.listen(3000) 