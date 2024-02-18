import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
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

export default function AddDoctorSlot() {
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});


  const processDoctorSlotArray = (slotArray) => {
    // setFriends((prevFriends) => [
    //   ...prevFriends,
    //   {
    //     name: "Random Friend Name",
    //     age: 20, // Random age
    //   },
    // ]);
    var doctorSlot = {
      day: slotArray.day,
      status: slotArray.status,
      availableTiming: {
        fromHour: slotArray.fromHour,
        fromMinute: slotArray.fromMinute,
        toHour: slotArray.toHour,
        toMinute: slotArray.toMinute,
      },
    };
    doctorSlots.push(doctorSlot);
    console.log(doctorSlots);
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
  );
}
