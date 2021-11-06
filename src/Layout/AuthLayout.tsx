import { ReactElement } from 'react'

import { Box } from '@chakra-ui/react'

import { Outlet } from 'react-router-dom'

interface Props {}

const AuthLayout = ({}: Props): ReactElement => {
  return (
    <Box
      w="100%"
      h="100vh"
      bgGradient="linear(to-r, whiteAlpha.100, purple.300)"
    >
      <Outlet />
    </Box>
  )
}

export default AuthLayout
