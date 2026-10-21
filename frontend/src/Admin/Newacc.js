import React, {useState} from 'react';
import axios from 'axios';
import Sidebar from '../Components/Sidebar'
import Adminnav from '../Components/Admin_nav'
import Sidedesign from '../Components/Sidedesign';
import { AiFillCheckCircle } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
import ReactSelect from "react-select";

import { Box,HStack,Stack ,FormControl,FormLabel,Input,Select,Text,Button,Center } from '@chakra-ui/react';
import { Menu, MenuButton, MenuList, MenuOptionGroup, MenuItemOption } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

function Newacc() {

  const [email, setemail] = useState();
  const [year, setyear] = useState();
  const [regNum, setregnum] = useState();
  const [name,setName] = useState();
  const [projectID, setprojectID] = useState();
  const [roles, setRoles] = useState(["STUDENT"]);
  const [phone, setPhone] = useState("");
  const [dob, setdob] = useState(null);
  const [doj, setdoj] = useState(null);
  const [degree, setDegree] = useState();
  const [department, setDepartment] = useState();
  const [projectLevels, setProjectLevels] = useState([]);
  const [userType, setUserType] = useState("STUDENT");

  const projectOptions = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" }
];
  
  const handleSubmit = async () => {
    try {

      // const roleString = roles.join(" ");
      // console.log(roleString);
      let payload;
      if(userType === "STUDENT"){
        payload = JSON.stringify({
          email,
          name,
          "roles": roles,
          regNum,
          "academicYear":year,
          "degree": degree? degree.value : null,
          "department": department? department.value : null,
          phone,
          dob,
          doj,
          projectID
        });
      }else{
          payload = JSON.stringify({
          email,
          name,
          "roles": roles,
          regNum,
          "department": department? department.value : null,
          phone,
          dob,
          doj
        });
      }

      console.log(payload);

      const response = await axios.post(
        "http://localhost:8080/api/users",
        payload,
        {
          headers: {
            'Content-Type': 'application/json' 
          }
        }
      );

      console.log(response.data);

      alert("User created successfully");

      // Clear form

      setemail("");
      setName("");
      setregnum("");
      setDegree("");
      setDepartment("");
      setyear("");
      setdob();
      setdoj();
      setPhone("");
      setprojectID("");

    } catch (error) {

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
  };

  
  function validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  }

  function checkPassword(str)
  {
      var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      return re.test(str);
  }
  function checkreg(str)
  {
      var re = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[."]).{16,}$/;
      return re.test(str);
  }
  const isInvalid = phone.length > 0 && !/^\d{10}$/.test(phone)

  const handleRoleChange = (e) => {
    const selectedRoles = Array.from(
      e.target.selectedOptions,
      option => option.value
    );

    setRoles(selectedRoles);
  };

  return (
    <div>
      <Sidedesign/>
      <Adminnav/>  
      <Box pos="fixed" paddingLeft="100px" py="10px" left="300px" top="30px" height="100vh" w="100%" bg="#F3FDFB"  overflowY='auto'>
      
      <Box pos="fixed" borderRadius="md" padding="20px" left="1100px" top="80px" height="180px" w="150px" bg="#080E2C">
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
        (checkPassword())?
        <AiFillCheckCircle style={{color:"green"}}/>:<GiCancel style={{color:"red"}}/>
      }
      <Text color="white" fontSize="14px">Password</Text>
      </HStack>

      <HStack>
      {
        (checkreg(regNum))?
        <AiFillCheckCircle style={{color:"green"}}/>:<GiCancel style={{color:"red"}}/>
      }
      <Text color="white" fontSize="14px">Register number</Text>
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

      <Tabs
        variant="enclosed"
        colorScheme="teal"
        onChange={(index) => {
           const type = index === 0 ? "STUDENT" : "TEACHER";
          setUserType(type);
          setRoles(
            type === "STUDENT" ? ["STUDENT"] : ["TEACHER"]
          );
        }}
      >
        <TabList>
          <Tab>Student</Tab>
          <Tab>Teacher</Tab>
        </TabList>

        </Tabs>
        <Box py='30px'>
        <FormControl id="email" isRequired>
        <FormLabel>Email address</FormLabel>
        <Input type="email" placeholder="Email id" onChange={e => setemail(e.target.value)}/>
        </FormControl>

        <FormControl id="name" isRequired>
        <FormLabel color='#080E2C'>Name</FormLabel>
        <Input  placeholder="name" onChange={e => setName(e.target.value)}/>
        </FormControl>

        <FormControl id="roles">
          <FormLabel color='#080E2C'>Roles</FormLabel>

          <Menu closeOnSelect={false} color='#080E2C'>
            <MenuButton
              as={Button}
              width="100%"
              textAlign="left"
              fontWeight="normal"
              isDisabled={userType === "STUDENT"}
            >
              {roles.length > 0
                ? roles.join(", ")
                : "Select Roles"}
            </MenuButton>

            <MenuList>
                  <MenuOptionGroup
                      type="checkbox"
                      value={roles}
                      isDisabled={userType === "STUDENT"}
                      onChange={(values) => {
                        if (userType === "TEACHER") {
                          setRoles([
                            "TEACHER",
                            ...values.filter((role) => role !== "TEACHER"),
                          ]);
                        }
                      }}
                    >
                <MenuItemOption value="MENTOR">
                  MENTOR
                </MenuItemOption>

                <MenuItemOption value=" PANEL_MEMBER">
                  PANEL MEMBER
                </MenuItemOption>

                <MenuItemOption value="BATCH_COORDINATOR">
                  BATCH COORDINATOR
                </MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
        </FormControl>

        <FormControl id="register-number" >
        <FormLabel color='#080E2C'>Register Number</FormLabel>
        <Input placeholder="ID" onChange={e => setregnum(e.target.value)}/>
        </FormControl>

        {userType === "STUDENT" && (
        <>
          <FormControl id="degree">
          <FormLabel>Degree</FormLabel>
          <ReactSelect placeholder="Choose Degree" value={degree} options={[{value: "B-Tech", label: "B-Tech"}, {value: "M-Tech", label: "M-Tech"}]} onChange={e => setDegree(e)} />
          </FormControl>
        </>
        )}

        <FormControl id="department">
        <FormLabel>Department</FormLabel>
        <ReactSelect placeholder="Choose Department" value={department} options={[{label: "CSE", value: "CSE"}, {label: "EEE", value: "EEE"}, {label: "ME", value: "ME"}]} onChange={e => {setDepartment(e)}} />
        </FormControl>

        {userType === "STUDENT" && (
        <>
          <FormControl id="year" isRequired>
          <FormLabel color='#080E2C'>Year</FormLabel>
          <Select placeholder="Choose Year" onChange={e => setyear(e.target.value)}>
              <option>2007</option>
              <option>2008</option>
              <option>2009</option>
              <option>2010</option>
              <option>2011</option>
              <option>2012</option>
              <option>2013</option>
              <option>2014</option>
              <option>2015</option>
              <option>2016</option>
              <option>2017</option>
              <option>2018</option>
              <option>2019</option>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
              <option>2027</option>
          </Select>
          </FormControl>
        </>
        ) }

        <FormControl>
          <FormLabel htmlFor="dob">Date of Birth</FormLabel>
          <Input
            id="dob"
            value={dob}
            onChange={e => setdob(e.target.value)}
            type="date"
            placeholder="Select your Date of Birth"
            max={new Date().toISOString().split("T")[0]} // Restricts future dates
          />
        </FormControl>

      {userType === "TEACHER" && (
        <>
        <FormControl>
          <FormLabel htmlFor="dob">Date of Joining</FormLabel>
          <Input
            id="doj"
            value={doj}
            onChange={e => setdoj(e.target.value)}
            type="date"
            placeholder="Select your Date of Joining"
            max={new Date().toISOString().split("T")[0]} // Restricts future dates
          />
        </FormControl>
        </> 
      ) }

        <FormControl isInvalid={isInvalid}>
          <FormLabel htmlFor="phone">Phone Number</FormLabel>
          <Input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))} 
            maxLength={10} 
            placeholder="Enter 10-digit phone number"
          />
        </FormControl>

        {/* {userType === "TEACHER" && (
        <>
          <FormControl id="project-id" >
          <FormLabel color='#080E2C'>Project ID</FormLabel>
          <Input placeholder="Project ID" onChange={e => setprojectID(e.target.value)}/>
          </FormControl>
        </>
        ) }

        {userType === "TEACHER" && (
        <>
          <FormControl id="projects">
            <FormLabel>Projects Mentored</FormLabel>
            <ReactSelect
              isMulti
              isSearchable
              options={projectOptions}
              value={projectLevels}
              onChange={setProjectLevels}
              placeholder="Select Projects"
              />
          </FormControl>
        </>
        ) } */}

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