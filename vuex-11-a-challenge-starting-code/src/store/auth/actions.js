const authActions = {
  login(context){
    context.commit('setAuth',{isAuth: true})
    console.log(context.rootState)
  },
  logout(context){
    context.commit('setAuth',{isAuth: false})
  }
}

export default authActions