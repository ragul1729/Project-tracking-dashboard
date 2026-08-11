import React from 'react';
import {
    Box,Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    Portal,
    Text,
    HStack,
    Stack,
} from '@chakra-ui/react'

function Projectbox() {
    return(
        <div>
            <Popover trigger='hover' placement="right">
            <PopoverTrigger>
            <Box
            as="button"
            fontWeight="bold"
            borderWidth ="2px" borderColor="#44EABB" borderRadius="15"
            bg = "#080E2C"
            shadow="md"
            _hover={{text:"#F3FDFB"}}
            h = "100%"
            w = "200px">
            <Box
                mt="1"
                fontWeight="bold"
                fontSize='xl'
                as="h2"
                lineHeight="tight"
                color="white"
                isTruncated
                >
                Fire Detection
                </Box>
                <Box
                mt="1"
                as="h5"
                fontSize='sm'
                lineHeight="tight"
                color="#ffffff"
                isTruncated
                >
                Dept: CSE
                </Box>
                <Box
                mt="1"
                as="h4"
                fontSize='sm'
                lineHeight="tight"
                color="#ffffff"
                isTruncated
                >
                Area: Machine Learning
                </Box>
                <Box
                mt="1"
                as="h4"
                fontSize='sm'
                lineHeight="tight"
                color="#ffffff"
                isTruncated
                >
                Year: 2021
                </Box>
            </Box>
            </PopoverTrigger>
            <Portal>
            <PopoverContent bgColor='#080E2C'>
              <PopoverArrow />
              <PopoverHeader>
              <Text color='white' fontSize='s' fontWeight='bold'>
              Fire Detection
              </Text>
            </PopoverHeader>
              <PopoverBody>
                <Box>
                    <Stack spacing='3px'>
                    <HStack spacing='1px'>
                    <Text color='#D8E8E4' fontSize='xs' fontWeight='bold'>DETAILS</Text>
                    <Text color='#D8E8E4' fontSize='xs' fontWeight='bold'>: Fire Detection using deep learning</Text>
                    </HStack>
                    </Stack>
                </Box>
              </PopoverBody>
              <PopoverFooter>
              <Text color='white' fontSize='s' fontWeight='bold'>
                  2021-2022
              </Text>
              </PopoverFooter>
            </PopoverContent>
          </Portal>
          </Popover>
        </div>
    );
}

export default Projectbox;