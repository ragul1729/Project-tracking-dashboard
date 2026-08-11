import React from 'react';
import { Box , Text } from "@chakra-ui/react"

var info = 
[
    {
    "name" : "Ms. Nalinadevi K",
    },
    {
    "name" : "Ms. Jeena KK",
    },
    {
    "name" : "Dr. T.Gireesh Kumar ",
    },
    
];

function PanelMembers() {
  return (
    <div>
        <Box pos="fixed" top="195px" left="20px" bg="#080E2C" h="200px" w="230px" 
         borderWidth ="2px" borderColor="#44EABB" paddingTop="10px" borderRadius="15">
            <stack>
            <Text paddingBottom="15px" fontSize="20" fontWeight="bold" textAlign="center" color="#FFFFFF">
            Panel Members
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
export default PanelMembers;