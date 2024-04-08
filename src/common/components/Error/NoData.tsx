import { Grid, Typography } from "@mui/material"

type componentProps={
    icon: React.ComponentType<any>,
    message: string
}
const NoData = ({icon: Icon, message}:componentProps) =>{

    return(
        <Grid container  direction="column" alignItems="center">
            <Grid>
                {<Icon/>}
            </Grid>
            <Grid>
                <Typography>{message}</Typography>
            </Grid>
        </Grid>
    )
}

export default NoData;