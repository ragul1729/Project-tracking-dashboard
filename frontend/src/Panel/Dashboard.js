import React, { useState, useRef } from "react";
import { Box, Text, HStack, VStack, Button, Stack, Input} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { Timeline, TimelineEvent } from "react-event-timeline";
import Modal from "react-modal";
import{
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react"

import './Dashboard.css';
import StudentList from "./StudentList";

function Dashboard() {
  const [modal1IsOpen, setModal1IsOpen] = useState(false);
  const [modal2IsOpen, setModal2IsOpen] = useState(false);
  const [marksModalIsOpen, setmarksModalIsOpen] = useState(false);
  const [marksModal2IsOpen, setmarksModal2IsOpen] = useState(false);
  const [marksModal3IsOpen, setmarksModal3IsOpen] = useState(false);
  const [selectStudent, setSelectstudent]=useState(null);
  const [reviewNo,setReviewNo]=useState('');
  const [rno,setrno]=useState('');
  const mark1 = useRef(null);
  const mark2 = useRef(null);
  const mark3 = useRef(null);
  const [errmsg1,seterrmsg1] = useState(false);
  const [errmsg2,seterrmsg2] = useState(false);
  const [errmsg3,seterrmsg3] = useState(false);
  const [errmsg4,seterrmsg4] = useState(false);

  const studentsinit=[{roll_number:"18424", name:"Harikrishna N", review1_1:'', review1_2:'', review1_3:'', 
  review2_1:'', review2_2:'',review2_3:'', review3_1:'', review3_2:'',review3_3:'',is_assign:true, is_published1:false, is_published2:false, is_published3:false},
  {roll_number:"18430", name:"Kiran Kumar A", review1_1: '', review1_2: '', review1_3: '', 
  review2_1:'', review2_2:'',review2_3:'', review3_1:'', review3_2:'',review3_3:'', is_assign:true, is_published1:false, is_published2:false, is_published3:false},
  {roll_number:"18429", name:"Swapnika", review1_1: '', review1_2: '', review1_3: '', 
  review2_1:'', review2_2:'',review2_3:'', review3_1:'', review3_2:'',review3_3:'',is_assign:true, is_published1:false, is_published2:false, is_published3:false},
  {roll_number:"18445", name:"Ragul A", review1_1: '', review1_2: '', review1_3: '', 
  review2_1:'', review2_2:'',review2_3:'', review3_1:'', review3_2:'',review3_3:'',is_assign:true, is_published1:false, is_published2:false, is_published3:false},
  {roll_number:"18472", name:"SaiTeja", review1_1: '', review1_2: '', review1_3: '', 
  review2_1:'', review2_2:'',review2_3:'', review3_1:'', review3_2:'',review3_3:'',is_assign:true, is_published1:false, is_published2:false, is_published3:false}
  ];

  const [students,setStudents]=useState(studentsinit);

  function marksModalHandler(event){
    console.log(event.target.getAttribute("s_id"))
    const sdnt=students.find(st => {return st.roll_number==event.target.getAttribute("s_id")})
    setSelectstudent(sdnt);
    if(event.target.getAttribute("r_no")=="Review 1")
      setmarksModalIsOpen(true);
    else if(event.target.getAttribute("r_no")=="Review 2")
      setmarksModal2IsOpen(true);
    else
    setmarksModal3IsOpen(true);
  }
  function formValidHandler(event){
    event.preventDefault();
    let m1=mark1.current.value;m1=m1.trim();
    let m2=mark2.current.value;m2=m2.trim();
    let m3=mark3.current.value;m3=m3.trim();
    const roll_no=event.currentTarget.getAttribute("s_id");
   
    if(isNaN(m1) || m1==='' || m1<0 || m1>15){
      seterrmsg1(true);
   }
    if(isNaN(m2) || m2==='' || m2<0 || m2>5){
      seterrmsg2(true);
    }
    if(isNaN(m3) || m3==='' || m3<0 || m3>5){
      seterrmsg3(true);
    }
    if(!isNaN(m1) && !(m1==='' || m2==='' || m3==='') && m1>=0 && m1<=15 && !isNaN(m2) && m2>=0 && m2<=5 && !isNaN(m3) && m3>=0 && m3<=5){
      setStudents(currStudents => {
          for(let student of currStudents){
            if(student.roll_number===roll_no){
              student.review1_1=m1;
              student.review1_2=m2;
              student.review1_3=m3;
              break;
            }
          }
          return currStudents;
      })
      setmarksModalIsOpen(false);
    }
  }

  function formValidHandler_2(event){
    event.preventDefault();
    let m1=mark1.current.value;m1=m1.trim();
    let m2=mark2.current.value;m2=m2.trim();
    let m3=mark3.current.value;m3=m3.trim();
    const roll_no=event.currentTarget.getAttribute("s_id");
    if(isNaN(m1) || m1==='' || m1<0 || m1>15){
      seterrmsg1(true);
    }
    if(isNaN(m2) || m2==='' || m2<0 || m2>5){
      seterrmsg2(true);
    }
    if(isNaN(m3) || m3==='' || m3<0 || m3>5){
      seterrmsg3(true);
    }
    if(!isNaN(m1) && !(m1==='' || m2==='' || m3==='') && m1>=0 && m1<=15 && !isNaN(m2) && m2>=0 && m2<=5 && !isNaN(m3) && m3>=0 && m3<=5){
      setStudents(currStudents => {
          for(let student of currStudents){
            if(student.roll_number===roll_no){
              student.review2_1=m1;
              student.review2_2=m2;
              student.review2_3=m3;
              break;
            }
          }
          return currStudents;
      })
      setmarksModal2IsOpen(false);
    }
  }

  function formValidHandler_3(event){
    event.preventDefault();
    let m1=mark1.current.value;m1=m1.trim();
    let m2=mark2.current.value;m2=m2.trim();
    const roll_no=event.currentTarget.getAttribute("s_id");
    if(isNaN(m1) || m1==='' || m1<0 || m1>20){
      seterrmsg4(true);
    }
    if(isNaN(m2) || m2==='' || m2<0 || m2>5){
      seterrmsg2(true);
    }
    if(!isNaN(m1) && !(m1==='' || m2==='') && m1>=0 && m1<=20 && !isNaN(m2) && m2>=0 && m2<=5){
      setStudents(currStudents => {
          for(let student of currStudents){
            if(student.roll_number===roll_no){
              student.review3_1=m1;
              student.review3_2=m2;
              break;
            }
          }
          return currStudents;
      })
      setmarksModal3IsOpen(false);
    }
  }

  const [isRemarksEmpty,setRemarksEmpty]=useState(false)
  const remarks =useRef('');
  function remarksHandler(e){
    e.preventDefault();
    let rm=remarks.current.value;
    if(rm)
      rm=rm.trim();
    if(rm===undefined || rm===''){
      setRemarksEmpty(true);
    }
    else{
      setData((currData)=>{
        for(let dt of currData){
          if(dt.title===reviewNo){
            dt.summary=rm;
            break;
          }
        }
        return currData;
      });
      setRemarksEmpty(false);
      setModal2IsOpen(false);
    }
  }

  const datainit = [
    {
      title: "Review 1",
      summary:'',
      date: "25/08/2021",
      time: "5:00 PM",
    },
    {
      title: "Review 2",
      summary:'',
      date: "26/08/2021",
      time: "5:00 PM",
    },
    {
      title: "Review 3",
      summary:'',
        
      date: "27/08/2021",
      time: "5:00 PM",
    },
  ];

  const [data,setData]=useState(datainit);


  //---------------------------------------------------------------------------------

  return (
    <div>
      <Text
        fontSize="20px"
        fontWeight="bold"
        paddingTop="60px"
        marginLeft="400px"
      >
        Fire Detection using Deep Learning
      </Text>
      <Box pos="fixed" h="520px" w="620px" top="80px" left="275px">
        <Timeline lineColor="#44EABB">
          {data.map((info) => {
            return (
              <TimelineEvent
                key={info.title}
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
                {info.summary}
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

                    <Button
                      height="30px"
                      border="1px solid black"
                      onClick={() => {setrno(info.title);setModal1IsOpen(true)}}
                    >
                      Update Marks
                    </Button>
                    <Button
                      height="30px"
                      border="1px solid black"
                      onClick={() => {setReviewNo(info.title);setModal2IsOpen(true)}}
                    >
                      Remarks
                    </Button>
                  </HStack>
                </HStack>
              </TimelineEvent>
            );
          })}
        </Timeline>
      </Box>

      {/*Modal-1 */} 

      <Modal
        isOpen={modal1IsOpen}
        onRequestClose={() => setModal1IsOpen(false)}
        style={{
          overlay: {
            position: "fixed",
            margin: 0,
            backgroundColor: "rgba(255,255,255,0.75)",
          },
          content: {
            top: "50%",
            bottom: "auto",
            left: "50%",
            right: "50%",
            minWidth: "30rem",
            borderRadius: "20px",
            backgroundColor: "#080E2C",
            transform: "translate(-50%, -50%)",
            padding: "40px",
          },
        }}
      >
        <Stack>
          <Box>
            <Text float="left" fontSize="27px" color="white">
              Update Marks
            </Text>
            <CloseIcon
              float="right"
              marginTop="15px"
              color="white"
              onClick={() => setModal1IsOpen(false)}
            >
              Close
            </CloseIcon>
          </Box>
          <form>

            <Box>           
                <div className="divide"></div>
                <StudentList students={students} marksModalOpen={marksModalHandler} review_no={rno} />
            </Box>
      
            <Button
              marginLeft="160"
              marginTop="1rem"
              fontWeight="normal"
              color="black"
              size="md"
              colorScheme="teal"
              backgroundColor="#44EABB"
            >
              {" "}
              Submit{" "}
            </Button>
          </form>
        </Stack>
      </Modal>

      <Modal
        isOpen={modal2IsOpen}
        onRequestClose={() => {setModal2IsOpen(false);setRemarksEmpty(false)}}
        style={{
          overlay: {
            position: "fixed",
            margin: 0,
            backgroundColor: "rgba(255,255,255,0.75)",
          },
          content: {
            top: "50%",
            bottom: "auto",
            left: "50%",
            right: "50%",
            minWidth: "25rem",
            borderRadius: "20px",
            backgroundColor: "#080E2C",
            transform: "translate(-50%, -50%)",
            padding: "40px",
          },
        }}
      >
        <Stack>
          <Box>
            <Text float="left" fontSize="27px" color="white">
              {" "}
              Report{" "}
            </Text>
            <CloseIcon
              float="right"
              marginTop="15px"
              color="white"
              onClick={() => {setModal2IsOpen(false);setRemarksEmpty(false)}}
            >
              Close
            </CloseIcon>
          </Box>
          <form onSubmit={remarksHandler}>
            <input className="title" type="text" placeholder="Title"></input>
            <textarea className="text-area" rows="7" ref={remarks} ></textarea>
            {isRemarksEmpty && <div style={{color:"red",textAlign:"center"}}>Feedback Form cannot be empty</div>}
            <Button
              marginLeft="110"
              marginTop="1rem"
              fontWeight="normal"
              color="black"
              size="md"
              colorScheme="teal"
              backgroundColor="#44EABB"
              type="submit"
            >
              {" "}
              Submit{" "}
            </Button>
          </form>
        </Stack>
      </Modal>

      <Modal isOpen={marksModalIsOpen}
        onRequestClose={() => setmarksModalIsOpen(false)}
        style={{
          overlay: {
            position: "fixed",
            margin: 0,
            backgroundColor: "rgba(255,255,255,0.75)",
          },
          content: {
            top: "50%",
            bottom: "auto",
            left: "50%",
            right: "50%",
            minWidth: "25rem",
            borderRadius: "20px",
            backgroundColor: "#080E2C",
            transform: "translate(-50%, -50%)",
            padding: "40px",
          },
        }}>

        <div className="marks-form">

        <div >
        <Text float="left" fontSize="27px" color="white" marginRight="20px">
              {" "}
              {selectStudent ? selectStudent.name : null}{" "}
        </Text>

        <input className="member-marks" marginBottom="0"  value={selectStudent ? (Number(selectStudent.review1_1)+Number(selectStudent.review1_2)+Number(selectStudent.review1_3)) : null} 
        float="right" disabled></input>

        <CloseIcon
          float="right"
          marginTop="15px"
          color="white"
          onClick={() => setmarksModalIsOpen(false)}
         />
        </div>

        <form onSubmit={formValidHandler} s_id={selectStudent ? selectStudent.roll_number : null}>
          <div color="white" >Literature survey</div>
          <Input marginTop="15px" marginBottom="15px" placeholder={selectStudent ? selectStudent.review1_1 : null} ref={mark1} onFocus={()=>{seterrmsg1(false)}} width="80%" />
          {errmsg1 ? <div style={{color:"red"}}>
                      Please enter a number between 0 and 15
                    </div> : null}

          <div color="white">Modularization of the project</div>
          <Input marginTop="15px" marginBottom="15px" placeholder={selectStudent ? selectStudent.review1_2 : null} ref={mark2} onFocus={()=>{seterrmsg2(false)}} width="80%" />
          {errmsg2 ? <div style={{color:"red"}}>
                      Please enter a number between 0 and 5
                    </div> : null}

          <div  color="white">Documentaion</div>
          <Input marginTop="15px"  placeholder={selectStudent ? selectStudent.review1_3 : null} ref={mark3} onFocus={()=>{seterrmsg3(false)}} width="80%" />
          {errmsg3 ? <div style={{color:"red"}}>
                      Please enter a number between 0 and 5
                    </div> : null}
          <Button type="submit" color="blue" marginTop="50px" >SUBMIT</Button>
          </form>
        </div>
      </Modal>

      {/* Marks Modal 2 */}

      <Modal isOpen={marksModal2IsOpen}
        onRequestClose={() => setmarksModal2IsOpen(false)}
        style={{
          overlay: {
            position: "fixed",
            margin: 0,
            backgroundColor: "rgba(255,255,255,0.75)",
          },
          content: {
            top: "50%",
            bottom: "auto",
            left: "50%",
            right: "50%",
            minWidth: "25rem",
            borderRadius: "20px",
            backgroundColor: "#080E2C",
            transform: "translate(-50%, -50%)",
            padding: "40px",
          },
        }}>

        <div className="marks-form">

        <div >
        <Text float="left" fontSize="27px" color="white" >
              {" "}
              {selectStudent ? selectStudent.name : null}{" "}
        </Text>

        <input className="member-marks" value={selectStudent ? (Number(selectStudent.review2_1)+Number(selectStudent.review2_2)+Number(selectStudent.review2_3)) : null} 
        float="right" disabled></input>

        <CloseIcon
          float="right"
          marginTop="15px"
          color="white"
          onClick={() => setmarksModal2IsOpen(false)}
         />
        </div>

        <form onSubmit={formValidHandler_2} s_id={selectStudent ? selectStudent.roll_number : null}>
          <div color="white">Detailed explanation of modules</div>
          <Input marginTop="15px" marginBottom="15px" placeholder={selectStudent ? selectStudent.review2_1 : null} ref={mark1} onFocus={()=>{seterrmsg1(false)}} />
          {errmsg1 ? <div style={{color:"red"}}>
                      Please enter a number between 0 and 15
                    </div> : null}

          <div color="white">Design of Architecture Diagram</div>
          <Input marginTop="15px" marginBottom="15px" placeholder={selectStudent ? selectStudent.review2_2 : null} ref={mark2} onFocus={()=>{seterrmsg2(false)}} />
          {errmsg2 ? <div style={{color:"red"}}>
                      Please enter a number between 0 and 5
                    </div> : null}

          <div color="white">Documentation</div>
          <Input marginTop="15px" placeholder={selectStudent ? selectStudent.review2_3 : null} ref={mark3} onFocus={()=>{seterrmsg3(false)}} />
          {errmsg3 ? <div style={{color:"red"}}>
                      Please enter a number between 0 and 5
                    </div> : null}
          <Button type="submit" color="blue" marginTop="50px" >SUBMIT</Button>
          </form>
        </div>
      </Modal>


      {/* Marks Modal 3 */}

      <Modal isOpen={marksModal3IsOpen}
        onRequestClose={() => setmarksModal3IsOpen(false)}
        style={{
          overlay: {
            position: "fixed",
            margin: 0,
            backgroundColor: "rgba(255,255,255,0.75)",
          },
          content: {
            top: "50%",
            bottom: "auto",
            left: "50%",
            right: "50%",
            minWidth: "25rem",
            borderRadius: "20px",
            backgroundColor: "#080E2C",
            transform: "translate(-50%, -50%)",
            padding: "40px",
          },
        }}>

        <div className="marks-form">

        <div >
        <Text float="left" fontSize="27px" color="white" >
              {" "}
              {selectStudent ? selectStudent.name : null}{" "}
        </Text>

        <input className="member-marks" value={selectStudent ? (Number(selectStudent.review3_1)+Number(selectStudent.review3_2)) : null} 
        float="right" disabled></input>

        <CloseIcon
          float="right"
          marginTop="15px"
          color="white"
          onClick={() => setmarksModal3IsOpen(false)}
         />
        </div>

        <form onSubmit={formValidHandler_3} s_id={selectStudent ? selectStudent.roll_number : null}>
          <div color="white">Detailed explanation of modules</div>
          <Input marginTop="15px" marginBottom="15px" placeholder={selectStudent ? selectStudent.review3_1 : null} ref={mark1} onFocus={()=>{seterrmsg4(false)}} />
          {errmsg4 ? <div style={{color:"red"}}>
                      Please enter a number between 0 and 20
                    </div> : null}

          <div color="white">Design of Architecture Diagram</div>
          <Input marginTop="15px" placeholder={selectStudent ? selectStudent.review3_2 : null} ref={mark2} onFocus={()=>{seterrmsg2(false)}} />
          {errmsg2 ? <div style={{color:"red"}}>
                      Please enter a number between 0 and 5
                    </div> : null}

          <Button type="submit" color="blue" marginTop="50px" >SUBMIT</Button>
          </form>
        </div>
      </Modal>

      
    </div>
  );
}
export default Dashboard;
