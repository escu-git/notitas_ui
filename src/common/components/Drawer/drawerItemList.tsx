import StickyNote2Icon from '@mui/icons-material/StickyNote2'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import CottageIcon from '@mui/icons-material/Cottage'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

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
        title:'Friends',
        icon: <PeopleAltIcon/>,
        path:'/friends'
    },
    {
        title: 'Reminders',
        icon: <NotificationsActiveIcon />,
        path: '/settings',
    },
]
