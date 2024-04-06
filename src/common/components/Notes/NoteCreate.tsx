import React, { useContext, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import {
    Button,
    Grid,
    Modal,
    Paper,
    Select,
    Switch,
    TextField,
    Typography,
} from '@mui/material'
import { NewNoteModel } from '@src/models/Notes'
import notesService from '@src/services/notesService'
import useStyles from '@src/styles/useStyles'
import { UserContext } from '@src/context/UserContext'
import useDisplaySize from '@src/common/hooks/useDisplaySize'
import { useColorPallete } from '@src/styles/colorPallete'
import useColorBrightness from '@src/common/hooks/useColorBrightness'

interface componentProps {
    modal: {
        openCreateNoteModal: boolean
        setOpenCreateNoteModal: React.Dispatch<React.SetStateAction<boolean>>
    }
    fetchAgain: () => void
}

const NoteCreate = ({ modal, fetchAgain }: componentProps) => {
    const classes = useStyles()
    const color = useColorPallete;
    const { userLogged } = useContext(UserContext)
    const { openCreateNoteModal, setOpenCreateNoteModal } = modal
    const [reminder, setReminder] = useState<boolean>(false)
    const [noteColor, setNoteColor] = useState<string>(color.primary.light)
    const {fontColor} = useColorBrightness({backgroundColor: noteColor});
    const { isSmallDevice } = useDisplaySize()

    const INITIAL_VALUES: NewNoteModel = {
        title: '',
        content: '',
        user: userLogged.email,
        reminder: {
            active: false,
            date: new Date(),
            notification_type: 'email',
        },
        category: 0,
        active: true,
        color: ""
    }

    const { handleSubmit, control, reset } = useForm<NewNoteModel>({
        defaultValues: INITIAL_VALUES,
    })

    const createNote = async (note: NewNoteModel) => {
        try {
            await notesService.postNote(note).then((x) => {
                if (x.status == 200) fetchAgain()
            })
        } catch (err) {
            console.log(err)
        }
    }

    //Handler pre submit:
    const onSubmit: SubmitHandler<NewNoteModel> = (note: NewNoteModel) => {
        try {
            note.user = userLogged.email
            createNote(note)
            .then(()=>{
                fetchAgain()
            })
        } catch (err) {
            console.log(err)
        } finally {
            handleCloseModal()
        }
    }

    const handleCloseModal = () => {
        reset(INITIAL_VALUES)
        setOpenCreateNoteModal(false)
    }

    const handleReminderChange = () => {
        setReminder(!reminder)
    }

    return (
        <Modal
            className={
                isSmallDevice
                    ? classes.modalNewNoteMobile
                    : classes.modalNewNote
            }
            open={openCreateNoteModal}
            onClose={handleCloseModal}
        >
            <Grid
                container
                item
                xs={12}
                md={12}
                className={classes.createNoteModal}
                
            >
                <Paper className={classes.modalPaper}>
                    <Grid 
                        className={classes.modalHeader}
                        style={{backgroundColor:noteColor}}
                    >
                        <Typography
                            variant={'h6'}
                            className={classes.modalHeaderTitle}
                            style={{color:fontColor}}
                        >
                            Create Note
                        </Typography>
                    </Grid>
                    <Grid
                        container
                        item
                        xs={12}
                        className={classes.modalFormContainer}
                    >
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container item xs={12} gap={'0.5em'}>
                                <Grid>
                                    <Controller
                                        name="color"
                                        control={control}
                                        render={({ field: { onChange } }) => (
                                            <input
                                                type="color"
                                                id="color"
                                                value={noteColor}
                                                onChange={(e) => {
                                                    onChange(e.target.value);
                                                    setNoteColor(e.target.value);
                                                }}
                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Controller
                                        name="title"
                                        control={control}
                                        render={({ field }) => (
                                            <TextField
                                                fullWidth
                                                variant="outlined"
                                                placeholder="Type the title of your note"
                                                label="Note title"
                                                {...field}
                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid>
                                    <Controller
                                        name="category"
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                labelId="category-selection"
                                                label="Category"
                                                {...field}
                                                id={'category'}
                                            // options={[
                                            //     {value: 0, label: 'Personal'},
                                            //     {value: 1, label: 'Work'},
                                            //     {value: 2, label: 'Other'}
                                            // ]}
                                            />
                                        )}
                                    />
                                </Grid>
                                <Controller
                                    name="content"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            variant="outlined"
                                            placeholder="Type the content of your note"
                                            label="Note content"
                                            {...field}
                                        />
                                    )}
                                />
                                <Grid
                                    container
                                    item
                                    xs={12}
                                    flexDirection="row"
                                >
                                    <Grid container item xs={12}>
                                        <Typography
                                            variant={'h6'}
                                        >{`Reminder: ${reminder ? 'ON' : 'OFF'}`}</Typography>
                                        <Controller
                                            name="reminder.active"
                                            control={control}
                                            render={({ field }) => (
                                                <Switch
                                                    checked={reminder}
                                                    {...field}
                                                    onChange={
                                                        handleReminderChange
                                                    }
                                                />
                                            )}
                                        />
                                    </Grid>
                                    {reminder && (
                                        <Grid
                                            container
                                            item
                                            xs={12}
                                            flexDirection="row"
                                            gap={'0.5em'}
                                        >
                                            <Grid>
                                                <Controller
                                                    name="reminder.date"
                                                    control={control}
                                                    render={
                                                        ({ field }) => (
                                                            <TextField
                                                                label="Date"
                                                                {...field}
                                                            />
                                                        )
                                                        // <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                        //     <DemoContainer
                                                        //     components={[
                                                        //     'DatePicker',
                                                        //     'TimePicker',
                                                        //     'DateTimePicker',
                                                        //     'DateRangePicker',
                                                        //     ]}
                                                        // >
                                                        //     <DemoItem>
                                                        //         <DatePicker
                                                        //         {...field}
                                                        //         label="Reminder Date"
                                                        //         // inputFormat="MM/dd/yyyy"
                                                        //         // renderInput={(params:string) => <TextField {...params} />}
                                                        //         />
                                                        //     </DemoItem>

                                                        // </DemoContainer>

                                                        // </LocalizationProvider>
                                                    }
                                                />
                                            </Grid>
                                            <Grid>
                                                <Controller
                                                    name="reminder.notification_type"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <Select
                                                            labelId="notification-type"
                                                            label="Notification type"
                                                            {...field}
                                                            id={
                                                                'notification-type'
                                                            }
                                                        />
                                                    )}
                                                />
                                            </Grid>
                                        </Grid>
                                    )}
                                </Grid>
                                <Grid>
                                    <Button
                                        variant={'outlined'}
                                        type={'submit'}
                                    >
                                        Create
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                    {/* <button onClick={handleCloseModal}>Close</button> */}
                </Paper>
            </Grid>
        </Modal>
    )
}

export default NoteCreate
