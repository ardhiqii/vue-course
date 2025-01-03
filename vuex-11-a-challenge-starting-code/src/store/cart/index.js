import cartActions from "./actions"
import cartGetters from "./getters"
import cartMutations from "./mutations"

const cartModule ={
  namespaced: true,
  state(){
    return{
      items:[],
      total: 0,
      qty: 0,
    }
  },
  getters: cartGetters,
  mutations: cartMutations,
  actions: cartActions
}

export default cartModule