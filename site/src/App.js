import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import NavBar from './components/NavBar'


const theme={
  mobile:'768px'
}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <NavBar />
      </BrowserRouter>
    
    </ThemeProvider>
  )
}

export default App