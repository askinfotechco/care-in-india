import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Iconify from "../../iconify/Iconify";
import QuestionAdd from "../AddQuestions/QuestionAdd";
import AddSubQuestion from "../AddQuestions/AddSubQuestion";

const SubQuestionShow = (props) => {
  const [open, setOpen] = useState(false);
  const [editSubQuestion, setEditSubQuestion] = useState([]);
  const [editFromSS, setEditFromSS] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpenEditQuestion = (row) => {
    setEditSubQuestion([row]);
    setEditFromSS(true);
    setOpen(true);
  };

  return (
    <TableContainer component={Paper}>
      {/* {console.log(rows)} */}
      <Table sx={{ minWidth: 600 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sl No.</TableCell>
            <TableCell width={300}>Sub Question</TableCell>
            <TableCell width={210}>Sub Question Type</TableCell>
            <TableCell>Difficulty Level</TableCell>
            <TableCell align="center">View/ Edit Question</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.subQuestionData?.map((row, index) => {
            const { id, question, type, difficultyLevel } = row;
            return (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{question}</TableCell>
                <TableCell>
                  {type === "singleBased"
                    ? "Single Based"
                    : type === "setBased"
                    ? "Set Based"
                    : "Essay Based"}
                </TableCell>
                <TableCell>
                  {difficultyLevel === "easy"
                    ? "Easy"
                    : row.difficultyLevel === "medium"
                    ? "Medium"
                    : "Hard"}
                </TableCell>
                <TableCell align="center">
                  <Button
                    onClick={() => {
                      handleOpenEditQuestion(row);
                    }}
                  >
                    <Iconify icon={"eva:edit-fill"} sx={{ mr: 2 }} />
                  </Button>
                  {open && (
                    <AddSubQuestion
                      handleSubQuestionAdd={props.handleSubQuestionAdd}
                      fromTestFormation={true}
                      setOpenDialog={setOpen}
                      openDialog={open}
                      editSubQuestion={editSubQuestion}
                      setEditSubQuestion={setEditSubQuestion}
                      fromDashboard={false}
                    />
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SubQuestionShow;
