import { createStore } from 'vuex';
import authModule from './auth';
import productsModule from './products';
import cartModule from './cart';

const store = createStore({
  modules: {
    auth: authModule,
    products: productsModule,
    cart: cartModule
  },
  state() {
    return {
      temp: false,
    };
  },
});

export default store;
