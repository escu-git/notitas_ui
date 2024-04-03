import { Avatar, Grid, Typography } from '@mui/material'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../../context/UserContext'
import LogButton from './LogButton'
import useStyles from '../../../styles/useStyles'
import useDisplaySize from '@src/common/hooks/useDisplaySize'
// import { useNavigate } from "react-router-dom";

const LoginContainer = () => {
    const classes = useStyles()
    const { isSmallDevice } = useDisplaySize()
    const { userLogged, isLogged, setIsLogged, fetchUser, logOutUser } =
        useContext(UserContext)
    const username =
        userLogged.displayName !== '' ? userLogged.displayName : null

    useEffect(() => {
        fetchUser()
    }, [])

    const googleSignIn = () => {
        window.open(
            `${import.meta.env.VITE_API_URL}/auth/login/google`,
            '_self',
        )
    }

    const googleSignOut = () => {
        try {
            logOutUser()
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <Grid container className={classes.loginContainer}>
            <Grid
                container
                item
                xs={9}
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
            >
                {userLogged && (
                    <>
                        {!isSmallDevice &&  (
                            <Grid item xs={2}>
                                <Avatar
                                    alt={`${username}`}
                                    src={userLogged.picture}
                                />
                            </Grid>
                        )}
                        <Grid container item xs={10}>
                            <Typography
                                className={classes.headerUsername}
                                variant="subtitle2"
                            >
                                {username}
                            </Typography>
                        </Grid>
                    </>
                )}
            </Grid>
            <Grid item xs={3} className={classes.loginButtons}>
                <LogButton
                    userLogged={userLogged}
                    isLogged={isLogged}
                    setIsLogged={setIsLogged}
                    googleSignIn={googleSignIn}
                    googleSignOut={googleSignOut}
                />
            </Grid>
        </Grid>
    )
}

export default LoginContainer
