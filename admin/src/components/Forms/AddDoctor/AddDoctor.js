import React, { useMemo, useRef, useState } from "react";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useCookies } from "react-cookie";
import {
  Button,
  Stack,
  Select,
  MenuItem,
  TextField,
  FormControl,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  FormLabel,
  Typography,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

//connection file
import { URL } from "../../../connection";

import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from "@mui/x-data-grid";
import {
  randomCreatedDate,
  randomTraderName,
  randomId,
  randomArrayItem,
} from "@mui/x-data-grid-generator";
import JoditEditor from "jodit-react";
import HTMLReactParser from "html-react-parser";

const day = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const hour = [
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
];
const minute = ["0", "30"];
const status = ["Active", "Inactive"];
const doctorSlots = [];

const initialRows = [
  {
    id: randomId(),
    day: day[0],
    status: "",
    fromHour: "",
    fromMinute: "",
    toHour: "",
    toMinute: "",
  },
  {
    id: randomId(),
    day: day[1],
    status: "",
    fromHour: "",
    fromMinute: "",
    toHour: "",
    toMinute: "",
  },
  {
    id: randomId(),
    day: day[2],
    status: "",
    fromHour: "",
    fromMinute: "",
    toHour: "",
    toMinute: "",
  },
  {
    id: randomId(),
    day: day[3],
    status: "",
    fromHour: "",
    fromMinute: "",
    toHour: "",
    toMinute: "",
  },
  {
    id: randomId(),
    day: day[4],
    status: "",
    fromHour: "",
    fromMinute: "",
    toHour: "",
    toMinute: "",
  },
  {
    id: randomId(),
    day: day[5],
    status: "",
    fromHour: "",
    fromMinute: "",
    toHour: "",
    toMinute: "",
  },
  {
    id: randomId(),
    day: day[6],
    status: "",
    fromHour: "",
    fromMinute: "",
    toHour: "",
    toMinute: "",
  },
];

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, name: "", age: "", isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "name" },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
}

