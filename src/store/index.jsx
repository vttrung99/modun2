import { configureStore } from "@reduxjs/toolkit";
import cartsReducer from './cartslice'

import userLoginReducer from './userLoginStore'

const store = configureStore(
    {
        reducer: {
            cartsLocalStore: cartsReducer,
            userLoginStore: userLoginReducer
        }
    }
)

export default store