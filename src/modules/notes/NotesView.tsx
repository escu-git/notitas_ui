import { useTheme } from '@mui/material/styles';
import { Button, Grid, useMediaQuery } from '@mui/material'
import NoteCreate from '@src/common/components/Notes/NoteCreate';
import NotesList from '@src/common/components/Notes/NotesList';
import useNoteList from '@src/common/hooks/useNoteList';
import useStyles from '@src/styles/useStyles';
import { useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const NotesView = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isSmallDevice = useMediaQuery(theme.breakpoints.down('md'))
    const { notes, fetchAgain } = useNoteList();
    const [openCreateNoteModal, setOpenCreateNoteModal] = useState<boolean>(false);
    // const isSmallDevice=true
    return (
        <Grid container item className={classes.viewNotasContainer} flexDirection='column'>
            {/* Create note modal: */}
            <Grid item xs={12}>
                <NoteCreate modal={{ openCreateNoteModal, setOpenCreateNoteModal }} fetchAgain={fetchAgain} />
            </Grid>
            {!isSmallDevice && <Grid item xs={10} justifyContent='flex-end'>
                <Button
                    variant={'contained'}
                    onClick={() => { setOpenCreateNoteModal(!openCreateNoteModal) }}>
                    Crear nota
                </Button>
            </Grid>}
            <Grid item xs={12}>
                <NotesList notes={notes} fetchAgain={fetchAgain} />
            </Grid>
            {isSmallDevice &&
                <Grid container item xs={12} className={classes.mobileCreateButtonContainer} justifyContent='center' alignItems='center'>
                    <Button
                        variant={'contained'}
                        startIcon={<AddCircleOutlineIcon/>}
                        onClick={() => { setOpenCreateNoteModal(!openCreateNoteModal) }}
                        className={classes.mobileCreateButton}
                    >
                        New note
                    </Button>
                </Grid>
            }
        </Grid>
    )
}

export default NotesView;