
import axios from 'axios'
import { server } from '../store';

export const getAllProducts = () => async dispatch => {
    try {
        dispatch({ type: 'allProductsRequest' });

        const { data } = await axios.get(`${server}/products`)

        dispatch({ type: 'allProductsSuccess', payload: data.products })

    } catch (error) {
        dispatch({
            type: 'allProductsFail',
            payload: error.response.data.message,
        })
    }
}

export const getProducts = id => async dispatch => {
    try {
        dispatch({
            type: 'getProductRequest'
        });
        const { data } = await axios.get(`${server}/product/${id}`, {
            withCredentials: true,
        })

        dispatch({ type: 'getProductSuccess', payload: data.product })
    } catch (error) {
        dispatch({
            type: 'getProductFail',
            payload: error.response.data.message,
        })
    }
}