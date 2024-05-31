import { UserAuthContext } from "../store/UserAuthContext";
import { useContext } from "react";

export const useUserAuthContext = ()=>{
    const context = useContext(UserAuthContext)

    if (!context){
        throw Error('useUserAuthContext must be used inside an UserAuthContextProvider')
    }
    return context
}