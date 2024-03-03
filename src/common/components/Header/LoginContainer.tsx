import { Grid, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { UserContext } from "../../../context/UserContext";
import LogButton from "./LogButton";
import axios from 'axios';
import useStyles from "../../../styles/useStyles";

const LoginContainer = () => {
    const classes = useStyles();
    const {userLogged} = useContext(UserContext);
    const username = userLogged != null? userLogged.username : null;

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/auth/currentUser`,{
            method: "GET",
            credentials: "include",
          })
        .then(res=>{
            console.log(res)
        })
    },[])

    const googleSignIn = () =>{
        // console.log(`${import.meta.env.VITE_API_URL}/auth/google`)
        window.open(`${import.meta.env.VITE_API_URL}/auth/login/google`, '_self');
    };

    const googleSignOut = () =>{
       axios.get(`${import.meta.env.VITE_API_URL}/auth/logout`);
    };

    return(
        <Grid className={classes.loginContainer}>
            <Grid>
                {userLogged && <Typography>{username}</Typography>}
            </Grid>
            <Grid>
                <LogButton userLogged={userLogged} googleSignIn={googleSignIn} googleSignOut={googleSignOut}/>
                <LogButton userLogged={userLogged} googleSignIn={googleSignOut} googleSignOut={googleSignOut}/>

            </Grid>
        </Grid>
    )
}

export default LoginContainer;