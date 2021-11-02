import { FC, ReactElement, useEffect } from 'react'

import { Button, Flex, Heading, Slide, useDisclosure } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const PageNotFound: FC = (): ReactElement => {
  const { isOpen, onToggle } = useDisclosure()
  useEffect(() => {
    onToggle()
  }, [])
  return (
    <Slide direction="bottom" in={isOpen} unmountOnExit>
      <Flex align="center" justify="center" minH="100vh" direction="column">
        <Heading mb={2}>OOPS! I can't find page you looking for 😵😵😵</Heading>
        <Button
          colorScheme="purple"
          variant="solid"
          size="lg"
          as={Link}
          to=".."
        >
          Go Back
        </Button>
      </Flex>
    </Slide>
  )
}

export default PageNotFound
