import { createSlice } from "@reduxjs/toolkit";

export const shoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState: {
        shoppingCart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.shoppingCart = action.payload;
        },
        removeFromCart: (state, action) => {
            state.shoppingCart.splice(action.payload, 1);
        }
    }
});

export const {addToCart, removeFromCart} = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
