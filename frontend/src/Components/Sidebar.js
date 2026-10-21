import React from 'react';
import { Box, VStack ,Text, Button, HStack, Center } from "@chakra-ui/react"
import { useHistory } from 'react-router-dom';

function Sidebar() {
  const history = useHistory();
  const add = () => history.push('/addacc'); 
  const create = () => history.push('/createproj');
  const updateAcc = () => history.push('/updateacc'); 
  const updateProj = () => history.push('/updateproj'); 

  return (
    <div>
    <Box pos="fixed" left="0" bg= "#080E2C" top="0px" w="350px" h="100vh" borderRadius="3xl">
        <Text pos="fixed" top="20px" left="25px" fontSize="30" fontWeight="bold"
                fontFamily="heading" color="#f0f5f9">
        ADMIN DASHBOARD
        </Text>
        <Box 
        pos="fixed" top="100px" borderRadius="lg" bg="#D8E8E4" w="250px" 
        left="50px" h="400px"  py="40px">
            <VStack spacing="30px">
                <HStack>
                <img alt="icon" src="https://img.icons8.com/windows/32/000000/create-new.png"/>
                <Button  bg="#D8E8E4" w="170px" _hover={{color:"#44EABB"}} 
                fontSize="20" fontWeight="bold" alignContent="flex-start"
                fontFamily="heading" color="black" onClick={create}>
                    Create New Project
                </Button>
                </HStack>
                 <HStack>
                <img alt="icon" src="https://img.icons8.com/?size=24&id=REaAov7RbGMN&format=png&color=000000"/>
                <Button  bg="#D8E8E4" w="170px" _hover={{color:"#44EABB"}} 
                fontSize="20" fontWeight="bold" alignContent="flex-start"
                fontFamily="heading" color="black" onClick={updateProj}>
                    Update Project
                </Button>
                </HStack>
                <HStack>
                <img alt="icon" src="https://img.icons8.com/material-outlined/24/000000/add.png"/>
                <Button bg="#D8E8E4" w="170px" _hover={{color:"#44EABB"}} 
                fontSize="20" fontWeight="bold" 
                fontFamily="heading" color="black" onClick={add} >
                    Add New Account
                </Button>
                </HStack>
                <HStack>
                <img alt="icon" src="https://img.icons8.com/?size=24&id=11676&format=png&color=000000"/>
                <Button bg="#D8E8E4" w="170px" _hover={{color:"#44EABB"}} 
                fontSize="20" fontWeight="bold" 
                fontFamily="heading" color="black" onClick={updateAcc} >
                    Update Account
                </Button>
                </HStack>
                <HStack>
                <img alt="icon" src="https://img.icons8.com/material-outlined/24/000000/megaphone.png"/>
                <Button bg="#D8E8E4" w="170px" maxH="40px" _hover={{color:"#44EABB"}}
                fontSize="20" fontWeight="bold" alignItems="center"
                fontFamily="heading" color="black">
                    Broadcast An Info
                </Button>
                </HStack>
                

            </VStack>
        </Box>
        <Box pos="fixed" py="30px" top="530px" borderRadius="2xl" w="250px" left="50px" h="150px" bg="#D8E8E4">
        <Center>
        <img alt="icon" src="https://img.icons8.com/color/96/000000/rebalance-portfolio--v1.png"/>
        </Center>
        </Box>
    </Box>
    </div>
  );
}

export default Sidebar;