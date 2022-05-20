import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import userReducer from "./user/userSlice";
import shoppingCartReducer from "./shopping-cart/shopping-cart-slice";
export default configureStore({
    reducer: {
        counter: counterReducer,
        users: userReducer,
        shoppingCart: shoppingCartReducer
    }
});