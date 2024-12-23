const authMutations ={
  setAuth(state,payload){
    state.isLoggedIn = payload.isAuth
  }
}

export default authMutations