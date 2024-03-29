import { Grid, IconButton } from '@mui/material'
import DrawerList from './DrawerList'
import useStyles from '@src/styles/useStyles'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'

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

  return (
    <Grid
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
          openDrawer ? classes.drawerButtonOpen : classes.drawerButtonClosed
        }
      >
        <IconButton
          onClick={() => setOpenDrawer(!openDrawer)}
          className={classes.drawerIconContainer}
        >
          {openDrawer ? (
            <KeyboardArrowLeftIcon className={classes.drawerIcon} />
          ) : (
            <KeyboardArrowRightIcon className={classes.drawerIcon} />
          )}
        </IconButton>
      </Grid>
      {openDrawer && <DrawerList setOpenDrawer={setOpenDrawer} />}
    </Grid>
  )
}

export default LateralDrawer
