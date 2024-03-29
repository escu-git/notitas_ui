import { makeStyles } from '@mui/styles'
import { useColorPallete } from './colorPallete'

const color = useColorPallete

const useStyles = makeStyles(() => ({
  //#region drawer:
  drawer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '200px',
    height: '100%',
    backgroundColor: '#f0f0f0',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  },
  closedDrawer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: 0,
    height: '100%',
    backgroundColor: '#f0f0f0',
    boxShadow: '0 0 0px rgba(0, 0, 0, 0.2)',
  },
  drawerButtonOpen: {
    width: 30,
    height: 30,
    backgroundColor: '#f0f0f0',
    position: 'absolute',
    left: 200,
    borderRadius: '0px 0px 10px 0px',
    boxShadow:
      '5px 0px 10px rgba(0, 0, 0, 0.2),' +
      '0px 5px 10px rgba(0, 0, 0, 0.2),' +
      '0px -5px 10px rgba(0, 0, 0, 0.2),',
  },
  drawerButtonClosed: {
    width: 30,
    height: 30,
    backgroundColor: '#f0f0f0',
    position: 'absolute',
    left: 0,
    borderRadius: '0px 0px 10px 0px',
  },
  drawerIconContainer: {
    margin: 0,
    padding: 0,
  },
  drawerIcon: {
    fontSize: '20px',
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
    fontSize: '2em !important',
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
  },
  headerUsername: {
    color: color.white,
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  //#endregion header and maincontainer
  //#region notas
  viewNotasContainer: {
    //We force the height of the screen to its maximum, without exceding the max height:
    padding: '1.5em',
    height: '100%',
    minHeight: '100%',
    boxSizing: 'border-box',
    overflowX: 'hidden',
    overflowY: 'hidden',
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
  modalHeaderTitle: {},
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
