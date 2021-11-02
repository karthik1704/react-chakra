import {
  Flex,
  Button,
  Box,
  useColorMode,
  Heading,
  HStack,
  IconButton,
  Icon,
  Link,
} from '@chakra-ui/react'

import { Link as RouteLink } from 'react-router-dom'

import { MoonIcon } from '@chakra-ui/icons'
import { AiFillGithub } from 'react-icons/ai'

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex
      as="nav"
      position="sticky"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={2}
      p={8}
      boxShadow="xs"
      bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
      // color={["white", "white", "primary.700", "primary.700"]}
    >
      <Heading>React-Chakra</Heading>
      <HStack spacing={8}>
        <Button colorScheme="teal" variant="link" as={RouteLink} to="/">
          Home
        </Button>
        <Button colorScheme="teal" variant="link" as={RouteLink} to="/about">
          About
        </Button>
        <Button colorScheme="teal" variant="solid" as={RouteLink} to="login">
          Login
        </Button>
        <Box mr={1}>
          <IconButton
            variant="ghost"
            icon={<MoonIcon />}
            aria-label="theme toggle"
            onClick={toggleColorMode}
          />
          <IconButton
            variant="ghost"
            as={Link}
            icon={<Icon as={AiFillGithub} />}
            aria-label="Repo Link"
            href="https://github.com/karthik1704/react-chakra"
            isExternal
          />
        </Box>
      </HStack>
    </Flex>
  )
}

export default NavBar
