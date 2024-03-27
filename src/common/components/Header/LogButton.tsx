import { Grid } from "@mui/material"
import { FC, useEffect} from "react"
import { UserLogged} from "../../../context/UserContext";
import useStyles from "../../../styles/useStyles";
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';

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
        <Grid container flexDirection='row' justifyContent='center'>
           {isLogged? 
            <LogoutIcon className={classes.logButton} onClick={googleSignOut }/>
           :
            <LoginIcon className={classes.logButton} onClick={googleSignIn}/>
           }
        </Grid>
    )
}

export default LogButton;