import { Grid, IconButton } from '@mui/material'
import DrawerList from './DrawerList'
import useStyles from '@src/styles/useStyles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {useRef} from 'react'

interface lateralDrawerProps {
    openDrawer: boolean
    setOpenDrawer: (openDrawer: boolean) => void
    headerHeight: number
}
const LateralDrawer = ({
    openDrawer,
    setOpenDrawer,
    headerHeight,
}: lateralDrawerProps) => {
    const classes = useStyles()
    const drawerRef = useRef(null)

    return (
        <Grid
            ref={drawerRef}
            container
            item
            className={openDrawer ? classes.drawer : classes.closedDrawer}
            style={{ marginTop: headerHeight }}
        >
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                className={
                    openDrawer
                        ? classes.drawerButtonOpen
                        : classes.drawerButtonClosed
                }
            >
                <IconButton
                    onClick={() => setOpenDrawer(!openDrawer)}
                    className={classes.drawerIconContainer}
                >
                    {openDrawer ? (
                        <KeyboardArrowUpIcon className={classes.drawerIcon} />
                    ) : (
                        <KeyboardArrowDownIcon
                            className={classes.drawerIcon}
                        />
                    )}
                </IconButton>
            </Grid>
            <DrawerList setOpenDrawer={setOpenDrawer} openDrawer={openDrawer}/>
        </Grid>
    )
}

export default LateralDrawer
