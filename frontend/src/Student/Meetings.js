import React from 'react';
import { Box,Stack, Text,HStack } from "@chakra-ui/react"
import Meetingblock from './Meetingblock';
function Meetings() {
    return (
        <div>
            <Box pos="fixed" top="340px" right ="20px" 
            h="250px" w="350px" bg="#F3FDFB" borderColor="#080E2C" border="2px"
            overflowY="auto"
            css={{
                '&::-webkit-scrollbar': {
                  width: '4px',
                },
                '&::-webkit-scrollbar-track': {
                  width: '6px',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: "#080E2C",
                  borderRadius: '24px',
                },
            }}>
                <Stack>
                    <Box h="27.25px" w="100%" bg="#080E2C">
                    <HStack paddingLeft="5px">
                    <img src="https://img.icons8.com/ios-filled/20/ffffff/meeting-room.png"/>
                    <Text textAlign="center"  fontWeight="bold" color="white"> UPCOMING MEETINGS </Text>
                    </HStack>
                    </Box>
                    <Meetingblock/>
                </Stack>
            </Box>
        </div>
      );
}

export default Meetings;