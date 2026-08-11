import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from "@chakra-ui/react"
import Path from './Route';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Path />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);