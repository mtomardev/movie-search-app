import React,{useState, useEffect} from "react";
import Switch from '@mui/material/Switch';

const Mode = () =>{
    const [themeMode, setThemeMode] = useState("dark-theme")
    const [modeText, setModeText] = useState("Dark Mode")
    
    useEffect(()=>{
        document.body.className = themeMode;
    },[themeMode])

    const toggleTheme = () =>{
        if(themeMode === "dark-theme"){
            setThemeMode("light-theme")
            setModeText("Light Mode")
        }    

        else{
            setThemeMode("dark-theme")
            setModeText("dark Mode")
        }
    }

    return(
        <div>
            
            <span style={{color:"var(--headerText)"}}>{modeText} <Switch defaultChecked onClick={()=> toggleTheme()} /></span> 
        </div>
    )
}

export default Mode