import {
    Box,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material'
import { drawerItemList } from './drawerItemList'
import useStyles from '@src/styles/useStyles'
import { useNavigate } from 'react-router-dom'

interface drawerListProps {
    setOpenDrawer: (openDrawer: boolean) => void
    openDrawer: boolean
}
const DrawerList = ({ setOpenDrawer, openDrawer }: drawerListProps) => {
    const classes = useStyles()
    const navigate = useNavigate();

    return (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpenDrawer(false)}
            className={
                openDrawer
                    ? classes.drawerContentOpen
                    : classes.drawerContentClosed
            }
        >
            {drawerItemList.map((item) => {
                return (
                    <ListItem key={item.title}>
                        <ListItemButton onClick={()=>navigate(item.path)}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                )
            })}
        </Box>
    )
}

export default DrawerList
