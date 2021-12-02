import createApp from  './main.js'

// The server call generates a new Vue instance
export default (context) => { 
  // The server will execute this method
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp()
    router.push(context.url) // Render the specified page
    // Problems involving asynchronous components
    router.onReady(()=> { // If the route is executed successfully
      // Gets the matching path to which the current jump is made
      let matchs = router.getMatchedComponents() 
      if(matchs.length === 0){
        reject({code: 404})
      } 
      Promise.all(matchs.map(component => {
        if(component.asyncData) {
          return component.asyncData(store)
        }
      })).then(() => {
        // The method in promise.all changes the value in store
        // Mount the state in vuex to the content context, so that the state will be mounted to the window
        context.state = store.state 
        resolve(app)
      })
    },reject)
  })
}