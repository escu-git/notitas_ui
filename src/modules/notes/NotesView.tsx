import {Button, Grid} from '@mui/material'
import NotesList from '@src/common/components/Notes/NotesList';
import useNoteList from '@src/common/hooks/useNoteList';
import notesService from '@src/services/notesService';

const NotesView = () =>{
    const {notes, fetchAgain} = useNoteList();

    const createNote = ()=>{
        try{
            notesService.postNote()
            .then((x)=>console.log(x))

        }
        finally{
            fetchAgain()
        }
    }

    return(
        <Grid>
            <Button onClick={()=>{createNote()}}>Crear nota</Button>
            <NotesList notes={notes}/>
        </Grid>
        )
}

export default NotesView;