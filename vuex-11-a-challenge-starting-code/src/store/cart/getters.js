const cartGetters = {
  allItems(state){
    return state.items
  },
  totalPrice(state){
    return state.total
  },
  totalQuantity(state){
    return state.qty
  }
}

export default cartGetters