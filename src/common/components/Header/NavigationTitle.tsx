import { Grid, Typography } from '@mui/material'
import useStyles from '@src/styles/useStyles'
import React from 'react'

interface navigationProps {
    title: string,
    children: React.ReactNode
}
const NavigationTitle = ({ title, children }: navigationProps) => {
    const classes = useStyles()
    return (
       
        <Grid  container item xs={12} className={classes.navigationTitleContainer} flexDirection='row' alignItems='flex-start' justifyContent='center'>
            <Grid container item xs={10} alignItems='center'>
                <Typography variant="h6" className={classes.navigationTitle}>
                    {title}
                </Typography>
            </Grid>
            <Grid container item xs={2}>
                {children}
            </Grid>
        </Grid>

    )
}

export default NavigationTitle
