import { Button } from "@mui/material"
import { useEffect, useState } from "react"

const LogButton = () => {
    const[logged, setLogged] = useState(true);

    useEffect(()=>{
        setLogged(false);
    })
    return(
        <Button>{logged}</Button>
    )
}

export default LogButton;