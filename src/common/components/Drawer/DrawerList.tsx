import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { drawerItemList } from './drawerItemList'

interface drawerListProps {
  setOpenDrawer: (openDrawer: boolean) => void
}
const DrawerList = ({ setOpenDrawer }: drawerListProps) => {
  return (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => setOpenDrawer(false)}
    >
      {drawerItemList.map((item) => {
        return (
          <ListItem key={item.title}>
            <ListItemButton>
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
