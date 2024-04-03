import { Button, Divider, Grid } from '@mui/material'
import NoteCreate from '@src/common/components/Notes/NoteCreate'
import NotesList from '@src/common/components/Notes/NotesList'
import useNoteList from '@src/common/hooks/useNoteList'
import useStyles from '@src/styles/useStyles'
import { useState } from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import useDisplaySize from '@src/common/hooks/useDisplaySize'
import NavigationTitle from '@src/common/components/Header/NavigationTitle'

const NotesView = () => {
    const classes = useStyles()
    const { isSmallDevice } = useDisplaySize()
    const { notes, fetchAgain } = useNoteList()
    const [openCreateNoteModal, setOpenCreateNoteModal] =
        useState<boolean>(false)

    return (
        <Grid
            container
            item
            className={classes.viewNotasContainer}
            flexDirection="column"
        >
            <NavigationTitle title={'Notes'} 
            children={!isSmallDevice && <Button
                            variant={'contained'}
                            onClick={() => {
                                setOpenCreateNoteModal(!openCreateNoteModal)
                            }}
                        >
                            New note
                        </Button>} 
            />
            <Divider variant='fullWidth'/>
            <Grid container item xs={12} style={{padding:'0px 1em'}}>
                {/* Create note modal: */}
                <Grid item xs={12}>
                    <NoteCreate
                        modal={{ openCreateNoteModal, setOpenCreateNoteModal }}
                        fetchAgain={fetchAgain}
                    />
                </Grid>
                <Grid item xs={12}>
                    <NotesList notes={notes} fetchAgain={fetchAgain} />
                </Grid>
                {isSmallDevice && (
                    <Grid
                        container
                        item
                        xs={12}
                        className={classes.mobileCreateButtonContainer}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Button
                            variant={'contained'}
                            startIcon={<AddCircleOutlineIcon />}
                            onClick={() => {
                                setOpenCreateNoteModal(!openCreateNoteModal)
                            }}
                            className={classes.mobileCreateButton}
                        >
                            New note
                        </Button>
                    </Grid>
                )}
            </Grid>
        </Grid>
    )
}

export default NotesView
