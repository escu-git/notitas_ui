import { useColorPallete } from "@src/styles/colorPallete";
import { useEffect, useState } from "react";
import { hexToRgb } from "../components/helpers/colorHandler";

type hookProps = {
    backgroundColor:string
}

const useColorBrightness = ({backgroundColor}:hookProps) =>{
    const color = useColorPallete;
    const [fontColor, setFontColor] =useState(color.black);

    useEffect(()=>{
        if(backgroundColor){
            const c = hexToRgb(backgroundColor);
            if(c){
                setFontColor(c > 127 ? color.black : color.white);
            }
        }
    },[backgroundColor])
    
    return {fontColor}
}

export default useColorBrightness;