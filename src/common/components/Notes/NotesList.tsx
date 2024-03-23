import { Grid, Typography } from "@mui/material"
import Note from "./Note";
import { NoteModel } from "@src/models/Notes";
import notesService from "@src/services/notesService";

interface componentProps{
    notes: NoteModel[],
    fetchAgain:()=>void
}

const NotesList = ({notes, fetchAgain}:componentProps) =>{

    const deleteNote = async(id:string)=>{
        await notesService.deleteNote(id)
        .then(x=>{
            if(x.status ==200)
                fetchAgain();
        })
    
    }

    return(
        <Grid>
            <Typography variant={'h4'}>Notes</Typography>
            {Array.isArray(notes) && notes.map((note) => <Note key={note._id} note={note} deleteNote={deleteNote} />)}
        </Grid>
    )
}

export default NotesList;