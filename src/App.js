import React from 'react'
import Navbar from './component/Navbar'
import BookList from './component/BookList'
import ThemeContextProvider from './contexts/ThemeContext'
import ThemeToggle from './component/ThemeToggle'

class App extends React.Component{
  render(){
    return(
      <div className ="App">
        <ThemeContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </ThemeContextProvider>
      </div>
    )
  }
}

export default App;
