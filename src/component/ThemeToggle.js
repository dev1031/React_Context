import React from 'react';
import { ThemeContext } from "./../contexts/ThemeContext";

class ThemeToggle extends React.Component{
    static contextType = ThemeContext
render(){
    const { toggleTheme } = this.context ;
    return(
        <button onClick ={ toggleTheme }>Toggle Theme</button>
    )
}
}

export default ThemeToggle;