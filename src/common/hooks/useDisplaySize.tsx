import { useMediaQuery, useTheme } from '@mui/material'
import { useEffect, useState } from 'react'

const useDisplaySize = () => {
    const theme = useTheme()
    const [screenSize, setScreenSize] = useState<number>(0)
    const isSmallDevice = useMediaQuery(theme.breakpoints.down('md'))
    const isMediumDevice = useMediaQuery(theme.breakpoints.between('md', 'lg'))
    const isLargeDevice = useMediaQuery(theme.breakpoints.up('lg'))
    useEffect(() => {
        const size = window.innerWidth
        setScreenSize(size)
    }, [isSmallDevice, isMediumDevice, isLargeDevice])

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    return { screenSize, isSmallDevice, isMediumDevice, isLargeDevice }
}

export default useDisplaySize
