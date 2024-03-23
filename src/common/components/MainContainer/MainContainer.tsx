import { Grid } from '@mui/material';
import Header from '../Header/Header';

const MainContainer = () => {
    return (
        <Grid item xs={12}>
            <Header title={'Notitas App'}/>
            {/* {children} */}
        </Grid>
    );
};

export default MainContainer;
