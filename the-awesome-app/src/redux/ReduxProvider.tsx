'use client'

import { Provider } from "react-redux";
import { store } from "@/redux/store";
import {JSX} from 'react'

type ReduxProviderPros = {
    children:JSX.Element
}
export default function ReduxProvider(props:ReduxProviderPros){
    return (
        <Provider store={store}>
              {props.children}
        </Provider>
    )
}