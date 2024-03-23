import { Button } from "@mui/material"
import { FC, useEffect} from "react"
import { UserLogged} from "../../../context/UserContext";
import useStyles from "../../../styles/useStyles";

interface Props{
    userLogged:UserLogged,
    isLogged:boolean,
    setIsLogged:(logged:boolean)=>void,
    googleSignIn:()=>void,
    googleSignOut:()=>void
}

const LogButton: FC<Props> =  ({userLogged, isLogged, setIsLogged, googleSignIn, googleSignOut}) => {
    const classes = useStyles();

    useEffect(()=>{
        setIsLogged(userLogged.displayName !== '');
    },[isLogged])

    return(
        <Button className={classes.loginButton} onClick={isLogged? googleSignOut : googleSignIn}>{isLogged?'Logout': 'Login'}</Button>
    )
}

export default LogButton;