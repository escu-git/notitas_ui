import { Grid, Typography } from "@mui/material"
import { NoteModel } from "@src/models/Notes";
import useStyles from "@src/styles/useStyles";

interface NoteProps{
    note:NoteModel
}

const Note = ({note}:NoteProps) =>{
 const classes = useStyles()
    return(
        <Grid container flexDirection={'column'} className={classes.notePreview}>
            <Typography variant={'h5'}>{note.title}</Typography>
            <Typography variant={'body1'}>{note.content}</Typography>
        </Grid>
    )
}

export default Note;