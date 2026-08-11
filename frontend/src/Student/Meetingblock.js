import React from 'react';
import { Box,Stack, Text } from "@chakra-ui/react"
var data = [
    {
    "title" : "Webinar on Women in Engineering - Challenges and Achievements on August 28.",
    "Date" : "25/08/2021",
    "Time" : "5:30 - 7.30",
    },
    {
    "title" : "Webinar on Women in Engineering - Challenges and Achievements on August 28.",
    "Date" : "25/08/2021",
    "Time" : "5:30 - 7.30",
    },
    {
    "title" : "Webinar on Women in Engineering - Challenges and Achievements on August 28.",
    "Date" : "25/08/2021",
    "Time" : "5:30 - 7.30",
    },
];
function Meetingblock() {
  return (
    <div>
        <Box>
            <Stack>
            {data.map((info) => {
                console.log(info);
                return(
                <Box>
                <Box paddingLeft="5px" py="5px" h="100%" w="100%" bg="#F3FDFB">
                    <Text fontSize="12" fontWeight="bold" textAlign="Left" color="#080E2C">
                    {info.title}
                    </Text>
                    <Text fontSize="10" fontWeight="medium" textAlign="Left" color="#000000">
                    DATE : {info.Date}
                    </Text> 
                    <Text fontSize="10" fontWeight="medium" textAlign="Left" color="#000000">
                    TIME : {info.Time}
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
export default Meetingblock;