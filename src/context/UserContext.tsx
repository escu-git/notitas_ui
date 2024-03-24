import { Dispatch, FC, ReactNode, SetStateAction, createContext, useEffect, useRef, useState } from "react";

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
    setIsLogged: Dispatch<SetStateAction<boolean>>,
    fetchUser: () => void,
    logOutUser: () => void,
    isLoadingUserData: boolean,
    logged: React.MutableRefObject<boolean>
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

const defaultLoadingUserData:{isLoadingUserData:boolean} ={
    isLoadingUserData:true
}

export const UserContext = createContext<ProviderData>(
    {
        userLogged: defaultState.userLogged, 
        setUserLogged:()=>{}, 
        isLogged: defaultIsLogged.isLogged, 
        setIsLogged:()=>{}, 
        fetchUser:()=>{},
        logOutUser:()=>{},
        isLoadingUserData: defaultLoadingUserData.isLoadingUserData,
        logged: {current: false}
    });

const UserProvider : FC<Props> = ({children})=>{
    const [userLogged, setUserLogged] = useState(defaultState.userLogged);
    const [isLogged, setIsLogged] = useState(defaultIsLogged.isLogged);
    const[isLoadingUserData, setIsLoadingUserData]=useState(defaultLoadingUserData.isLoadingUserData);
    const logged = useRef<boolean>(false)

    const fetchUser = () =>{
        try{
            if(!logged.current){
                setIsLoadingUserData(true)
                fetch(`${import.meta.env.VITE_API_URL}/auth/currentUser`,{
                    method: "GET",
                    credentials: "include",
                  })
                .then(res=>res.json())
                .then(data=>{
                    if(!data.error){
                        logged.current = true
                        setUserLogged(data.user)
                        setIsLogged(true)
                        setIsLoadingUserData(false)
                    }
                })
            }else{
                setIsLoadingUserData(false)
            }
        }catch(err){
            console.error(err)
        }
    }
    const logOutUser = ()=>{
        fetch(`${import.meta.env.VITE_API_URL}/auth/logout`, { 
            method: 'GET', credentials: 'include', redirect:'follow'
        })
        .then(function(response) {
            if(response.status == 200){
                setIsLogged(defaultIsLogged.isLogged);
                setUserLogged(defaultState.userLogged);
                logged.current = false;
            }
        }).catch(function(err) {
            console.error(err);
        });
    }

    return (
        <UserContext.Provider
        value={{
            userLogged,
            setUserLogged,
            isLogged,
            setIsLogged,
            fetchUser,
            logOutUser,
            isLoadingUserData,
            logged
        }}
        >{children}</UserContext.Provider>
    )
}

export default UserProvider;