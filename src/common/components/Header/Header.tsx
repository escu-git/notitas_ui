import { Grid, Typography } from '@mui/material';
import useStyles from '@src/styles/useStyles';
import { Outlet } from 'react-router-dom';
import LoginContainer from './LoginContainer';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';

interface HeaderProps {
    title: string;
}

const Header = ({ title }: HeaderProps) => {
    const classes = useStyles();

    return (
        <Grid>
            <Grid container item justifyContent='space-between' className={classes.header}>
                <Grid item xs={6}>
                    <Typography className={classes.title}>
                        {title}
                        {' '}
                        <SpeakerNotesIcon style={{fontSize:30}}/>
                        </Typography>
                </Grid>
                <Grid container item xs={6} justifyContent='center' alignItems='center'>
                    <LoginContainer/>
                </Grid>
            </Grid>
        <Outlet/>
        </Grid>
    );
};

export default Header;
