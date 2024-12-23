import { createStore } from 'vuex';
import authModule from './auth';
import productsModule from './products';

const store = createStore({
  modules: {
    auth: authModule,
    products: productsModule
  },
  state() {
    return {
      temp: false,
    };
  },
});

export default store;
