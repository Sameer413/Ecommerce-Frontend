import { createReducer } from "@reduxjs/toolkit";

export const productsReducer = createReducer(
    { products: [] },
    {
        allProductsRequest: state => {
            state.loading = true;
        },
        allProductsSuccess: (state, action) => {
            state.loading = false;
            state.products = action.payload;
        },
        allProductsFail: (state, action) => {
            state.loading = false;
            state.error = action.payload
        }
    }
)