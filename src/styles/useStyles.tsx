import { makeStyles } from "@mui/styles";
import { useColorPallete } from "./colorPallete"


const color = useColorPallete;

const useStyles = makeStyles( ({
    header:{
        backgroundColor:color.primary.light,
        padding:'2em',
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
    }
}))

export default useStyles;