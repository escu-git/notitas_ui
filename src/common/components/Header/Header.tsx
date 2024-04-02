import { Grid, Typography } from '@mui/material'
import useStyles from '@src/styles/useStyles'
import { Outlet } from 'react-router-dom'
import LoginContainer from './LoginContainer'
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes'
import useDisplaySize from '@src/common/hooks/useDisplaySize'
import { useEffect, useRef } from 'react'

interface HeaderProps {
    title: string
    setHeaderHeight: (headerHeight: number) => void
}

const Header = ({ title, setHeaderHeight }: HeaderProps) => {
    const classes = useStyles()
    const { screenSize } = useDisplaySize()
    const headerRef = useRef<HTMLDivElement>(null)
    const { isSmallDevice } = useDisplaySize()

    useEffect(() => {
        // headerRef.current=headerRef.current.clientHeight;
        const height = headerRef.current?.clientHeight
        setHeaderHeight(height || 0)
    }, [screenSize])

    return (
        <Grid>
            <Grid
                ref={headerRef}
                container
                item
                justifyContent="space-between"
                className={classes.header}
                style={{ padding: !isSmallDevice ? '2em' : '' }}
            >
                <Grid item xs={5}>
                    <Typography className={classes.title}>
                        {title} <SpeakerNotesIcon style={{ fontSize: 30 }} />
                    </Typography>
                </Grid>
                <Grid
                    container
                    item
                    xs={6}
                    justifyContent="center"
                    alignItems="center"
                >
                    <LoginContainer />
                </Grid>
            </Grid>
            <Outlet />
        </Grid>
    )
}

export default Header
