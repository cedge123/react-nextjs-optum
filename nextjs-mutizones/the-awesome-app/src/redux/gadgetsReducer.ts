import { CartItem } from "@/model/CartItem";
import { Product } from "@/model/Product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type GadgetsState = {
    cart: CartItem[]
}

const initialState: GadgetsState = {
    cart: []
}
export type GadgetsAction = {
    type: string;
    payload?: CartItem;
    product?: Product;

}


//Action: {type:"removeItem", product: Product}
// Action: {type: "clearcart"}
// export const gadgetsReducer= (currentState=initialState, action: GadgetsAction)=> {
    
//     //Action: {type:"addtocart", payload: CartItem}
//     if(action.type === "addtocart" && action.payload){

//         //currentState.cart.push(action.payload);
//         const cart = [...currentState.cart];
//         cart.push(action.payload);
//         return {
//             ...currentState,
//             cart
//         }
//     }

//     return currentState;
// }

const slice = createSlice({
    initialState, 
    name: "gadgets",
    reducers: {

        addToCart: (currentState, action: PayloadAction<CartItem>) => {

            currentState.cart.push(action.payload);
        },
        removeItem: (currentState, action: PayloadAction<Product>) => {

            const index = currentState.cart.findIndex(item => item.product.id === action.payload.id);
            if(index != -1){
                currentState.cart.splice(index, 1);
            }
        },
    }
});

//action creators
export const {addToCart, removeItem} = slice.actions;
export const gadgetsReducer = slice.reducer;