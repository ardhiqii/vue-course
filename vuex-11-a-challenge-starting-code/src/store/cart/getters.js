const cartGetters = {
  allItems(state){
    return state.items
  },
  totalPrice(state){
    return state.total.toFixed(2)
  },
  totalQuantity(state){
    return state.qty
  }
}

export default cartGetters