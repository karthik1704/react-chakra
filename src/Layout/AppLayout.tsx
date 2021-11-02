import { ReactElement } from 'react'

import { Box } from '@chakra-ui/react'

import { Outlet } from 'react-router-dom'

import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'

interface Props {}

function AppLayout({}: Props): ReactElement {
  return (
    <>
      <NavBar />
      <Box as="main" minH="70vh">
        <Outlet />
      </Box>

      <Footer />
    </>
  )
}

export default AppLayout
