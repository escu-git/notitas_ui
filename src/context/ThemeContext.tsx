import {
    FC,
    createContext,
    ReactNode,
    useState,
    Dispatch,
    SetStateAction,
} from 'react'

interface ThemeContextData {
    dark: boolean
    setDark: Dispatch<SetStateAction<boolean>>
}

interface Props {
    children: ReactNode
}

const defaultValues = {
    dark: false,
    setDark: () => {},
}

const ThemeContext = createContext<ThemeContextData>(defaultValues)

const ThemeProvider: FC<Props> = ({ children }) => {
    const [dark, setDark] = useState(defaultValues.dark)

    return (
        <ThemeContext.Provider
            value={{
                dark,
                setDark,
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
