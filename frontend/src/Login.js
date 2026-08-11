  
import React from "react";
import { Box,Flex,FormControl,FormLabel,Input,
    Stack,Alert,AlertIcon,AlertTitle,Button
} from '@chakra-ui/react'
import Navbar from "./Components/Navbar";
function Login() {
  return (
    <div> 
        <Navbar/>
        <Flex minHeight='100vh' width='full' px="400px" align='center' bg="#D8E8E4" >
        <Box 
            borderWidth={1}
            px={4}
            width='full'
            maxWidth='500px'
            borderRadius={10}
            textAlign='center'
            boxShadow='lg'
            bg = "#080E2C"
            borderWidth ="4px" borderColor="#44EABB"
        >
        <Box my={6} px={6} textAlign='left'>
        <form>
        <FormControl id="email">
            <FormLabel color="white">Email address</FormLabel>
            <Input
            type ='email' 
            placeholder='Enter your email address' 
            color="black"
            bg="white"
            />
        </FormControl>

        <FormControl mt={4}>
            <FormLabel color="white">Password</FormLabel>
            <Input 
            type='password' 
            placeholder='Enter your password'
            color="black"
            bg="white"
            />
        </FormControl>
        <Button bgColor = "#44EABB" 
            width='full' 
            mt={4}
            color="black"
            _hover={{
                color:"white"
                }}
            >LOG IN</Button>
        </form>
        </Box>
        </Box>
        </Flex>
    </div>
  );
}
export default Login;