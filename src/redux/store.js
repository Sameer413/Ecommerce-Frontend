import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './reducer/ProductReducer';
import { userReducer } from './reducer/UserReducer';

const store = configureStore({
    reducer: {
        user: userReducer,
        product: productsReducer
    }
});

export default store;

export const server = "http://localhost:5000"