import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import AboutPage from './components/pages/AboutPage'
import Home from './components/pages/Home'
import WorksPage from './components/pages/WorksPage'
import ContactPage from './components/pages/ContactPage'
const theme={
  mobile:'768px'
}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/works' element={<WorksPage />}></Route>
       <Route path='/contact' element={<ContactPage />}></Route>
      </Routes>
      <Footer />
      </BrowserRouter>
    
    </ThemeProvider>
  )
}

export default App