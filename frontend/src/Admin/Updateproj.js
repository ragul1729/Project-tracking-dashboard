import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Adminnav from "../Components/Admin_nav";
import Sidedesign from "../Components/Sidedesign";
import axios from "axios";

import {
  Box,
  HStack,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  Button,
  Center,
} from "@chakra-ui/react";

import { AiFillCheckCircle } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";

function Updateproj() {
  const [searchTeamNo, setSearchTeamNo] = useState("");
  const [isProjectLoaded, setIsProjectLoaded] = useState(false);

  const [projectId, setProjectId] = useState(null);

  const [teamno, setteamno] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [mentor, setmentor] = useState("");
  const [s1, sets1] = useState("");
  const [s2, sets2] = useState("");
  const [s3, sets3] = useState("");
  const [s4, sets4] = useState("");

  function checkteamno(str) {
    var re = /^(?=.*\d).{1,}$/;
    return re.test(str || "");
  }

  function checkreg(str) {
    var re = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[."]).{16,}$/;
    return re.test(str || "");
  }

  const handleSearch = async () => {
    try {
      console.log(searchTeamNo);
      const response = await axios.get(
        `http://localhost:8080/api/projects/${searchTeamNo}`
      );

      console.log(response.data);
      // if (!response.ok) {
      //   throw new Error("Project not found");
      // }

      const project = await response.data;

      for(let i=0; i<project.studentIds.length; i++){
        if(i==0){
          sets1(project.studentIds[i]);
        }
        else if(i==1){
          sets2(project.studentIds[i]);
        }
        else if(i==2){
          sets3(project.studentIds[i]);
        }
        else if(i==3){
          sets4(project.studentIds[i]);
        }
      }
      setProjectId(project.projectID);

      setteamno(project.teamNumber || "");
      setProjectTitle(project.projectTitle || "");
      setmentor(project.mentorId || "");

      setIsProjectLoaded(true);

      alert("Project Loaded Successfully");
    } catch (err) {
      console.error(err);
      alert("Project Not Found");
      setIsProjectLoaded(false);
    }
  };

  const handleUpdate = async () => {
    try {
      const payload = {
        teamno,
        projectName: projectTitle,
        mentor,
        student1: s1,
        student2: s2,
        student3: s3,
        student4: s4,
      };

      const response = await fetch(
        `http://localhost:8080/api/projects/${projectId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Update Failed");
      }

      alert("Project Updated Successfully");
    } catch (err) {
      console.error(err);
      alert("Failed To Update Project");
    }
  };

  const clearForm = () => {
    setProjectId(null);
    setSearchTeamNo("");
    setIsProjectLoaded(false);

    setteamno("");
    setProjectTitle("");
    setmentor("");

    sets1("");
    sets2("");
    sets3("");
    sets4("");
  };

  return (
    <div>
      <Sidedesign />
      <Adminnav />

      <Box
        pos="fixed"
        px="100px"
        py="10px"
        left="300px"
        top="30px"
        height="100vh"
        w="100%"
        bg="#F3FDFB"
        overflowY="auto"
      >
        {/* Validation Panel */}

        <Box
          pos="fixed"
          borderRadius="md"
          padding="20px"
          left="1100px"
          top="80px"
          height="220px"
          w="200px"
          bg="#080E2C"
        >
          <Stack spacing="10px">
            <HStack>
              {checkteamno(teamno) ? (
                <AiFillCheckCircle style={{ color: "green" }} />
              ) : (
                <GiCancel style={{ color: "red" }} />
              )}
              <Text color="white" fontSize="13px" value={teamno}>
                Team Number
              </Text>
            </HStack>

            <HStack>
              {checkreg(s1) ? (
                <AiFillCheckCircle style={{ color: "green" }} />
              ) : (
                <GiCancel style={{ color: "red" }} />
              )}
              <Text color="white" fontSize="13px" value={s1}>
                Register Number 1
              </Text>
            </HStack>

            <HStack>
              {checkreg(s2) ? (
                <AiFillCheckCircle style={{ color: "green" }} />
              ) : (
                <GiCancel style={{ color: "red" }} />
              )}
              <Text color="white" fontSize="13px" value={s2}>
                Register Number 2
              </Text>
            </HStack>

            <HStack>
              {checkreg(s3) ? (
                <AiFillCheckCircle style={{ color: "green" }} />
              ) : (
                <GiCancel style={{ color: "red" }} />
              )}
              <Text color="white" fontSize="13px" value={s3}>
                Register Number 3
              </Text>
            </HStack>

            <HStack>
              {checkreg(s4) ? (
                <AiFillCheckCircle style={{ color: "green" }} />
              ) : (
                <GiCancel style={{ color: "red" }} />
              )}
              <Text color="white" fontSize="13px" value={s4}>
                Register Number 4
              </Text>
            </HStack>
          </Stack>
        </Box>

        <HStack p="40px" spacing="150px">
          <Box
            w="600px"
            h="100%"
            p="20px"
            border="2px"
            bgColor="#D8E8E4"
          >
            <Text
              fontSize="20"
              fontWeight="bold"
              color="black"
            >
              UPDATE PROJECT
            </Text>

            <Box bgColor="black" h="2px" w="100%" />

            {/* Search Section */}

            <FormControl mt={6}>
              <FormLabel>Search Team Number</FormLabel>

              <Input
                placeholder="Enter Team Number"
                value={searchTeamNo}
                onChange={(e) =>
                  setSearchTeamNo(e.target.value)
                }
              />
            </FormControl>

            <Button
              mt={4}
              bg="#080E2C"
              color="white"
              onClick={handleSearch}
            >
              Search Project
            </Button>

            {isProjectLoaded && (
              <Box py="30px">
                <FormControl isRequired>
                  <FormLabel>Team Number</FormLabel>

                  <Input
                    value={teamno}
                    onChange={(e) =>
                      setteamno(e.target.value)
                    }
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>
                    Project Name
                  </FormLabel>

                  <Input
                    value={projectTitle}
                    onChange={(e) =>
                      setProjectTitle(e.target.value)
                    }
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Mentor</FormLabel>

                  <Select
                    value={mentor}
                    // onChange={(e) =>
                    //   setmentor(e.target.value)
                    // }
                  >
                    <option value={mentor} >
                      {mentor}
                    </option>
                    <option value="Jeyakumar">
                      Jeyakumar
                    </option>
                    <option value="Suchitra">
                      Suchitra
                    </option>
                    <option value="Shanmuga priya">
                      Shanmuga Priya
                    </option>
                  </Select>
                </FormControl>

                <FormControl>
                  <FormLabel>Student 1</FormLabel>

                  <Input
                    value={s1}
                    onChange={(e) =>
                      sets1(e.target.value)
                    }
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Student 2</FormLabel>

                  <Input
                    value={s2}
                    onChange={(e) =>
                      sets2(e.target.value)
                    }
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Student 3</FormLabel>

                  <Input
                    value={s3}
                    onChange={(e) =>
                      sets3(e.target.value)
                    }
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Student 4</FormLabel>

                  <Input
                    value={s4}
                    onChange={(e) =>
                      sets4(e.target.value)
                    }
                  />
                </FormControl>

                <HStack mt={6}>
                  <Button
                    flex={1}
                    bg="#080E2C"
                    color="white"
                    onClick={handleUpdate}
                  >
                    UPDATE PROJECT
                  </Button>

                  <Button
                    flex={1}
                    colorScheme="red"
                    onClick={clearForm}
                  >
                    CLEAR
                  </Button>
                </HStack>
              </Box>
            )}
          </Box>
        </HStack>
      </Box>

      <Sidebar />
    </div>
  );
}

export default Updateproj;
