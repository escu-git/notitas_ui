import { Button } from "@mui/material"
import { FC, useEffect, useState } from "react"
import { UserLogged } from "../../../context/UserContext";

interface Props{
    userLogged:UserLogged,
    googleSignIn:()=>void,
    googleSignOut:()=>void
}

const LogButton: FC<Props> =  ({userLogged, googleSignIn, googleSignOut}) => {
    const[logged, setLogged]=useState(false);

    useEffect(()=>{
        setLogged(userLogged.username !== '');
    },[userLogged])

    return(
        <Button onClick={logged? googleSignOut : googleSignIn}>{logged?'Logout': 'Login'}</Button>
    )
}

export default LogButton;