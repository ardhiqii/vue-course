import authActions from "./actions"
import authGetters from "./getters"
import authMutations from "./mutations"

const authModule = {
  namespaced: true,
  state(){
    return{
      isLoggedIn: false,
    }
  },
  mutations: authMutations,
  actions: authActions,
  getters: authGetters,
}

export default authModule