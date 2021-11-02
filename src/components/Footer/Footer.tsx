import { ReactElement } from "react";

import { Box, Container, Divider, Text } from "@chakra-ui/react";

const Footer = (): ReactElement => {
  return (
    <Container maxW="container.xl">
      <Divider />
      <Box display="flex" justifyContent="center" alignItems="center">
        <Text textAlign="center">&copy; copyright by React-Chakra</Text>
      </Box>
    </Container>
  );
};

export default Footer;
