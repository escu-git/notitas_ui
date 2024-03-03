import { Button } from "@mui/material"
import { FC, useEffect, useState } from "react"
import { UserLogged } from "../../../context/UserContext";
import useStyles from "../../../styles/useStyles";

interface Props{
    userLogged:UserLogged,
    googleSignIn:()=>void,
    googleSignOut:()=>void
}

const LogButton: FC<Props> =  ({userLogged, googleSignIn, googleSignOut}) => {
    const classes = useStyles();
    const[logged, setLogged]=useState(false);

    useEffect(()=>{
        setLogged(userLogged.username !== '');
    },[userLogged])

    return(
        <Button className={classes.loginButton} onClick={logged? googleSignOut : googleSignIn}>{logged?'Logout': 'Login'}</Button>
    )
}

export default LogButton;