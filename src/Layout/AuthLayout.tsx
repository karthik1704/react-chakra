import { ReactElement } from 'react'

import { Box } from '@chakra-ui/react'

import { Outlet } from 'react-router-dom'

interface Props {}

const AuthLayout = ({}: Props): ReactElement => {
  return (
    <Box>
      <Outlet />
    </Box>
  )
}

export default AuthLayout
