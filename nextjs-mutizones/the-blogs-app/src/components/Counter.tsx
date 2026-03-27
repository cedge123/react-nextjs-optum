'use client'



import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "@/redux/store";
import {increment, decrement} from '@/redux/counterReducer';

export function Counter() {

    //let counter = props.initialValue;
    const count = useSelector((state: AppState) => state.counter.count);
    const dispatch = useDispatch<AppDispatch>();
   

    function inc() {

        dispatch(increment());
        
    }

    function decr() {
         dispatch(decrement());
    }
    return (
        <div>
            <h4>Counter : {count}</h4>
            <div>
                <button onClick={inc}>Inc</button> &nbsp;
                <button onClick={decr}>Decr</button>
            </div>
            
        </div>
    )
}