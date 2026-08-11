import { Button } from "@chakra-ui/react";

import "./StudentList.css";

function StudentList(props) {

  function getMarksTotal(st) {
    if (props.review_no == "Review 1") {
      if(st.review1_1 + st.review1_2 + st.review1_3!=='')
        return Number(st.review1_1) + Number(st.review1_2) + Number(st.review1_3);
    } else if (props.review_no == "Review 2") {
      if(st.review2_1 + st.review2_2 + st.review2_3!=='')
        return Number(st.review2_1) + Number(st.review2_2) + Number(st.review2_3);
    } else if(props.review_no == "Review 3"){
      if(st.review3_1 + st.review3_2 + st.review3_3!=='')
        return Number(st.review3_1) + Number(st.review3_2) + Number(st.review3_3);
    }
    return '';
  }

  function isReviewMarksUpdated(st){
    if (props.review_no == "Review 1") {
      return st.review1_1 + st.review1_2 + st.review1_3!=='';
    } else if (props.review_no == "Review 2") {
      return st.review2_1 + st.review2_2 + st.review2_3!=='';
    }
    else if(props.review_no == "Review 3"){
      return st.review3_1 + st.review3_2 + st.review3_3!=='';
    }
    return false;
  }

  return (
    <div>
      {props.students.map((student) => {

        return (
          <div key={student.roll_number}>
            <div className="member-name">{student.name}</div>
            <input className="member-marks" type="text" value={getMarksTotal(student)} disabled >
            </input>
            <Button
              size="sm"
              className="member-update"
              backgroundColor={isReviewMarksUpdated(student) ? "green" : "orange"}
              s_id={student.roll_number}
              r_no={props.review_no}
              onClick={props.marksModalOpen}
            >
              Update
            </Button>
          </div>
        );
      })}
    </div>
  );
}

export default StudentList;
