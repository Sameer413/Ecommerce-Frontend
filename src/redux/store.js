import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './reducer/ProductReducer';

const store = configureStore({
    reducer: {
        product: productsReducer
    }
});

export default store;