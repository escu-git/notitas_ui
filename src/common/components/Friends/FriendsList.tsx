import { FriendRequestModel } from '@src/models/FriendRequest';
import { FriendshipModel } from '@src/models/Friendship';
import FriendTable from './FriendTable';
import { Grid } from '@mui/material';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import NoData from '../Error/NoData';
import useStyles from '@src/styles/useStyles';


type componentProps={
    requests: Array<FriendRequestModel>,
    friends: Array<FriendshipModel>
}

const FriendsList= ({ requests, friends }:componentProps) => {
    const classes = useStyles();
    return (
        <Grid container spacing={2} className={classes.friendList}>
            <Grid container item xs={12} >
                {friends.length > 0 ?<FriendTable list={friends} title={'Friends'}/> : <NoData icon={PeopleOutlineIcon} message={'No friends to show'} />}
            </Grid>
            <Grid container item xs={12}>
            {requests.length > 0 && <FriendTable list={requests} title={'Requests'}/>}

            </Grid>
        </Grid>
    );
};

export default FriendsList;