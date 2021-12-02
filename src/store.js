import Vue from  'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default () => {
  const store = new Vuex.Store({
    state: {
      name: ''
    },
    mutations: {
      changeName: function(state){
        state.name = 'mingjuan'
      }
    },
    actions: {
      changeName({commit}){
        return new Promise((resolve, reject) => {
          setTimeout(() =>{
            commit('changeName')
            resolve();
          },1000)
        })
      }
    }
  })
  // If it is executed by the browser, update the status according to the new status of the server
  if(typeof window !== 'undefined' && window.__INITIAL_STATE__){
    store.replaceState(window.__INITIAL_STATE__)
  }
  return store;
}