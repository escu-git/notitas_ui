import { Button, Divider, Grid } from '@mui/material';
import NavigationTitle from '@src/common/components/Header/NavigationTitle';
import NoteCreate from '@src/common/components/Notes/NoteCreateModal';
import useDisplaySize from '@src/common/hooks/useDisplaySize';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import useStyles from '@src/styles/useStyles';
import { useState } from 'react';

const FriendsView = () => {
    const classes = useStyles();
    const [openCreateNoteModal, setOpenCreateNoteModal] = useState<boolean>(false)
    const {isSmallDevice} = useDisplaySize();

    return (
        <Grid
            container
            item
            className={classes.viewNotasContainer}
            flexDirection="column"
        >
            <NavigationTitle title={'Friends'} 
            children={!isSmallDevice && <Button
                            variant={'contained'}
                            onClick={() => {
                                setOpenCreateNoteModal(!openCreateNoteModal)
                            }}
                        >
                            Add friend
                        </Button>} 
            />
            <Divider variant='fullWidth'/>
            <Grid container item xs={12} style={{padding:'0px 1em'}}>
                {/* Create note modal: */}
                <Grid item xs={12}>
                    <NoteCreate
                        modal={{ openCreateNoteModal, setOpenCreateNoteModal }}
                        fetchAgain={()=>{}}
                    />
                </Grid>
                {/* <Grid item xs={12}>
                    <NotesList notes={notes} fetchAgain={fetchAgain} />
                </Grid> */}
                {isSmallDevice && (
                    <Grid
                        container
                        item
                        xs={12}
                        className={classes.mobileCreateButtonContainer}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Button
                            variant={'contained'}
                            startIcon={<AddCircleOutlineIcon />}
                            onClick={() => {
                                setOpenCreateNoteModal(!openCreateNoteModal)
                            }}
                            className={classes.mobileCreateButton}
                        >
                            Add friend
                        </Button>
                    </Grid>
                )}
            </Grid>
        </Grid>
    );
};

export default FriendsView;