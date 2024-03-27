import { makeStyles } from "@mui/styles";
import { useColorPallete } from "./colorPallete"


const color = useColorPallete;

const useStyles = makeStyles( ({
    //#region header and maincontainer
    header:{
        backgroundColor:color.primary.light,
        padding:'0.5em 1.5em',
    },
    title:{
        color:color.white,
        fontSize:'32px !important',
        fontWeight:'bold !important',
    },
    loginContainer:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
    },
    loginButtons:{
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center',
    },
    loginButton:{
        backgroundColor:color.white + '!important',
        // padding:'1em',
        borderRadius:'5px',
        cursor:'pointer'
    },
    logout:{
        fontSize:'16px !important',
        color:color.white + '!important',
        cursor:'pointer',
        // marginLeft:'1em'
    },
    logButton:{
        color:color.white + '!important',
        fontSize:'28px'
    },
    headerUsername:{
        color:color.white,
        fontSize:'16px',
        fontWeight:'bold',
        textAlign:'center'
    },
    //#endregion header and maincontainer
    //#region notas
    viewNotasContainer:{
        padding:'1.5em',
        minHeight:'90vh'
    },
    notePreview:{
        
    },
    modalNewNote:{
        width:'100%',
        height:'100%',
        marginTop:'10em',
    },
    modalNewNoteMobile:{
        width:'90%',
        height:'100%',
        margin:'auto',
        marginTop:'10em',

    },
    modalPaper:{
        width:'100%',
        maxWidth:'600px',
        border:'1px solid black',
    },
    createNoteModal:{
        justifyContent:'center',
        alignItems:'center',
    },
    modalHeader:{
        backgroundColor:color.primary.light,
        padding:'1em',
        textAlign:'center',
        marginBottom:'1em',
    },
    modalHeaderTitle:{

    },
    modalFormContainer:{
        width:'100%',
        padding:'1em',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    modalInput:{
        width:'80%'
    },
    mobileCreateButtonContainer:{
        position: 'absolute',
        bottom:'1em',
        left:0,
        marginTop:'1em'
    },
    mobileCreateButton:{
        width:'90%',
        height:'3em'
    }
}
    //#endregion notas
))

export default useStyles;