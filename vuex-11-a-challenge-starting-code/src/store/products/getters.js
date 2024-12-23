const productsGetters = {
  allProducts(state){
    return state.products
  },
  productById(state){
    return (id)=>{
      return state.products.find(product => product.id === id)
    }
  }
}

export default productsGetters