import React,{useState} from 'react';
import Sidebar from '../Components/Sidebar'
import Adminnav from '../Components/Admin_nav'
import Sidedesign from '../Components/Sidedesign';
import { Box,HStack,Stack ,FormControl,FormLabel,Input,Select,Text,Button,Center} from '@chakra-ui/react';
import { AiFillCheckCircle } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";

function Newproj() {
  const [teamno, setteamno] = useState();
  const [pname, setpname] = useState();
  const [mentor, setmentor] = useState();
  const [s1,sets1] = useState();
  const [s2,sets2] = useState();
  const handleSubmit = async(e) =>{
    const out = {
        "Team number": teamno,
        "Project Name": pname,
        "Mentor": mentor,
        "Student 1": s1,
        "Student 2": s2,
    }
    console.log(out);
    }
    function checkteamno(str)
    {
        var re = /^(?=.*\d).{1,}$/;
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
      <Box pos="fixed" px="100px" py="10px" left="300px" top="30px" height="100vh" w="100%" bg="#F3FDFB">
    
      <Box pos="fixed" borderRadius="md" padding="20px" left="1100px" top="80px" height="120px" w="150px" bg="#080E2C">
      <Stack spacing="10px">
      <HStack>
      {
        (checkteamno(teamno))?
        <AiFillCheckCircle style={{color:"green"}}/>:<GiCancel style={{color:"red"}}/>
      }
      <Text color="white" fontSize="13px">Team Number</Text>
      </HStack>

      <HStack>
      {
        (checkroll(s1))?
        <AiFillCheckCircle style={{color:"green"}}/>:<GiCancel style={{color:"red"}}/>
      }
      <Text color="white" fontSize="13px">Roll Number 1</Text>
      </HStack>

      <HStack>
      {
        (checkroll(s2))?
        <AiFillCheckCircle style={{color:"green"}}/>:<GiCancel style={{color:"red"}}/>
      }
      <Text color="white" fontSize="13px">Roll Number 2</Text>
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
        >CREATE NEW PROJECT</Text>
        <Box bgColor='black' h='2px' w='100%'/>
        </Box>
        <Box py='30px'>
        <FormControl id="teamno" isRequired>
        <FormLabel>Team Number</FormLabel>
        <Input type="number" placeholder="Enter Team Number" onChange={e => setteamno(e.target.value)}/>
        </FormControl>

        <FormControl id="pname" isRequired>
        <FormLabel color='#080E2C'>Project Name</FormLabel>
        <Input  placeholder="Enter Project Name" onChange={e => setpname(e.target.value)}/>
        </FormControl>

        <FormControl id="mentor">
        <FormLabel>Mentor</FormLabel>
        <Select placeholder="Choose Mentor" onChange={e => setmentor(e.target.value)}>
            <option>Jeyakumar</option>
            <option>Suchitra</option>
            <option>Shanmuga priya</option>
        </Select>
        </FormControl>

        <FormControl id="s1" isRequired>
        <FormLabel color='#080E2C'>Student 1</FormLabel>
        <Input placeholder="Enter Student 1 roll number" onChange={e => sets1(e.target.value)}/>
        </FormControl>

        <FormControl id="s2" isRequired>
        <FormLabel color='#080E2C'>Student 2</FormLabel>
        <Input placeholder="Enter Student 2 roll number" onChange={e => sets2(e.target.value)}/>
        </FormControl>

        <Center>
        <Button bgColor = "#080E2C" 
                width='full' 
                color="white"
                mt={4}
                _hover={{
                    color:"#44EABB"
                    }}
                onClick={handleSubmit}
                >
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

export default Newproj;