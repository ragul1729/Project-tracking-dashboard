import React from 'react';
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from "@chakra-ui/react"
import Path from './Route';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Path />
    </ChakraProvider>
  </React.StrictMode>
);