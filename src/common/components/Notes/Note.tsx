import { Grid, Paper, Typography } from '@mui/material'
import { NoteModel } from '@src/models/Notes'
import useStyles from '@src/styles/useStyles'
import { DeleteIcon } from '@src/common/components/Icons/Icons'

interface NoteProps {
    note: NoteModel
    deleteNote: (id: string) => Promise<void>
}

const Note = ({ note, deleteNote }: NoteProps) => {
    const handleDelete = () => {
        deleteNote(note._id)
    }

    const classes = useStyles()
    return (
        <Paper elevation={3} style={{backgroundColor:note.color }}
        className={classes.notePreview}
        >
            <Grid
                container
                flexDirection={'row'}
            >
                <Typography variant={'h5'}>{note.title}</Typography>
            </Grid>
            <Grid>
                <Typography variant={'body1'}>{note.content}</Typography>
            </Grid>
                <DeleteIcon accion={handleDelete} />
           

        </Paper>
        
    )
}

export default Note
