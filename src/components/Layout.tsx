import { ChakraProvider, Flex } from "@chakra-ui/react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { LoginForm } from "./loginForm";

export const Layout = () => {
  return (
    <>
      <ChakraProvider>
        <Flex
          width="100vw"
          height="100vh"
          direction="column"
          alignItems="center"
          backgroundColor="#1e192ced"
          color="#ffffff"
        >
          <Header />
          <LoginForm />
          <Footer />
        </Flex>
      </ChakraProvider>
    </>
  );
};
