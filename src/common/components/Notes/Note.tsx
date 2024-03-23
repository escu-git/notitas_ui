import { Grid, Typography } from "@mui/material"
import { NoteModel } from "@src/models/Notes";
import useStyles from "@src/styles/useStyles";
import { DeleteIcon } from "@src/common/components/Icons/Icons";

interface NoteProps{
    note:NoteModel,
    deleteNote:(id:string)=>void
}

const Note = ({note, deleteNote}:NoteProps) =>{
 const classes = useStyles()

 


    return(
        <Grid container flexDirection={'column'} className={classes.notePreview}>
            <Typography variant={'h5'}>{note.title}</Typography>
            <Typography variant={'body1'}>{note.content}</Typography>
            <DeleteIcon accion={()=>deleteNote(deleteNote(note._id))}/>
        </Grid>
    )
}

export default Note;