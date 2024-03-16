import { Grid } from "@mui/material"
import Note from "./Note";
import { NoteModel } from "@src/models/Notes";

interface componentProps{
    notes: NoteModel[]
}

const NotesList = ({notes}:componentProps) =>{

    return(
        <Grid>
            <h1>Notes List</h1>
            {Array.isArray(notes) && notes.map((note) => <Note key={note._id} note={note} />)}
        </Grid>
    )
}

export default NotesList;