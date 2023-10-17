import { configureStore } from "@reduxjs/toolkit";
import SearchReducer from './Slice'
import SingleReducer from "./Slice"
import categoryReducer from "./Slice"

const store= configureStore({
    reducer:{
        Search:SearchReducer,
        Single:SingleReducer,
        cata:categoryReducer
    }
})

export default store