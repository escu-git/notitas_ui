import {Button, Grid} from '@mui/material'
import NoteCreate from '@src/common/components/Notes/NoteCreate';
import NotesList from '@src/common/components/Notes/NotesList';
import useNoteList from '@src/common/hooks/useNoteList';
import useStyles from '@src/styles/useStyles';
import { useState } from 'react';

const NotesView = () =>{
    const classes = useStyles();
    const {notes, fetchAgain} = useNoteList();
    const [openCreateNoteModal, setOpenCreateNoteModal] = useState<boolean>(false);

    return(
        <Grid container item className={classes.viewNotasContainer} xs={12} flexDirection='column'>
            {/* Create note modal: */}
            <Grid item xs={12}>
                <NoteCreate modal={{openCreateNoteModal,setOpenCreateNoteModal}} fetchAgain={fetchAgain}/>
            </Grid>
            <Grid item xs={10} justifyContent='flex-end'>
                <Button variant={'contained'} onClick={()=>{setOpenCreateNoteModal(!openCreateNoteModal)}}>Crear nota</Button>
            </Grid>
            <Grid item xs={12}>
                <NotesList notes={notes} fetchAgain={fetchAgain}/>
            </Grid>
        </Grid>
        )
}

export default NotesView;