import { Grid, Typography } from '@mui/material';
import useStyles from '../../../styles/useStyles';
import React from 'react';
import { Outlet } from 'react-router-dom';
import LoginContainer from './LoginContainer';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    const classes = useStyles();

    return (
        <Grid>
            <Grid container item justifyContent='space-between' className={classes.header}>
                <Grid>
                    <Typography className={classes.title}>{title}</Typography>
                </Grid>
                <Grid>
                    <LoginContainer/>
                </Grid>
            </Grid>
        <Outlet/>
        </Grid>
    );
};

export default Header;
