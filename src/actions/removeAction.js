import { REMOVE_PRODUCT_BASKET } from './types';

export const removeBasket = (productName) => {
    return (dispatch) => {
        console.log("Removing to basket");
        console.log("Product: ", productName);
        dispatch({
            type: REMOVE_PRODUCT_BASKET,
            payload: productName
        })
    }
}