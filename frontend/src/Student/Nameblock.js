import React from 'react';
import { Box,Stack, Text } from "@chakra-ui/react"
var info = 
    {
    "name" : "Kiran Kumar A",
    "role" : "Student",
    };
function Nameblock() {
  return (
    <div>
        <Box pos="fixed" top="70px" left="20px" bg="#080E2C" h="75px" w="200px" 
         borderWidth ="2px" borderColor="#44EABB" py="10px" borderRadius="15">
            <Stack>
            <Text fontSize="20" fontWeight="bold" textAlign="center" color="#FFFFFF">
            {info.name}
            </Text>
            <Text fontSize="16" fontWeight="normal" textAlign="center" color="#44EABB">
            {info.role}
            </Text> 
            </Stack>
        </Box>
    </div>
  );
}
export default Nameblock;