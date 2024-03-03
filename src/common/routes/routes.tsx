import { createBrowserRouter } from "react-router-dom";
import SignIn from "../../modules/auth/SignIn";
import NotFound from "../components/NotFound";
import Home from "../../modules/home/Home";
import MainContainer from "../components/MainContainer/MainContainer";

//Routes provided to app router:
export const routes = createBrowserRouter(
    [
        {
            path:'/',
            element: <MainContainer/>,
            children:
            [
                {
                    element:<Home/>,
                    path:''

                },
                {
                    path:'login',
                    element:<SignIn/>
                },
            ],
            errorElement:<NotFound/>
        },
       
    ]
)