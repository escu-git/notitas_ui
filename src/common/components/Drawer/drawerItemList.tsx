import StickyNote2Icon from '@mui/icons-material/StickyNote2'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import CottageIcon from '@mui/icons-material/Cottage'

export const drawerItemList = [
    {
        title: 'Home',
        icon: <CottageIcon />,
        path: '/',
    },
    {
        title: 'Notes',
        icon: <StickyNote2Icon />,
        path: '/',
    },
    {
        title: 'Reminders',
        icon: <NotificationsActiveIcon />,
        path: '/settings',
    },
]
