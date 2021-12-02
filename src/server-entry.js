import createApp from  './main.js'

// The server call generates a new Vue instance
export default (context) => { 
  // The server will execute this method
  const { app, router } = createApp()
  router.push(context.url) // Render the specified page
  return app
}