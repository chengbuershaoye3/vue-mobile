import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    param:JSON.parse(localStorage.getItem('car'))
  },
  mutations: {
    addNum(state,params){
      // console.log('123')
      if(state.param==null){
        state.param=[]
      }
      state.param.push(params)
      localStorage.setItem('car',JSON.stringify(state.param))
    },
    changeNum(state,changegoods){
      console.log(state.param)
      console.log(changegoods)
      const index = state.param.findIndex(x=>x.id==changegoods.id)
      console.log(index)
      if(index !== -1){
        state.param[index].num = changegoods.num
      }
      console.log(state.param)
      window.localStorage.setItem('car',JSON.stringify(state.param))

    }
  },
  actions: {
  },
  modules: {
  }
})
