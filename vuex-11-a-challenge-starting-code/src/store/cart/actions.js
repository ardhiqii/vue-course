const cartActions = {
  addToCart({ commit }, payload) {
    commit('addToCart', { productData: payload.productData });
  },
  removeProduct({ commit }, payload) {
    commit('removeProduct', { prodId: payload });
  },
};

export default cartActions;
