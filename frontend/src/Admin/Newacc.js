import React, {useState} from 'react';
import Sidebar from '../Components/Sidebar'
import Adminnav from '../Components/Admin_nav'
import Sidedesign from '../Components/Sidedesign';
import { AiFillCheckCircle } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";

import { Box,HStack,Stack ,FormControl,FormLabel,Input,Select,Text,Button,Center} from '@chakra-ui/react';
function Newacc() {

  const [email, setemail] = useState();
  const [role, setrole] = useState();
  const [id, setid] = useState();
  const [password,setpassword] = useState();

  const handleSubmit = async(e) =>{
    const out = {
        "Email id": email,
        "Role": role,
        "ID": id,
        "Password": password,
    }
    console.log(out);
  }

  function validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  }

  function checkPassword(str)
  {
      var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      return re.test(str);
  }
  function checkroll(str)
  {
      var re = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[."]).{16,}$/;
      return re.test(str);
  }

  return (
    <div>
      <Sidedesign/>
      <Adminnav/>  
      <Box pos="fixed" paddingLeft="100px" py="10px" left="300px" top="30px" height="100vh" w="100%" bg="#F3FDFB">
      
      <Box pos="fixed" borderRadius="md" padding="20px" left="1100px" top="80px" height="120px" w="150px" bg="#080E2C">
      <Stack spacing="10px">
      <HStack>
      {
        (validateEmail(email))?
        <AiFillCheckCircle style={{color:"green"}}/>:<GiCancel style={{color:"red"}}/>
      }
      <Text color="white" fontSize="14px">Email address</Text>
      </HStack>

      <HStack>
      {
        (checkPassword(password))?
        <AiFillCheckCircle style={{color:"green"}}/>:<GiCancel style={{color:"red"}}/>
      }
      <Text color="white" fontSize="14px">Password</Text>
      </HStack>

      <HStack>
      {
        (checkroll(id))?
        <AiFillCheckCircle style={{color:"green"}}/>:<GiCancel style={{color:"red"}}/>
      }
      <Text color="white" fontSize="14px">Roll number</Text>
      </HStack>

      </Stack>
      </Box> 

      <HStack p='40px' spacing='150px'>
        <Box w='600px' h='100%' p='20px' border='2px' bgColor='#D8E8E4'>
        <Box>
        <Text 
        fontSize= '20' 
        fontWeight='bold'
        color='black'
        >ADD NEW PTD ACCOUNT</Text>
        <Box bgColor='black' h='2px' w='100%'/>
        </Box>

        <Box py='30px'>
        <FormControl id="email" isRequired>
        <FormLabel>Email address</FormLabel>
        <Input type="email" placeholder="Email id" onChange={e => setemail(e.target.value)}/>
        </FormControl>

        <FormControl id="password" isRequired>
        <FormLabel color='#080E2C'>Password</FormLabel>
        <Input  placeholder="password" onChange={e => setpassword(e.target.value)}/>
        </FormControl>

        <FormControl id="role">
        <FormLabel>Role</FormLabel>
        <Select placeholder="choose role" onChange={e => setrole(e.target.value)}>
            <option>Student</option>
            <option>Mentor</option>
            <option>Panel member</option>
            <option>Batch Coordinator</option>
        </Select>
        </FormControl>

        <FormControl id="id" isRequired>
        <FormLabel color='#080E2C'>ID</FormLabel>
        <Input placeholder="ID" onChange={e => setid(e.target.value)}/>
        </FormControl>
        <Center>
        <Button bgColor = "#080E2C" 
                width='full' 
                color="white"
                mt={4}
                _hover={{
                    color:"#44EABB"
                    }}
              onClick={handleSubmit}>
            ADD USER
        </Button>
        </Center>
        </Box>
        </Box>
        </HStack>
      </Box>
      <Sidebar/> 
    </div>
  );
}

export default Newacc;