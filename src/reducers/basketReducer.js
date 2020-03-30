import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET } from '../actions/types';
const initialState = {
    basketNumbers: 0,
    cartCost: 0,
    products: {
        Strawberries: {
            name: 'Strawberries',
            price: '20',
            numbers: 0,
            inCart: false
        },
        Oranges: {
            name: 'Oranges',
            price: '25',
            numbers: 0,
            inCart: false
        },
        Apples: {
            name: 'Apples',
            price: '15',
            numbers: 0,
            inCart: false
        },
        Grapes: {
            name: 'Grapes',
            price: '24',
            numbers: 0,
            inCart: false
        },
        Blueberries: {
            name: 'Blueberries',
            price: '12',
            numbers: 0,
            inCart: false
        },
        Cherry: {
            name: 'Cherry',
            price: '10',
            numbers: 0,
            inCart: false
        }
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_BASKET:
            let addQuantity = { ...state.products[action.payload] }

            addQuantity.numbers += 1;
            addQuantity.inCart = true;
            console.log(addQuantity);
            return {
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: addQuantity
                }
            }
        case GET_NUMBERS_BASKET:
            return {
                ...state,

            }
        default:
            return state;
    }
}