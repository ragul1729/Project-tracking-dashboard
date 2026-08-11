import React, { useState } from "react";
import Modal from "react-modal";

function Marksmodal(props){

    return (
    <Modal isOpen={props.marksModalIsOpen}
        onRequestClose={() => props.setmarksModalIsOpen(false)}
        style={{
          overlay: {
            position: "fixed",
            margin: 0,
            backgroundColor: "rgba(255,255,255,0.75)",
          },
          content: {
            top: "50%",
            bottom: "auto",
            left: "40%",
            right: "40%",
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

        <input className="member-marks" value={selectStudent ? (Number(selectStudent.review1_1)+Number(selectStudent.review1_2)+Number(selectStudent.review1_3)) : null} 
        float="right" disabled></input>

        <CloseIcon
          float="right"
          marginTop="15px"
          color="white"
          onClick={() => setmarksModalIsOpen(false)}
         />
        </div>

        <form onSubmit={formValidHandler} s_id={selectStudent ? selectStudent.roll_number : null}>
          <div color="white">Literature survey</div>
          <Input placeholder={selectStudent ? selectStudent.review1_1 : null} ref={mark1} onFocus={()=>{seterrmsg1(false)}} />
          {errmsg1 ? <div style={{color:"red"}}>
                      Please enter a number between 0 and 15
                    </div> : null}

          <div color="white">Modularization of the project</div>
          <Input placeholder={selectStudent ? selectStudent.review1_2 : null} ref={mark2} onFocus={()=>{seterrmsg2(false)}} />
          {errmsg2 ? <div style={{color:"red"}}>
                      Please enter a number between 0 and 5
                    </div> : null}

          <div color="white">Documentaion</div>
          <Input placeholder={selectStudent ? selectStudent.review1_3 : null} ref={mark3} onFocus={()=>{seterrmsg3(false)}} />
          {errmsg3 ? <div style={{color:"red"}}>
                      Please enter a number between 0 and 5
                    </div> : null}
          <Button type="submit" color="blue" marginTop="50px" >SUBMIT</Button>
          </form>
        </div>
      </Modal>)
}

export default Marksmodal;