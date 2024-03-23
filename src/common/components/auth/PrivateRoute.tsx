import { UserContext } from "@src/context/UserContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

interface privateRouteProps{
    element: JSX.Element,
}
const PrivateRoute = ({element}: privateRouteProps) => {
    const { userLogged } = useContext(UserContext);
    console.log(userLogged)
    return userLogged.email? (
        <div>
            {element}
        </div>
    ) : <Navigate to='/login' replace/>
}

export default PrivateRoute;