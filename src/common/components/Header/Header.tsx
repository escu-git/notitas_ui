import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import LoginContainer from './LoginContainer';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <Grid>
        <header>
            <Grid container item justifyContent='space-between'>
                <Grid>
                    <Typography>{title}</Typography>
                </Grid>
                <Grid>
                    <LoginContainer/>
                </Grid>
            </Grid>
        </header>
        <Outlet/>
        </Grid>
    );
};

export default Header;
