import React, { useState } from "react";
import { Box, Text, HStack, VStack, Button, Stack } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { Timeline, TimelineEvent } from "react-event-timeline";
import Modal from "react-modal";

import "./Dashboard.css";
var data = [
  {
    title: "Review 1",
    summary:
      "Amrita Vishwa Vidyapeetham has been accredited (Cycle-3) with an A++ the highest grade by the National Assessment",
    date: "25/08/2021",
    time: "5:00 PM",
  },
  {
    title: "Review 2",
    summary:
      "Amrita Vishwa Vidyapeetham has been accredited (Cycle-3) with an A++ the highest grade by the National Assessment",
    date: "26/08/2021",
    time: "5:00 PM",
  },
  {
    title: "Review 3",
    summary:
      "Amrita Vishwa Vidyapeetham has been accredited (Cycle-3) with an A++ the highest grade by the National Assessment",
    date: "27/08/2021",
    time: "5:00 PM",
  },
];

function DashboardCoordinator() {

  const projectDetails=[{group_no:"1",mambers:{roll_number:"CB.EN.U4CSE18424", review1_1:'', review1_2:'', review1_3:'', 
  review2_1:'', review2_2:'',view2_3:''}},
  {roll_number:"CB.EN.U4CSE18430", review1_1: '', review1_2: '', review1_3: '', 
  review2_1:'', review2_2:'',review2_3:''},
  {roll_number:"CB.EN.U4CSE18429", review1_1: '', review1_2: '', review1_3: '', 
  review2_1:'', review2_2:'',review2_3:''},
  {roll_number:"CB.EN.U4CSE18445",  review1_1: '', review1_2: '', review1_3: '', 
  review2_1:'', review2_2:'',review2_3:''},
  {roll_number:"CB.EN.U4CSE18472",  review1_1: '', review1_2: '', review1_3: '', 
  review2_1:'', review2_2:'',review2_3:''},

  {group_no:"2",mambers:{roll_number:"CB.EN.U4CSE18324", review1_1:'', review1_2:'', review1_3:'', 
  review2_1:'', review2_2:'',view2_3:''}},
  {roll_number:"CB.EN.U4CSE18330", review1_1: '', review1_2: '', review1_3: '', 
  review2_1:'', review2_2:'',review2_3:''},
  {roll_number:"CB.EN.U4CSE18329", review1_1: '', review1_2: '', review1_3: '', 
  review2_1:'', review2_2:'',review2_3:''},
  {roll_number:"CB.EN.U4CSE18345",review1_1: '', review1_2: '', review1_3: '', 
  review2_1:'', review2_2:'',review2_3:''},
  {roll_number:"CB.EN.U4CSE18372",review1_1: '', review1_2: '', review1_3: '', 
  review2_1:'', review2_2:'',review2_3:''},

  {group_no:"3",mambers:{roll_number:"CB.EN.U4CSE18224", review1_1:'', review1_2:'', review1_3:'', 
  review2_1:'', review2_2:'',view2_3:''}},
  {roll_number:"CB.EN.U4CSE18230", review1_1: '', review1_2: '', review1_3: '', 
  review2_1:'', review2_2:'',review2_3:''},
  {roll_number:"CB.EN.U4CSE18229", review1_1: '', review1_2: '', review1_3: '', 
  review2_1:'', review2_2:'',review2_3:''},
  {roll_number:"CB.EN.U4CSE18245",review1_1: '', review1_2: '', review1_3: '', 
  review2_1:'', review2_2:'',review2_3:''},
  {roll_number:"CB.EN.U4CSE18272",review1_1: '', review1_2: '', review1_3: '', 
  review2_1:'', review2_2:'',review2_3:''}];

  const [notUpdated,setNotUpdated]=useState(false);

  return (
    <div>
      <Text
        fontSize="20px"
        fontWeight="bold"
        paddingTop="60px"
        marginLeft="400px"
      >
     
      </Text>
      <Box pos="fixed" h="520px" w="620px" top="80px" left="275px">
        <Timeline lineColor="#44EABB">
          {data.map((info) => {
            return (
              <TimelineEvent
                title={info.title}
                icon={<i />}
                iconColor="black"
                buttons={<i />}
                container="card"
                style={{ border: "2px solid #080E2C" }}
                cardHeaderStyle={{
                  backgroundColor: "#080E2C",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
                contentStyle={{
                  backgroundColor: "#D8E8E4",
                  fontWeight: "bold",
                }}
              >
                
                <HStack paddingTop="10px">
                  <img src="https://img.icons8.com/material-sharp/24/000000/planner.png" />

                  <HStack>
                    <Text
                      marginRight="5rem"
                      fontSize="12"
                      fontWeight="extrabold"
                      textAlign="right"
                      color="#080E2C"
                    >
                      {info.date} - {info.time}
                    </Text>
                    
                    <Button colorScheme="orange" size="sm" isDisabled={info.title==="Review 3" ? true : false}>
                      Publish Marks
                    </Button>
                    <Button colorScheme="green" size="sm" isDisabled={notUpdated}>
                      List
                    </Button>
                  </HStack>
                </HStack>
              </TimelineEvent>
            );
          })}
        </Timeline>
      </Box>
    </div>
  );
}
export default DashboardCoordinator;
