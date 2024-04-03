import { makeStyles } from '@mui/styles'
import { useColorPallete } from './colorPallete'

const color = useColorPallete

const useStyles = makeStyles(() => ({
    //#region drawer:
    drawer: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '200px',
        backgroundColor: '#f0f0f0',
        boxShadow: '0 0 10px rgb(240, 240, 240, 0.2)',
        transition: 'all 0.1s ease',
        borderRadius: 10,
    },
    closedDrawer: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: 0,
        backgroundColor: '#f0f0f0',
        boxShadow: '0 0 0px rgba(0, 0, 0, 0.2)',
        transition: 'all 0.1s ease',
    },
    drawerButtonOpen: {
        width: 40,
        height: 40,
        backgroundColor: '#f0f0f0',
        position: 'absolute',
        right: 0,
        // borderRadius: '0px 0px px 0px',
        // boxShadow:
        //     '5px 0px 10px rgba(0, 0, 0, 0.2),' +
        //     '0px 5px 10px rgba(0, 0, 0, 0.2),' +
        //     '0px -5px 10px rgba(0, 0, 0, 0.2),',
        // transition: 'all 3s ease',
    },
    drawerButtonClosed: {
        width: 40,
        height: '40px',
        backgroundColor: '#f0f0f0',
        position: 'absolute',
        right: 0,
        // borderRadius: '0px 0px 0px 10px',
        // boxShadow:
        //     '0px 0px 0px rgba(0, 0, 0, 0.2),' +
        //     '0px 5px 5px rgba(0, 0, 0, 0.2),' +
        //     '0px 0px 0px ',
        // transition: 'all 3s ease',
    },
    drawerIconContainer: {
        margin: 0,
        padding: 0,
    },
    drawerIcon: {
        fontSize: '30px',
    },
    drawerContentOpen: {
        display: 'block',
        transition: 'all 0.6s ease',
    },
    drawerContentClosed: {
        display: 'none',
        transition: 'all 0.5s ease',
    },
    //#endregion drawer
    //#region header and maincontainer
    header: {
        backgroundColor: color.primary.light,
        padding: '0.5em 1.5em',
        display: 'flex',
        justifyContent: 'space-between',
    },
    outlet: {
        zIndex: 0,
    },
    title: {
        color: color.white,
        fontSize: '1.8em !important',
        fontWeight: 'bold !important',
    },
    loginContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    loginButtons: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    loginButton: {
        backgroundColor: color.white + '!important',
        // padding:'1em',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    logout: {
        fontSize: '16px !important',
        color: color.white + '!important',
        cursor: 'pointer',
        // marginLeft:'1em'
    },
    logButton: {
        color: color.white + '!important',
        fontSize: '28px',
        cursor: 'pointer',
    },
    headerUsername: {
        color: color.white,
        fontSize: '16px',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    navigationTitleContainer:{
        minHeight:40,
        height:'60px',
        padding:'0 1em',
        alignContent:'center'
    },
    navigationTitle: {
        letterSpacing:1,
        textTransform:'uppercase',
        fontWeight:'bold',
    },
    //#endregion header and maincontainer
    //#region notas
    viewNotasContainer: {
        //We force the height of the screen to its maximum, without exceding the max height:
        height: '100%',
        minHeight: '100%',
        boxSizing: 'border-box',
        overflowX: 'hidden',
        overflowY: 'hidden',
    },
    noteScrollArea: {
        maxHeight: '75vh',
        overflowY: 'scroll',
        overFlowX:'hidden',
    },
    noteListContainer: {
        height: '100%',
        minHeight: '100%',
        boxSizing: 'border-box',
        overflowX: 'hidden',
        overflowY: 'hidden',
    },
    notePreview: {},
    modalNewNote: {
        width: '100%',
        height: '100%',
        marginTop: '10em',
    },
    modalNewNoteMobile: {
        width: '90%',
        height: '100%',
        margin: 'auto',
        marginTop: '10em',
    },
    modalPaper: {
        width: '100%',
        maxWidth: '600px',
        border: '1px solid black',
    },
    createNoteModal: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalHeader: {
        backgroundColor: color.primary.light,
        padding: '1em',
        textAlign: 'center',
        marginBottom: '1em',
    },
    modalHeaderTitle: {
        color: color.white,
        fontSize: '1.5em',
    },
    modalFormContainer: {
        width: '100%',
        padding: '1em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalInput: {
        width: '80%',
    },
    mobileCreateButtonContainer: {
        position: 'absolute',
        bottom: '1em',
        left: 0,
        marginTop: '1em',
    },
    mobileCreateButton: {
        width: '90%',
        height: '3em',
    },
}))
//#endregion notas

export default useStyles
