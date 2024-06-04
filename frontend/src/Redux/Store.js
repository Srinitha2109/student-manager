import {configureStore} from '@reduxjs/toolkit'
import userLoginReducer from './Slices/userLoginSlice'

export const store = configureStore({
    //providing the store with the root reducers
    reducer: {
        allUserLoginReducer: userLoginReducer,
    }
})