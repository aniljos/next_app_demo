export interface AuthState{
    isAuthenticated: boolean;
    accessToken: string;
    refreshToken: string;
    userName: string;
}

const initState: AuthState= {
    isAuthenticated: false,
    accessToken: "",
    refreshToken: "",
    userName: ""
}
interface AuthAction{
    type: string;
    payload: AuthState
}


export const authReducer = (currentState=initState, action:AuthAction)=>{

    if(action.type === "SET"){
        return action.payload;
    }
    if(action.type === "RESET"){
        return initState;
    }

    return currentState;
}