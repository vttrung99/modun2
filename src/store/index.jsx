import { configureStore } from "@reduxjs/toolkit";


import userLoginReducer from './userLoginStore'

const store = configureStore(
    {
        reducer: {
            
            userLoginStore: userLoginReducer
        }
    }
)

export default store