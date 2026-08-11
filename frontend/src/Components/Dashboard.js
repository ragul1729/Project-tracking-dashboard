import React from 'react';
import { Box, Text ,HStack } from "@chakra-ui/react"
import {Timeline, TimelineEvent} from 'react-event-timeline'
var data = [
    {
    "title" : "Review 0",
    "summary" : "Amrita Vishwa Vidyapeetham has been accredited (Cycle-3) with an A++ the highest grade by the National Assessment",
    "date" : "25/08/2021",
    "time" : "5:00 PM",
    },
    {
    "title" : "Review 1",
    "summary" : "Amrita Vishwa Vidyapeetham has been accredited (Cycle-3) with an A++ the highest grade by the National Assessment",
    "date" : "26/08/2021",
    "time" : "5:00 PM",
    },
    {
    "title" : "Review 2",
    "summary" : "Amrita Vishwa Vidyapeetham has been accredited (Cycle-3) with an A++ the highest grade by the National Assessment",
    "date" : "27/08/2021",
    "time" : "5:00 PM",
    },
];

function Dashboard() {
  return (
    <div>
        <Box pos="fixed" h="520px" w="620px" top="70px" left="250px">
        <Timeline
        lineColor = "#44EABB"
        >
        {data.map((info) => {
            return(
            <TimelineEvent
            title={info.title}
            icon={<i />}
            iconColor="black"
            buttons={<i />}
            container="card"
            style={{border: '2px solid #080E2C'}}
            cardHeaderStyle={{backgroundColor: '#080E2C',fontSize:"16px",fontWeight:"bold"}}
            contentStyle ={{backgroundColor: '#D8E8E4',fontWeight:"bold"}}
          >

        {info.summary}
        <HStack paddingTop="10px">
        <img src="https://img.icons8.com/material-sharp/24/000000/planner.png"/>
        <Text fontSize="12" fontWeight="extrabold" textAlign="right" color="#080E2C">{info.date} - {info.time}</Text>
        </HStack>
        </TimelineEvent>
        )})}
        </Timeline>
        </Box>
    </div>
  );
}
export default Dashboard;