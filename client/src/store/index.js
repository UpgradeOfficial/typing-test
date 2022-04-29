import { configureStore } from "@reduxjs/toolkit";
import authActions from "./auth-slice";
import errorSlice from "./error-slice";
import itemSlice from "./item-slice";


const store= configureStore({
    reducer: {
        item: itemSlice.reducer,
        auth: authActions.reducer,
        error: errorSlice.reducer
    }
})

export default store