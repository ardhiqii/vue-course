import cartGetters from "./getters"

const cartModule ={
  namespaced: true,
  state(){
    return{
      items:[],
      total: 0,
      qty: 0,
    }
  },
  getters: cartGetters
}

export default cartModule