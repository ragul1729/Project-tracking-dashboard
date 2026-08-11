import React from 'react';
import { Box,stack, Text } from "@chakra-ui/react"
var info = 
    {
    "projname" : "Fire detection using DL",
    "mentor" : "Jeyakumar G",
    };
function Mentorblock() {
  return (
    <div>
        <Box pos="fixed" top="155px" left="20px" bg="#080E2C" h="120px" w="200px" 
         borderWidth ="2px" borderColor="#44EABB" paddingTop="10px" borderRadius="15">
            <stack>
            <Text paddingBottom="10px" fontSize="16" fontWeight="bold" textAlign="center" color="#FFFFFF">
            PROJECT DETAILS
            </Text>
            <Box h="2px" w="100%" bg="#44EABB"/>
            <Text paddingTop="10px" fontSize="16" fontWeight="normal" textAlign="center" color="#FFFFFF">
            {info.projname}
            </Text>
            <Text fontSize="14" fontWeight="normal" textAlign="center" color="#44EABB">
            {info.mentor}
            </Text> 
            </stack>
        </Box>
    </div>
  );
}
export default Mentorblock;