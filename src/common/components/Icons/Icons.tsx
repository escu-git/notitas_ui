import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

interface iconProps{
    accion: ()=>void,
}

export const DeleteIcon = ({accion}:iconProps) =>{
    return <DeleteOutlineOutlinedIcon onClick={()=>accion()}/>;
}