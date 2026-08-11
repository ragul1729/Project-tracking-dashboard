import React from 'react';
import { Box } from "@chakra-ui/react"
import amrita from "../Assets/amrita.png"
function Navbar() {
  return (
    <div>
        <Box pos="fixed" h="50px" w="100%" bg="#080E2C">
            <img alt= "logo" src ={amrita} height="50px" width="290px" style={{paddingLeft: 20, paddingTop:5 }} ></img>
        </Box>
        <Box pos="fixed" top="50px" h="3px" w="100%" bg="#44EABB">
        </Box>
    </div>
  );
}

export default Navbar;