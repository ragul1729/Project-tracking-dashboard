import React from 'react';
import { Box , Text } from "@chakra-ui/react"
var info = 
[
    {
    "name" : "Hari Krishna N",
    },
    {
    "name" : "Swapnika",
    },
    {
    "name" : "Ragul A",
    },
    {
    "name" : "Saiteja",
    },
];

function Teamblock() {
  return (
    <div>
        <Box pos="fixed" top="290px" left="20px" bg="#080E2C" h="200px" w="200px" 
         borderWidth ="2px" borderColor="#44EABB" paddingTop="10px" borderRadius="15">
            <stack>
            <Text paddingBottom="15px" fontSize="16" fontWeight="bold" textAlign="center" color="#FFFFFF">
            TEAM MEMBERS
            </Text>
            <Box h="2px" w="100%" bg="#44EABB"/>
            {info.map((data) => {
                return(
                <Box>
                <Box paddingLeft="5px" py="5px" h="100%" w="100%" bg="#080E2C">
                    <Text fontSize="14" fontWeight="bold" textAlign="Left" color="white">
                    {data.name}
                    </Text>
                </Box>
                <Box h="2px" w="100%" bg="#44EABB"/>
                </Box>
            )})}
            </stack>
        </Box>
    </div>
  );
}
export default Teamblock;