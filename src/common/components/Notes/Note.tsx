import { Grid, Typography } from '@mui/material'
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
    <Grid
      container
      item
      xs={8}
      flexDirection={'row'}
      className={classes.notePreview}
    >
      <Grid container item flexDirection={'column'} xs={11}>
        <Typography variant={'h5'}>{note.title}</Typography>
        <Typography variant={'body1'}>{note.content}</Typography>
      </Grid>
      <Grid item xs={1}>
        <DeleteIcon accion={handleDelete} />
      </Grid>
    </Grid>
  )
}

export default Note
