import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import userReducer from "./user/userSlice";
export default configureStore({
    reducer: {
        counter: counterReducer,
        users: userReducer,
    }
});