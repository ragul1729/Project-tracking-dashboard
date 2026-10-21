import React,{useState, useEffect} from 'react';
import Sidebar from '../Components/Sidebar'
import Adminnav from '../Components/Admin_nav'
import Sidedesign from '../Components/Sidedesign';
import { Box,HStack,Stack ,FormControl,FormLabel,Input,Textarea,Text,Button,Center} from '@chakra-ui/react';
import { AiFillCheckCircle } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
import axios from 'axios';
import Select from "react-select";

function Newproj() {
  const [projectno, setprojectno] = useState();
  const [pname, setpname] = useState();
  const [projdesc, setprojdesc] = useState();
  const [mentor, setmentor] = useState();
  const [degree, setDegree] = useState();
  const [department, setDepartment] = useState();
  const [status, setStatus] = useState();
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [s1,sets1] = useState();
  const [s2,sets2] = useState();
  const [s3,sets3] = useState();
  const [s4,sets4] = useState();

   useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/users/students"
        );

        console.log(response.data);
        const formattedStudents = response.data.map(item => ({
            value: item,
            label: item
          }));
        setStudents(formattedStudents);
      } catch (error) {
        console.error("Error fetching students:", error);
      } 

      try {
        const response = await axios.get(
          "http://localhost:8080/api/users/teachers"
        );

        console.log(response.data);
        const formattedTeachers = response.data.map(item => ({
            value: item,
            label: item
          }));
        setTeachers(formattedTeachers);
      } catch (error) {
        console.error("Error fetching teachers:", error);
      } 
    };

    fetchStudents();
  }, []);

  const handleSubmit = async(e) =>{
    const payload = {
        "teamNumber": projectno,
        "projectTitle": pname,
        "projectDescription": projdesc,
        "degree": degree,
        "department": department,
        "mentorId": mentor,
        "studentIds": [s1.value, s2.value, s3.value, s4.value],
        "status" : status
    }
    console.log(payload);

      try{
        const response = await axios.post(
            "http://localhost:8080/api/projects",
            JSON.stringify(payload),
            {
              headers: {
                'Content-Type': 'application/json' 
              }
            }
          );

          console.log(response.data);
          alert("Project created successfully");
      }catch (error) {

        console.error(error);

        if (error.response) {
          alert(
            error.response.data.message ||
            "Failed to create user"
          );
        } else {
          alert("Server connection failed");
        }
      }

    }

    const getAvailableStudents = (currentStudent) => {
      const selectedStudents = [s1, s2, s3, s4]
        .filter(Boolean)
        .filter((student) => student.value !== currentStudent?.value)
        .map((student) => student.value);

      return students
        .filter((student) => !selectedStudents.includes(student.value));
    };

    function checkprojectno(str)
    {
        var re = /^(?=.*\d).{1,}$/;
        return re.test(str);
    }
    function checkreg(str)
    {
        var re = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[."]).{16,}$/;
        return re.test(str);
    }

  return (
    <div>
      <Sidedesign/>
      <Adminnav/>       
      <Box pos="fixed" px="100px" py="10px" left="300px" top="30px" height="100vh" w="100%" bg="#F3FDFB" overflowY='auto'>
    
      <Box pos="fixed" borderRadius="md" padding="20px" left="1100px" top="80px" height="220px" w="200px" bg="#080E2C">
      <Stack spacing="10px">
      <HStack>
      {
        (checkprojectno(projectno))?
        <AiFillCheckCircle style={{color:"green"}}/>:<GiCancel style={{color:"red"}}/>
      }
      <Text color="white" fontSize="13px">Team Number</Text>
      </HStack>

      <HStack>
      {
        (checkreg(s1))?
        <AiFillCheckCircle style={{color:"green"}}/>:<GiCancel style={{color:"red"}}/>
      }
      <Text color="white" fontSize="13px">Register Number 1</Text>
      </HStack>

      <HStack>
      {
        (checkreg(s2))?
        <AiFillCheckCircle style={{color:"green"}}/>:<GiCancel style={{color:"red"}}/>
      }
      <Text color="white" fontSize="13px">Register Number 2</Text>
      </HStack>

      <HStack>
      {
        (checkreg(s3))?
        <AiFillCheckCircle style={{color:"green"}}/>:<GiCancel style={{color:"red"}}/>
      }
      <Text color="white" fontSize="13px">Register Number 3</Text>
      </HStack>

      <HStack>
      {
        (checkreg(s4))?
        <AiFillCheckCircle style={{color:"green"}}/>:<GiCancel style={{color:"red"}}/>
      }
      <Text color="white" fontSize="13px">Register Number 4</Text>
      </HStack>

      </Stack>
      </Box> 

      <HStack p='40px' spacing="150px">
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
        <FormControl id="projectno" isRequired>
        <FormLabel>Team Number</FormLabel>
        <Input type="number" placeholder="Enter Team Number" onChange={e => setprojectno(e.target.value)}/>
        </FormControl>

        <FormControl id="pname" isRequired>
        <FormLabel color='#080E2C'>Project Name</FormLabel>
        <Input  placeholder="Enter Project Name" onChange={e => setpname(e.target.value)}/>
        </FormControl>

        <FormControl id="projdesc" isRequired>
        <FormLabel>Project Description</FormLabel>
        <Textarea placeholder="Enter Team Number" onChange={e => setprojdesc(e.target.value)}/>
        </FormControl>

        <FormControl id="degree">
        <FormLabel>Degree</FormLabel>
        <Select placeholder="Choose Degree" options={[{value: "B-Tech", label: "B-Tech"}, {value: "M-Tech", label: "M-Tech"}]} onChange={e => setDegree(e.value)} />
        </FormControl>

        <FormControl id="department">
        <FormLabel>Department</FormLabel>
        <Select placeholder="Choose Department" options={[{label: "CSE", value: "CSE"}, {label: "EEE", value: "EEE"}, {label: "ME", value: "ME"}]} onChange={e => setDepartment(e.value)} />
        </FormControl>

        <FormControl id="mentor">
        <FormLabel>Mentor</FormLabel>
        <Select placeholder="Choose Mentor"  options={teachers} onChange={e => setmentor(e.value)} />
        </FormControl>

        {/* <FormControl id="s1" isRequired>
        <FormLabel color='#080E2C'>Student 1</FormLabel>
        <Input placeholder="Enter Student 1 roll number" onChange={e => sets1(e.target.value)}/>
        </FormControl> */}

        <FormControl id="s1" isRequired>
          <FormLabel>Student 1</FormLabel>
          <Select
            value={s1}
            onChange={(option) => {
              sets1(option ? option : "");
            }}
            options={getAvailableStudents(s1)}
            isSearchable
            isClearable
            placeholder="Search student roll number..."
            noOptionsMessage={() => "No students found"}
          />
        </FormControl>

        <FormControl id="s2" isRequired>
          <FormLabel>Student 2</FormLabel>
          <Select
            value={s2}
            onChange={(option) => {
              sets2(option ? option : "");
            }}
            options={getAvailableStudents(s2)}
            isSearchable
            isClearable
            placeholder="Search student roll number..."
            noOptionsMessage={() => "No students found"}
          />
        </FormControl>

        <FormControl id="s3" isRequired>
          <FormLabel>Student 3</FormLabel>
          <Select
            value={s3}
            onChange={(option) => {
              sets3(option ? option : "");
            }}
            options={getAvailableStudents(s3)}
            isSearchable
            isClearable
            placeholder="Search student roll number..."
            noOptionsMessage={() => "No students found"}
          />
        </FormControl>

        <FormControl id="s4" isRequired>
          <FormLabel>Student 4</FormLabel>
          <Select
            value={s4}
            onChange={(option) => {
              sets4(option ? option : "");
            }}
            options={getAvailableStudents(s4)}
            isSearchable
            isClearable
            placeholder="Search student roll number..."
            noOptionsMessage={() => "No students found"}
          />
        </FormControl>

        <FormControl id="status">
        <FormLabel>Status</FormLabel>
        <Select placeholder="Choose Status"  options={[{label: "Ongoing", value: "Ongoing"}, {label: "Completed", value: "Completed"}]} onChange={e => setStatus(e.value)} />
        </FormControl>
        {/* <FormControl id="s2" isRequired>
        <FormLabel color='#080E2C'>Student 2</FormLabel>
        <Input placeholder="Enter Student 2 roll number" onChange={e => sets2(e.target.value)}/>
        </FormControl>

        <FormControl id="s3" isRequired>
        <FormLabel color='#080E2C'>Student 3</FormLabel>
        <Input placeholder="Enter Student 3 roll number" onChange={e => sets3(e.target.value)}/>
        </FormControl>

        <FormControl id="s4" isRequired>
        <FormLabel color='#080E2C'>Student 4</FormLabel>
        <Input placeholder="Enter Student 4 roll number" onChange={e => sets4(e.target.value)}/>
        </FormControl> */}

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