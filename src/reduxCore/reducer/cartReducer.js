import { createAction, createReducer } from '@reduxjs/toolkit';

const CART_KEY = 'cartList';
const initCartState = {
    items: JSON.parse(localStorage.getItem(CART_KEY)) ?? [],
    itemCounter: JSON.parse(localStorage.getItem(CART_KEY)) ? JSON.parse(localStorage.getItem(CART_KEY)).length : 0,
};

export const addCartItem = createAction('cart/addItem');
export const deleteCartItem = createAction('cart/deleteItem');

const cartReducer = createReducer(initCartState, (builder) => {
    builder
        .addCase(addCartItem, (state, action) => {
            const isExist = state.items.find(
                (product) => product.id === action.payload.id && product.size === action.payload.size,
            );
            if (isExist) {
                const idx = state.items.findIndex(
                    (product) => product.id === action.payload.id && product.size === action.payload.size,
                );
                state.items[idx].numberOfItem += 1;
            } else {
                state.items = [action.payload, ...state.items];
                state.itemCounter += 1;
                localStorage.setItem(CART_KEY, JSON.stringify([...state.items]));
            }
        })
        .addCase(deleteCartItem, (state, action) => {
            const productIndex = state.items.findIndex(
                (item) => item.id === action.payload.id && item.size === action.payload.size,
            );
            state.items.splice(productIndex, 1);
            state.itemCounter -= 1;
            localStorage.setItem(CART_KEY, JSON.stringify([...state.items]));
        });
});
export default cartReducer;
