/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Resume from "page";
import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";

const App = () => {
  return (
    <>
      <ChakraProvider>
        <Resume />
      </ChakraProvider>
    </>
  );
};

export default App;
