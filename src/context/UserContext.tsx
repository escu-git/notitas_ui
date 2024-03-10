import { Dispatch, FC, ReactNode, SetStateAction, createContext, useState } from "react";

export interface UserLogged {
    _id: number,
    displayName:string,
    name:string,
    surname:string,
    email:string,
    language:string,
    picture:string,
    accountType:string,
    accountId:number
}

export interface isLogged {
    isLogged:boolean,
    setIsLogged:() => Dispatch<SetStateAction<boolean>>
}


interface ProviderData{
    userLogged: UserLogged,
    setUserLogged: Dispatch<SetStateAction<UserLogged>>,
    isLogged: boolean,
    setIsLogged: Dispatch<SetStateAction<boolean>>
}
interface Props{
    children: ReactNode
}

const defaultState: { userLogged: UserLogged } = {
    userLogged: {
        _id: 0,
        displayName: '',
        name: '',
        surname: '',
        email: '',
        language: '',
        picture: '',
        accountType: '',
        accountId: 0
    }
};

const defaultIsLogged: {isLogged: boolean} = {
    isLogged:false
}

export const UserContext = createContext<ProviderData>({userLogged: defaultState.userLogged, setUserLogged:()=>{}, isLogged: defaultIsLogged.isLogged, setIsLogged:()=>{}});

const UserProvider : FC<Props> = ({children})=>{
    const [userLogged, setUserLogged] = useState(defaultState.userLogged);
    const [isLogged, setIsLogged] = useState(defaultIsLogged.isLogged);
    return (
        <UserContext.Provider
        value={{
            userLogged,
            setUserLogged,
            isLogged,
            setIsLogged
        }}
        >{children}</UserContext.Provider>
    )
}

export default UserProvider;