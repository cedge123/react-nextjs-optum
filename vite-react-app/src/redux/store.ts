//import { combineReducers, createStore } from 'redux'  // deprected so npm install @reduxjs/toolkit
import { configureStore,combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './authReducer';
import { gadgetsReducer } from './gadgetsReducer';

const reducer = combineReducers({
    auth: authReducer,
    gadgets:gadgetsReducer
})

//old
//export const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//new
export const store = configureStore({reducer,devTools:true})
export type AppState =  ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch