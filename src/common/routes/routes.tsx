import { createBrowserRouter } from "react-router-dom";
import SignIn from "@src/modules/auth/SignIn";
import NotFound from "@src/common/components/NotFound";
import MainContainer from "@src/common/components/MainContainer/MainContainer";
import NotesView from "@src/modules/notes/NotesView";

//Routes provided to app router:
export const routes = createBrowserRouter(
    [
        {
            path:'/',
            element: <MainContainer/>,
            children:
            [
                {
                    element: <NotesView/>,
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