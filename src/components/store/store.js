import { configureStore, combineReducers } from '@reduxjs/toolkit'
import usersReducer from './reducer'
import reducerList from './reducerList'

 const rootReducer = combineReducers({
    collaboratersList: reducerList,
    user: usersReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})