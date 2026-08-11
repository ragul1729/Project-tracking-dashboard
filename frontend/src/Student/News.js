import React from 'react';
import { Box,HStack,Stack, Text } from "@chakra-ui/react"
import Newsblock from './Newsblock';
function News() {
  return (
    <div>
        <Box pos="fixed" top="70px" 
        overflowY="auto" right ="20px" h="250px" w="350px" 
        bg="#F3FDFB" borderColor="#080E2C" border="2px"
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
                  <img src="https://img.icons8.com/fluency-systems-filled/20/ffffff/news.png"/>
                  <Text fontWeight="bold" textAlign="center" color="white"> NEWS </Text>
                  </HStack>
                </Box>
                <Newsblock/>
            </Stack>
        </Box>
    </div>
  );
}
export default News;