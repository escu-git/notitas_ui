import { Grid } from '@mui/material'
import Header from '../Header/Header'
import { useState } from 'react'
import LateralDrawer from '@src/common/components/Drawer/Drawer'

const MainContainer = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
    const [headerHeight, setHeaderHeight] = useState(0)

    return (
        <Grid item xs={12}>
            <Header title={'Notitas App'} setHeaderHeight={setHeaderHeight} />
            <LateralDrawer
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
                headerHeight={headerHeight}
            />
        </Grid>
    )
}

export default MainContainer
