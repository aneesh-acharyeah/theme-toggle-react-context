import React,{useContext} from "react";
import {ThemeContext} from "./ThemeContext";

const ThemeToggle=()=>{
    const {isDark,toggleTheme}=useContext(ThemeContext);

    return(
        <button onClick={toggleTheme} className="toggle-btn">
            Switch to {isDark ? "Light" : "Dark"} Mode
        </button>
    )
}
export default ThemeToggle;
