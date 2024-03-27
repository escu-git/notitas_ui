import { useMediaQuery, useTheme } from "@mui/material";

const useDisplaySize = ()=>{
    const theme = useTheme();
    const isSmallDevice = useMediaQuery(theme.breakpoints.down('md'));
    const isMediumDevice = useMediaQuery(theme.breakpoints.between('md', 'lg'));
    const isLargeDevice = useMediaQuery(theme.breakpoints.up('lg'));

    return {isSmallDevice, isMediumDevice, isLargeDevice}
}

export default useDisplaySize;