import React from 'react';
import { Box,Stack, Text } from "@chakra-ui/react"
var data = [
    {
    "title" : "Amrita Vishwa Vidyapeetham Accredited (Cycle-3) with NAAC A++ Grade",
    "summary" : "Amrita Vishwa Vidyapeetham has been accredited (Cycle-3) with an A++ the highest grade by the National Assessment",
    },
    {
    "title" : "Amrita Vishwa Vidyapeetham Accredited (Cycle-3) with NAAC A++ Grade",
    "summary" : "Amrita Vishwa Vidyapeetham has been accredited (Cycle-3) with an A++ the highest grade by the National Assessment",
    },
    {
    "title" : "Amrita Vishwa Vidyapeetham Accredited (Cycle-3) with NAAC A++ Grade",
    "summary" : "Amrita Vishwa Vidyapeetham has been accredited (Cycle-3) with an A++ the highest grade by the National Assessment",
    },
];
function Newsblock() {
  return (
    <div>
        <Box>
            <Stack>
            {data.map((info) => {
                return(
                <Box>
                <Box paddingLeft="5px" py="5px" h="100%" w="100%" bg="#F3FDFB">
                    <Text fontSize="14" fontWeight="bold" textAlign="Left" color="#080E2C">
                    {info.title}
                    </Text>
                    <Text fontSize="10" fontWeight="normal" textAlign="Left" color="#000000">
                    {info.summary}
                    </Text> 
                </Box>
                <Box h="2px" w="100%" bg="#080E2C"/>
                </Box>
            )})}
            </Stack>
        </Box>
    </div>
  );
}
export default Newsblock;