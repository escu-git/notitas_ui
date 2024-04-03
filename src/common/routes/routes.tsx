import { createBrowserRouter } from 'react-router-dom'
import NotFound from '@src/common/components/NotFound'
import MainContainer from '@src/common/components/MainContainer/MainContainer'
import NotesView from '@src/modules/notes/NotesView'
import PrivateRoute from '../components/auth/PrivateRoute'
import Header from '@src/common/components/Header/Header'
import LoginCallback from '../components/auth/LoginCallback'

//Routes provided to app router:
export const routes = createBrowserRouter([
    {
        path: '/',
        element: <PrivateRoute element={<MainContainer />} />,
        children: [
            {
                element: <NotesView />,
                path: '/',
            },
        ],
        errorElement: <NotFound />,
    },
    {
        path: 'login',
        element: <Header title={'Notitas App'} setHeaderHeight={() => {}} />,
    },
    {
        path: 'auth/callback',
        element: <LoginCallback />,
    },
])
