import React from 'react';
import { Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';
import Header from '../Header/Header';

const MainContainer: React.FC = () => {
    return (
        <Grid item xs={12}>
            <Header title={'Notitas App'}/>
            <Outlet/>
        </Grid>
    );
};

export default MainContainer;
