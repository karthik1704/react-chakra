import { useState } from 'react'

import { Box } from '@chakra-ui/react'

import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './Routes/AppRoutes'

function App() {
  return (
    <Box>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Box>
  )
}

export default App
