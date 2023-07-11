
import axios from 'axios'

export const getAllProducts = () => async dispatch => {
    try {
        dispatch({ type: 'allProductsRequest' });

        const { data } = await axios.get('http://localhost:5000/products')

        dispatch({ type: 'allProductsSuccess', payload: data.products })

    } catch (error) {
        dispatch({
            type: 'allProductsFail',
            payload: error.response.data.message,
        })
    }
}