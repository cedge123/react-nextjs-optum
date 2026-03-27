export type AuthState = {
    isAuthenticated: boolean;
    username: string;
    accessToken: string;
    refreshToken: string
}
export type AuthAction = {
    type: string,
    payload?: AuthState
}

const initialState: AuthState = {
    isAuthenticated: false,
    username: "",
    accessToken: "",
    refreshToken: ""
}

//Login Action {type: "login", payload: AuthState}
//Logout Action {type: "logout"} 
export const authReducer = (currentState=initialState, action: AuthAction) => {

    console.log("authReducer", action);
    if(action.type === "login" && action.payload){

        return action.payload;
    }
    if(action.type === "logout"){
        return initialState;
    }


    //return the updated state
    return currentState;

}