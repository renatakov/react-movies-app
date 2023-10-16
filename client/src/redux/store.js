import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './users'

const store = configureStore ({
    reducer: {
        users: UserReducer
    }
})

export default store