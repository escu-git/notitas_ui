import { Grid } from '@mui/material'
import Note from './Note'
import { NoteModel } from '@src/models/Notes'
import notesService from '@src/services/notesService'
import useStyles from '@src/styles/useStyles'
import useDisplaySize from '@src/common/hooks/useDisplaySize'

interface componentProps {
    notes: NoteModel[]
    fetchAgain: () => void
}

const NotesList = ({ notes, fetchAgain }: componentProps) => {
    const classes = useStyles()
    const {isSmallDevice} = useDisplaySize();

    const deleteNote = async (id: string) => {
        await notesService.deleteNote(id).then((x) => {
            if (x.status == 200) fetchAgain()
        })
    }

    return (
        <Grid
            container
            item
            className={classes.noteListContainer}
            xs={12}
            flexDirection="column"
        >
            <Grid container className={isSmallDevice ? classes.noteScrollAreaMobile :classes.noteScrollArea}>
                {Array.isArray(notes) &&
                    notes.map((note) => (
                        <Note
                            key={note._id}
                            note={note}
                            deleteNote={deleteNote}
                        />
                    ))}
            </Grid>
        </Grid>
    )
}

export default NotesList
