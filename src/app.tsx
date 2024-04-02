import { RouterProvider } from 'react-router-dom'
import { routes } from './common/routes/routes'
import ThemeProvider from './context/ThemeContext'
import UserProvider from './context/UserContext'

const App = () => {
    return (
        <UserProvider>
            <ThemeProvider>
                <RouterProvider router={routes} />
            </ThemeProvider>
        </UserProvider>
    )
}

export default App
