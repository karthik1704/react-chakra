import { FC, ReactElement } from 'react'

import { Button, Flex, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const PageNotFound: FC = (): ReactElement => {
  return (
    <Flex align="center" justify="center" minH="100vh" direction="column">
      <Heading mb={2}>OOPS! I can't find page you looking for 😵😵😵</Heading>
      <Button colorScheme="purple" variant="solid" size="lg" as={Link} to="..">
        Go Back
      </Button>
    </Flex>
  )
}

export default PageNotFound
