import { makeStyles } from "@mui/styles";
import { useColorPallete } from "./colorPallete"


const color = useColorPallete;

const useStyles = makeStyles( ({
    //#region header and maincontainer
    header:{
        backgroundColor:color.primary.light,
        padding:'1em 1.5em',
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
        padding:'1em',
        borderRadius:'5px',
        cursor:'pointer'
    },
    //#endregion header and maincontainer
    //#region notas
    viewNotasContainer:{
        padding:'1.5em'
    },
    notePreview:{
        
    },
    modalNewNote:{
        width:'100%',
        height:'100%',
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
    }
}
    //#endregion notas
))

export default useStyles;