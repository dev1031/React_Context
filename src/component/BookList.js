import React from 'react';
import { ThemeContext } from './../contexts/ThemeContext'

class BookList extends React.Component{
    static contextType = ThemeContext;
    render(){
        const { isLightTheme , dark , light } = this.context;
        const theme = isLightTheme ? light : dark;
        return(
            <div className="book-list" style = {{ background : theme.bg , color : theme.syntax }}>
                <ul>
                    <li style ={{ background : theme.ui }}>Lost in The wonderLand</li>
                    <li style ={{ background : theme.ui }}>Lord of the Ring</li>
                    <li style ={{ background : theme.ui }}>The Dance of Dragon</li>
                </ul>
            </div>
        )
    }
}

export default BookList