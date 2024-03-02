import { Dispatch, FC, ReactNode, SetStateAction, createContext, useState } from "react";

export interface UserLogged {
    username: string,
    id: string,
    email: string,
    picture: string,
    locale: string
}

interface ProviderData{
    userLogged: UserLogged,
    setUserLogged: Dispatch<SetStateAction<UserLogged>>
}
interface Props{
    children: ReactNode
}

const defaultState = {
    userLogged: {
        username: '',
        id: '',
        email: '',
        picture: '',
        locale: ''
    }
};

export const UserContext = createContext<ProviderData>({userLogged: defaultState.userLogged, setUserLogged:()=>{}});

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