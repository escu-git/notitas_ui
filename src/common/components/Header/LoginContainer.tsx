import { Grid, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { UserContext } from "../../../context/UserContext";
import LogButton from "./LogButton";
import useStyles from "../../../styles/useStyles";
// import { useNavigate } from "react-router-dom";

const LoginContainer = () => {
    // const navigate = useNavigate()
    const classes = useStyles();
    const {userLogged, isLogged, setIsLogged, fetchUser, logOutUser} = useContext(UserContext);
    const username = userLogged.displayName !=='' ? userLogged.displayName : null;


    useEffect(()=>{
        fetchUser()
    },[])

    const googleSignIn = () =>{
        window.open(`${import.meta.env.VITE_API_URL}/auth/login/google`, '_self');

    };

    const googleSignOut = () =>{
        try{
            logOutUser();
        }catch(err){
            console.error(err)
        }
    };

    return(
        <Grid container className={classes.loginContainer}>
            <Grid item xs={9}>
                {userLogged && <Typography className={classes.headerUsername} variant='subtitle2'>{username}</Typography>}
            </Grid>
            <Grid item xs={3} className={classes.loginButtons}>
                <LogButton userLogged={userLogged} isLogged={isLogged} setIsLogged={setIsLogged} googleSignIn={googleSignIn} googleSignOut={googleSignOut}/>
            </Grid>
        </Grid>
    )
}

export default LoginContainer;