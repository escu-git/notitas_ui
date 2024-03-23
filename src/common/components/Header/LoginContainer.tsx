import { Grid, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { UserContext } from "../../../context/UserContext";
import LogButton from "./LogButton";
import axios from 'axios';
import useStyles from "../../../styles/useStyles";

const LoginContainer = () => {
    const classes = useStyles();
    const {userLogged, isLogged, setIsLogged, fetchUser} = useContext(UserContext);
    const username = userLogged.displayName !=='' ? userLogged.displayName : null;


    useEffect(()=>{
        fetchUser()
    },[])

    const googleSignIn = () =>{
        window.open(`${import.meta.env.VITE_API_URL}/auth/login/google`, '_self');

    };

    const googleSignOut = () =>{
       axios.post(`${import.meta.env.VITE_API_URL}/auth/logout`)
       .then(res=>console.log(res))
    };

    return(
        <Grid container className={classes.loginContainer}>
            <Grid item xs={6}>
                {userLogged && <Typography>{username}</Typography>}
            </Grid>
            <Grid item xs={6} className={classes.loginButtons}>
                <LogButton userLogged={userLogged} isLogged={isLogged} setIsLogged={setIsLogged} googleSignIn={googleSignIn} googleSignOut={googleSignOut}/>
            </Grid>
        </Grid>
    )
}

export default LoginContainer;