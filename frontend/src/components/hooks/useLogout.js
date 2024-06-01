import { useUserAuthContext } from "./useUserAuthContext"

export const useLogout = () =>{

    const {dispatch} = useUserAuthContext()
    const logout = ()=>{
        //remove user from local storage
        localStorage.removeItem('user')

        //dispatch logout action (sets user to be null)
        dispatch({type: 'LOGOUT'})
    }

    return {logout}
}