import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    param:[]
  },
  mutations: {
    addNum(state,params){
      state.param.push(params) 
    }
  },
  actions: {
  },
  modules: {
  }
})
