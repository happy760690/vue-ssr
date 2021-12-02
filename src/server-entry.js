import createApp from  './main.js'

// The server call generates a new Vue instance
export default () => { 
  const { app } = createApp()
  return app
}