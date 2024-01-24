import { Dispatch, FC, ReactNode, SetStateAction, createContext, useState } from "react";

interface ProviderData{
    userLogged: object,
    setUserLogged: Dispatch<SetStateAction<object>>
}
interface Props{
    children: ReactNode
}

const defaultState = {
    userLogged: {},
    setUserLogged: () => {},
};

const UserContext = createContext<ProviderData>(defaultState);

const UserProvider : FC<Props> = ({children})=>{
    const [userLogged, setUserLogged] = useState(defaultState.userLogged);

    return (
        <UserContext.Provider
        value={{
            userLogged,
            setUserLogged
        }}
        >{children}</UserContext.Provider>
    )
}

export default UserProvider;