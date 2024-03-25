import { UserContext } from "@src/context/UserContext";
import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import LoadingSpinner from "../Loading/LoadingSpinner";

interface privateRouteProps{
    element: JSX.Element,
}
const PrivateRoute = ({element}: privateRouteProps) => {
    const { isLoadingUserData, fetchUser, isLogged } = useContext(UserContext);

    useEffect(()=>{
        fetchUser()
    },[])

    if(isLoadingUserData)
        return <LoadingSpinner/>

    return  isLogged ? (
        <div>
            {element}
        </div>
    ) : <Navigate to='/login' replace/>
}

export default PrivateRoute;