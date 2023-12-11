import React, { useState } from "react";
import QuestionShow from "../QuestionShow/QuestionShow";
import Button from "@mui/material/Button";
import "./Question.css";
import refreshLogo from "../../../utils/Images/refresh-button.png";
import { ToastContainer, toast } from "react-toastify";
import AddSubQuestion from "../AddQuestions/AddSubQuestion";
import SubQuestionShow from "../QuestionShow/SubQuestionShow";

const SubQuestions = (props, {subQues}) => {
  const [open, setOpen] = useState(false);
  const [editSubQuestion, setEditSubQuestion] = useState([]);
  const [refreshData, setRefreshData] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubQuestionAdd = (question) => {
    if (!props.subQuestionData.subQuestions) {
      props.setSubQues([...props.subQues, question]);
    } else {
      // console.log(props.subQuestionData.subQuestions);
      props.subQuestionData.subQuestions.push(question);
      // subQues = props.subQuestionData.subQuestions;
    }
  };

  const handleRefreshQuesDetails = () => {
    setRefreshData(false);
    toast.success("Sub Questions data refresh successful!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000,
    });
    setTimeout(() => {
      setRefreshData(true);
    }, 100);
  };

  return (
    <div className="question_container">
      <div className="question_title">
        <h3>Sub-Question details</h3>
        <Button
          sx={{ml: "600px"}}
          onClick={() => {
            handleRefreshQuesDetails();
          }}
        >
          <img src={refreshLogo} alt="Refresh" width={30}></img>
        </Button>
        <Button variant="contained" onClick={handleOpen} color="primary">
          Add Sub-Question
        </Button>
      </div>
      <AddSubQuestion
        handleSubQuestionAdd={handleSubQuestionAdd}
        fromTestFormation={true}
        setOpenDialog={setOpen}
        openDialog={open}
        editSubQuestion={editSubQuestion}
        setEditSubQuestion={setEditSubQuestion}
        fromDashboard={false}
      />
      {refreshData && (
        <SubQuestionShow
          subQues={props.subQues}
          handleSubQuestionAdd={handleSubQuestionAdd}
          subQuestionData={props.subQuestionData.subQuestions}
        />
      )}

      <ToastContainer />
    </div>
  );
};

export default SubQuestions;
