import { useState } from "react";

import { Box, Button, ChakraProvider, useColorMode } from "@chakra-ui/react";

import theme from "./theme";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <Button colorScheme="teal" variant="solid" onClick={toggleColorMode}>
        {colorMode}
      </Button>
    </Box>
  );
}

export default App;