const AddDoctor = (props) => {
  //cookies
  const [cookies, setCookie, removeCookie] = useCookies("jwt");
  const [rows, setRows] = useState(initialRows);
  const [rowModesModel, setRowModesModel] = useState({});
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const config = {
		placeholder: 'Start typing...',
	};
  // const [doctorSlots, setDoctorSlots] = useState([]);
  // var doctorSlots = [];

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    country: "",
    city: "",
    phone: "",
    language: "",
    specialization: "",
    role: "doctor",
    regId: "",
    about: "",
    doctorSlotArray: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClose = () => {
    props.setOpenDialog(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.about=content;
    // setFormData({...formData, about: content});
    try {
      const formDataToSend = await JSON.stringify(formData);
      // console.log(formDataToSend);
      await axios.post(`${URL}/api/doctor/add`, formDataToSend, {
        headers: {
          Authorization: "Bearer " + cookies.jwt,
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      props.setOpenDialog(false);
    } catch {
      console.log("request not wokring");
    }
  };

  const processDoctorSlotArray = (slotArray) => {
    var doctorSlots = {
      day: slotArray.day,
      status: slotArray.status == "Active" ? true : false,
      availableTiming: {
        fromHour: slotArray.fromHour,
        fromMinute: slotArray.fromMinute,
        toHour: slotArray.toHour,
        toMinute: slotArray.toMinute,
      },
    };
    formData.doctorSlotArray.push(doctorSlots);
  };

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = React.useCallback(async (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    processDoctorSlotArray(updatedRow);
    return updatedRow;
  });

  const handleProcessRowUpdateError = (error) => {
    console.log(error);
    const { punteos } = this.state;
    console.log(punteos);
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    {
      field: "day",
      headerName: "Day",
      width: 150,
      editable: false,
      type: "singleSelect",
      valueOptions: day,
    },
    {
      field: "fromHour",
      headerName: "From Hour",
      type: "number",
      width: 120,
      editable: true,
      type: "singleSelect",
      valueOptions: hour,
    },
    {
      field: "fromMinute",
      headerName: "From Minute",
      type: "number",
      width: 120,
      editable: true,
      type: "singleSelect",
      valueOptions: minute,
    },
    {
      field: "toHour",
      headerName: "To Hour",
      width: 120,
      editable: true,
      type: "singleSelect",
      valueOptions: hour,
    },
    {
      field: "toMinute",
      headerName: "To Minute",
      width: 120,
      editable: true,
      type: "singleSelect",
      valueOptions: minute,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      editable: true,
      type: "singleSelect",
      valueOptions: status,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 150,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <>
      <Dialog open={props.openDialog} maxWidth={"xl"}>
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
        <DialogTitle>
          <Typography variant="h4">Add Doctor</Typography>
        </DialogTitle>
        <DialogContent sx={{ width: "75vw" }}>
          <Box>
            <Stack>
              <Box display={"flex"} gap={5}>
                <TextField
                  sx={{ marginTop: "15px", width: "330px" }}
                  label="Firstname"
                  multiline
                  maxRows={Infinity}
                  name="firstname"
                  variant="outlined"
                  value={formData.firstname}
                  onChange={handleChange}
                />
                <TextField
                  sx={{ marginTop: "15px", width: "330px" }}
                  label="Lastname"
                  multiline
                  maxRows={Infinity}
                  name="lastname"
                  variant="outlined"
                  value={formData.lastname}
                  onChange={handleChange}
                />
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Gender
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
            </Stack>
            <Stack>
              <Box display={"flex"} gap={5}>
                {/* <FormControl>
                  <FormLabel sx={{ fontSize: "12px" }}>Role</FormLabel>
                  <Select
                    variant="outlined"
                    placeholder="Role"
                    value={formData.role}
                    label="Type Of Role"
                    onChange={handleChange}
                    name="role"
                    defaultValue="doctor"
                    disabled="true"
                  >
                    <MenuItem value={"doctor"}>Doctor</MenuItem>
                  </Select>
                </FormControl> */}
                <TextField
                  sx={{ marginTop: "30px", width: "330px" }}
                  label="Registration ID"
                  name="regId"
                  variant="outlined"
                  value={formData.regId}
                  onChange={handleChange}
                />
                <TextField
                  sx={{ marginTop: "30px", width: "330px" }}
                  label="Email Address"
                  name="email"
                  variant="outlined"
                  value={formData.email}
                  onChange={handleChange}
                />
                <TextField
                  sx={{ marginTop: "30px", width: "300px" }}
                  label="Password"
                  type="password"
                  name="password"
                  variant="outlined"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Box>
            </Stack>
            <Stack>
              <Box display={"flex"} gap={5} marginTop={5}>
                {/* <TextField
                  sx={{ marginTop: "30px", width: "690px" }}
                  label="About Me"
                  multiline
                  rows={6}
                  name="about"
                  variant="outlined"
                  value={formData.about}
                  onChange={handleChange}
                /> */}
                <JoditEditor
                  ref={editor}
                  value={content}
                  config={config}
                  onBlur={newContent => setContent(newContent)}
                  onChange={newContent => {}}
                />
              </Box>
            </Stack>
            <Stack>
              <Box display={"flex"} gap={5}>
                <TextField
                  sx={{ marginTop: "30px", width: "330px" }}
                  label="Specialization"
                  multiline
                  maxRows={Infinity}
                  name="specialization"
                  variant="outlined"
                  value={formData.specialization}
                  onChange={handleChange}
                />
                <TextField
                  sx={{ marginTop: "30px", width: "330px" }}
                  label="Languages Known"
                  multiline
                  maxRows={Infinity}
                  name="language"
                  variant="outlined"
                  value={formData.language}
                  onChange={handleChange}
                />
                <TextField
                  sx={{ marginTop: "30px", width: "300px" }}
                  label="Phone"
                  multiline
                  maxRows={Infinity}
                  name="phone"
                  variant="outlined"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Box>
            </Stack>
            <Stack>
              <Box display={"flex"} gap={5}>
                <TextField
                  sx={{ marginTop: "30px", width: "330px" }}
                  label="City"
                  multiline
                  maxRows={Infinity}
                  name="city"
                  variant="outlined"
                  value={formData.city}
                  onChange={handleChange}
                />
                <TextField
                  sx={{ marginTop: "30px", width: "330px" }}
                  label="Country"
                  multiline
                  maxRows={Infinity}
                  name="country"
                  variant="outlined"
                  value={formData.country}
                  onChange={handleChange}
                />
                <TextField
                  sx={{ marginTop: "30px", width: "300px" }}
                  label="Pincode"
                  multiline
                  maxRows={Infinity}
                  name="pincode"
                  variant="outlined"
                  value={formData.pincode}
                  onChange={handleChange}
                />
              </Box>
            </Stack>
            <Stack>
              <Box
                sx={{
                  height: 524,
                  width: "84%",
                  margin: "0 auto",
                  "& .actions": {
                    color: "text.secondary",
                  },
                  "& .textPrimary": {
                    color: "text.primary",
                  },
                }}
              >
                <DataGrid
                  rows={rows}
                  columns={columns}
                  editMode="row"
                  rowModesModel={rowModesModel}
                  onRowModesModelChange={handleRowModesModelChange}
                  onRowEditStop={handleRowEditStop}
                  processRowUpdate={processRowUpdate}
                  onProcessRowUpdateError={handleProcessRowUpdateError}
                  slots={{
                    toolbar: EditToolbar,
                  }}
                  slotProps={{
                    toolbar: { setRows, setRowModesModel },
                  }}
                />
              </Box>
            </Stack>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            size="large"
            sx={{
              border: "2px solid #e2e2e2",
              marginBottom: "10px",
              marginTop: "30px",
              marginRight: "15px",
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            size="large"
            sx={{
              border: "2px solid #e2e2e2",
              marginBottom: "10px",
              marginTop: "30px",
              marginRight: "15px",
            }}
            onClick={handleSubmit}
            type="submit"
          >
            Add Doctor
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddDoctor;
