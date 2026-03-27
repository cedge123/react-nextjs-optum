import {configureStore, combineReducers} from '@reduxjs/toolkit';

import {counterReducer} from './counterReducer';

const reducers = combineReducers({

    counter: counterReducer
})


// create the store
export const store = configureStore({
    reducer: reducers,
    devTools: true,
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

