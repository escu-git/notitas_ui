import { createBrowserRouter } from "react-router-dom";
import Header from "../components/Header/Header";
import SignIn from "../../modules/auth/SignIn";
import NotFound from "../components/NotFound";
import Home from "../../modules/home/Home";

//Routes provided to app router:
export const routes = createBrowserRouter(
    [
        {
            path:'/',
            element: <Header title={'Notitas app'}/>,
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