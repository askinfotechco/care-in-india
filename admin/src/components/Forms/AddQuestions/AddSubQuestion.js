import React, { useEffect, useState } from "react";
import {
  styled,
  Button,
  Box,
  Stack,
  AppBar,
  Toolbar,
  IconButton,
  FormControlLabel,
  Select,
  MenuItem,
  InputLabel,
  TextField,
  Checkbox,
  Typography,
  FormControl,
  FormLabel,
  Dialog,
  Alert,
  DialogTitle,
  DialogContent,
  DialogActions,
  Collapse,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Label from "../../label/Label";
import { width } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import QuestionvalidationSchema from "../../../components/Validation/Question";

const AddSubQuestion = (props) => {
  const [err, setErr] = useState("");
  const [openAlert, setOpenAlert] = useState(false);
  const [markingsScheme, setMarkingsScheme] = useState({
    correct: 0,
    incorrect: 0,
    notanswered: 0,
  });

  const [formData, setFormData] = useState({
    question: "",
    type: "singleBased",
    questionImage: "",
    hasOptions: false,
    availableOptions: [{ key: "", value: "" }],
    correctTextAnswer: "",
    solution: "",
    solutionImage: "",
    topic: "",
    subTopic: "",
    difficultyLevel: "",
    markingScheme: [
      {
        correct: 0,
        incorrect: 0,
        notanswered: 0,
      },
    ],
    status: true,
    ...props.editSubQuestion[0],
  });

  const [subQuestion, setSubQuestion] = useState(formData);

  const handleChange = (e, index) => {
    // console.log("IN HANDLE CHANGE");
    const { name, value } = e.target;
    const updatedOptions = [...subQuestion.availableOptions];
    updatedOptions[index] = {
      ...updatedOptions[index],
      [name]: value,
    };

    setSubQuestion({
      ...subQuestion,
      availableOptions: updatedOptions,
    });

    setFormData({
      ...formData,
      availableOptions: updatedOptions,
    });
  };

  const handleAddOption = () => {
    setSubQuestion((prevFormData) => ({
      ...prevFormData,
      availableOptions: [
        ...prevFormData.availableOptions,
        { key: "", value: "" },
      ],
    }));

    setFormData((prevFormData) => ({
      ...prevFormData,
      availableOptions: [
        ...prevFormData.availableOptions,
        { key: "", value: "" },
      ],
    }));
  };

  const handleRemoveOption = (index) => {
    const updatedOptions = [...subQuestion.availableOptions];
    updatedOptions.splice(index, 1);

    setSubQuestion({
      ...subQuestion,
      availableOptions: updatedOptions,
    });

    setFormData({
      ...formData,
      availableOptions: updatedOptions,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setSubQuestion((prevFormData) => ({
      ...prevFormData,
      [name]: files[0],
    }));

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: files[0],
    }));
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setSubQuestion({
      ...subQuestion,
      [name]: value,
    });

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleAdd = (e) => {
  //   console.log(subQuestion);
  //   e.preventDefault();
  //   QuestionvalidationSchema.validate(subQuestion)
  //     .then((data) => {
  //       props.formData.subQuestions.push(subQuestion);
  //       // const arr = [...props.formData.subQuestions, subQuestion];
  //       // props.setFormData({ ...props.formData, subQuestions: arr });
  //       setSubQuestion(initial);
  //       setErr("");
  //     })
  //     .catch(({ errors }) => setErr(errors?.[0]));
  // };

  const handleClose = () => {
    props.setOpenDialog(false);
    props.setEditSubQuestion([]);
  };

  const handleChangeMarkingScheme = (e) => {
    const { name, value } = e.target;
    setMarkingsScheme({
      ...markingsScheme,
      [name]: Number(value),
    });
    setSubQuestion({
      ...subQuestion,
      markingScheme: markingsScheme,
    });

    setFormData({
      ...formData,
      markingScheme: markingsScheme,
    });
  };

  const handleChangeOptions = (e, index) => {
    const { name, value } = e.target;
    const updatedOptions = [...formData.availableOptions];
    updatedOptions[index] = {
      ...updatedOptions[index],
      [name]: value,
    };

    setSubQuestion({
      ...subQuestion,
      availableOptions: updatedOptions,
    });

    setFormData({
      ...formData,
      availableOptions: updatedOptions,
    });
  };

  // const [iterate, setIterate] = useState();
  // useEffect(() => {
  //   setIterate(props.formData.subQuestions);
  //   // console.log(iterate);
  // }, [props.formData]);

  const deleteAdd = (e, index) => {
    e.preventDefault();
    const arr = props.formData.subQuestions.filter((ele, id) => {
      return index != id;
    });
    props.setFormData({ ...props.formData, subQuestions: arr });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = await QuestionvalidationSchema.isValid(subQuestion);
    if (!isValid) {
      setOpenAlert(true);
    }

    // console.log("FormData", formData);
    // console.log("SubQuesiton", formData);
    QuestionvalidationSchema.validate(formData)
      .then(async (data) => {
        // console.log(formData);
        props.handleSubQuestionAdd(formData);
        setFormData({
          type: "singleBased",
          question: "",
          questionImage: "",
          hasOptions: false,
          availableOptions: [],
          correctTextAnswer: "",
          subQuestions: [],
          solution: "",
          solutionImage: "",
          topic: "",
          subTopic: "",
          difficultyLevel: "",
          markingScheme: [
            {
              correct: 0,
              incorrect: 0,
              notanswered: 0,
            },
          ],
          status: true,
        });
      })
      .catch(({ errors }) => setErr(errors));

    if (openAlert) {
      setTimeout(() => {
        setOpenAlert(false);
      }, 5000);
    }
    props.setOpenDialog(false);
  };

  return (
    <>
      <Dialog open={props.openDialog} maxWidth="lg">
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Collapse in={openAlert}>
          <Alert
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpenAlert(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{
              mb: 2,
              maxWidth: "360px",
              fontSize: "16px",
              margin: "0 auto",
            }}
          >
            {err}
          </Alert>
        </Collapse>
        <DialogTitle>
          <Typography variant="h4">Sub-Question Form</Typography>
        </DialogTitle>
        <DialogContent sx={{ width: "60vw" }}>
          <Box>
            <Stack>
              <Box display={"flex"} gap={5}>
                <TextField
                  sx={{ marginTop: "15px", width: "390px" }}
                  label="Question"
                  multiline
                  maxRows={Infinity}
                  name="question"
                  variant="outlined"
                  value={subQuestion.question}
                  onChange={handleChangeInput}
                />
                <FormControl>
                  <FormLabel sx={{ fontSize: "12px" }}>Question Type</FormLabel>
                  <Select
                    disabled
                    variant="outlined"
                    placeholder="Type Of Question"
                    value={subQuestion.type}
                    label="Type Of Question"
                    onChange={handleChangeInput}
                    name="type"
                  >
                    <MenuItem value={"singleBased"}>Single Based</MenuItem>
                    <MenuItem value={"setBased"}>Set Based</MenuItem>
                    <MenuItem value={"essayBased"}>Essay Based</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ width: "120px" }}>
                  <FormLabel sx={{ fontSize: "12px" }}>Level</FormLabel>
                  <Select
                    variant="outlined"
                    placeholder="Difficulty Level"
                    value={subQuestion.difficultyLevel}
                    label="Difficulty Level"
                    onChange={handleChangeInput}
                    name="difficultyLevel"
                  >
                    <MenuItem value={"easy"}>Easy</MenuItem>
                    <MenuItem value={"medium"}>Medium</MenuItem>
                    <MenuItem value={"hard"}>Hard</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Stack>
            <Stack>
              <Box display={"flex"} gap={5}>
                <TextField
                  sx={{ marginTop: "30px", width: "390px" }}
                  id="test"
                  label="Topic"
                  type="text"
                  name="topic"
                  variant="outlined"
                  value={subQuestion.topic}
                  onChange={handleChangeInput}
                />
                <TextField
                  sx={{ marginTop: "30px", width: "360px" }}
                  label="Subtopic"
                  type="text"
                  name="subTopic"
                  variant="outlined"
                  value={subQuestion.subTopic}
                  onChange={handleChangeInput}
                />
              </Box>
            </Stack>
            <Button
              variant="contained"
              component="label"
              sx={{ height: "45px", mt: "24px", width: "240px" }}
            >
              Upload Question Image
              <input
                type="file"
                hidden
                label="Question Image"
                name="questionImage"
                variant="standard"
                onChange={handleFileChange}
                accept="image/*"
              />
            </Button>

            {/* {formData.type === "singleBased" && (
              <> */}
                <Stack mt={4}>
                  <Box>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Has Options"
                      name="hasOptions"
                      variant="standard"
                      checked={subQuestion.hasOptions ? subQuestion.hasOptions : false}
                      onChange={handleChangeInput}
                    />
                  </Box>
                </Stack>

                {/* Render availableOptions field if hasOptions is true */}
                {subQuestion.hasOptions && (
                  <Stack>
                    <Label>
                      <Typography variant="body2">Availble Options:</Typography>
                    </Label>
                    {subQuestion.availableOptions?.map((option, index) => (
                      <Box
                        key={index}
                        className="option-container"
                        display={"flex"}
                        gap={5}
                      >
                        <TextField
                          sx={{ marginTop: "20px" }}
                          name="key"
                          variant="outlined"
                          value={option.key}
                          onChange={(e) => handleChangeOptions(e, index)}
                          label="Option Key"
                        />
                        <TextField
                          sx={{ marginTop: "20px" }}
                          name="value"
                          variant="outlined"
                          value={option.value}
                          onChange={(e) => handleChangeOptions(e, index)}
                          label="Option Value"
                        />
                        {index > 0 && (
                          <Button
                            variant="outlined"
                            onClick={() => handleRemoveOption(index)}
                            sx={{
                              height: "30px",
                              mt: "39px",
                              width: "120px",
                              fontSize: "10px",
                            }}
                          >
                            Remove Option
                          </Button>
                        )}
                      </Box>
                    ))}
                    <Button
                      variant="outlined"
                      onClick={handleAddOption}
                      sx={{
                        height: "30px",
                        width: "240px",
                        fontSize: "13px",
                        display: "flex",
                        m: "20px auto",
                      }}
                    >
                      Add Option
                    </Button>
                  </Stack>
                )}

                <Stack>
                  <Box display={"flex"} gap={5}>
                    <TextField
                      sx={{ marginTop: "20px", width: "390px" }}
                      label="  Correct Text Answer"
                      variant="outlined"
                      name="correctTextAnswer"
                      value={subQuestion.correctTextAnswer}
                      onChange={handleChangeInput}
                    />
                    <TextField
                      sx={{ marginTop: "20px", width: "360px" }}
                      label="Solution"
                      name="solution"
                      variant="outlined"
                      value={subQuestion.solution}
                      onChange={handleChangeInput}
                      placeholder="Solution"
                    />
                  </Box>
                </Stack>
                <Button
                  variant="contained"
                  component="label"
                  sx={{ height: "45px", mt: "24px", width: "200px" }}
                >
                  Upload Solution Image
                  <input
                    type="file"
                    hidden
                    label="Solution Image"
                    variant="standard"
                    name="solutionImage"
                    onChange={handleFileChange}
                    accept="image/*"
                  />
                </Button>
                <Stack>
                  {/* <TextField
                    sx={{ marginTop: "30px" }}
                    variant="outlined"
                    label="Marking Scheme"
                    name="markingScheme"
                    value={formData.markingScheme}
                    onChange={handleChange}
                  /> */}
                  <FormControl sx={{ marginTop: "30px" }}>
                    <FormLabel required>Marking Scheme</FormLabel>
                    <Box display="flex">
                      <TextField
                        label="Correct"
                        variant="outlined"
                        name="correct"
                        value={markingsScheme.correct}
                        onChange={handleChangeMarkingScheme}
                        sx={{
                          width: "120px",
                          marginTop: "20px",
                          marginBottom: "20px",
                          paddingRight: "15px",
                        }}
                      />
                      <TextField
                        label="In-Correct"
                        variant="outlined"
                        name="incorrect"
                        value={markingsScheme.incorrect}
                        onChange={handleChangeMarkingScheme}
                        sx={{
                          width: "120px",
                          marginTop: "20px",
                          marginBottom: "20px",
                          paddingRight: "15px",
                        }}
                      />
                      <TextField
                        label="Not Answered"
                        variant="outlined"
                        name="notanswered"
                        value={markingsScheme.notanswered}
                        onChange={handleChangeMarkingScheme}
                        sx={{
                          width: "120px",
                          marginTop: "20px",
                          marginBottom: "20px",
                        }}
                      />
                    </Box>
                  </FormControl>
                </Stack>
              {/* </>
            )} */}
          </Box>
        </DialogContent>
        <DialogActions>
          {/* <p style={{ color: "red" }}>{err}</p> */}
          <Button
            size="large"
            sx={{ border: "2px solid #e2e2e2" }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            size="large"
            sx={{ border: "2px solid #e2e2e2" }}
            onClick={handleSubmit}
            type="submit"
          >
            Save Question
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddSubQuestion;
