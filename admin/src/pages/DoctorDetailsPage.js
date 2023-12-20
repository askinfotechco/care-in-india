import { Helmet } from "react-helmet-async";
import { filter } from "lodash";
import { sentenceCase } from "change-case";
import { useEffect, useState } from "react";
import axios from "axios";
// @mui
import {
  Card,
  Table,
  Stack,
  Paper,
  Avatar,
  Button,
  Popover,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,
  Switch,
} from "@mui/material";
// components
import Label from "../components/label";
import Iconify from "../components/iconify";
import Scrollbar from "../components/scrollbar";
// sections
import { DoctorListHead, DoctorListToolbar } from "../sections/@dashboard/doctordetails";
import { URL } from "../connection";
import AddUser from "../components/Forms/AddUser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddDoctor from "../components/Forms/AddDoctor";

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: "firstname", label: "Name", alignRight: false },
  // { id: "email", label: "Email Address", alignRight: false },
  { id: "country", label: "Location", alignRight: false },
  { id: "phone", label: "Phone", alignRight: false },
  { id: "specialization", label: "Specialization", alignRight: false },
  { id: "createdAt", label: "Created On", alignRight: false },
  { id: "status", label: "Status", alignRight: false },
  { id: "" },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(
      array,
      (_id) => _id.email.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function DoctorDetailsPage() {
  const [open, setOpen] = useState(null);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState("asc");
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState("name");
  const [filterName, setFilterName] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [usersList, setUsersList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [editValues, setEditValues] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        await axios
          .get(`${URL}/api/doctor`)
          .then((response) => {
            // console.log(response.data.allUser);
            setUsersList(response.data.allUser);
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (err) {
        console.log(err);
      }

      setIsLoading(false);
    };
    getData();
  }, [open, openDialog]);

  const handleStatusSwitch = (userID, checkedStatus) => {
    // console.log(userID, checkedStatus);
    let userStatus = checkedStatus ? false : true;
    axios
      .post(`${URL}/api/doctor/updatedoctorstatus`, {
        id: userID,
        status: userStatus,
      })
      .then((response) => {
        if (response.data.message.includes("Status updated successfully")) {
          setTimeout(() => {
            window.location.reload();
          }, 2000);
          toast.success("Doctor details updated successfully!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
        } else {
          toast.error(response.data.msg, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
        }
      })
      .catch((error) => {
        console.error("Error updating doctor status:", error);
      });
    return;
  };

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = usersList.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const handleEdit = (event) => {};

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - usersList.length) : 0;

  const filteredUsers = applySortFilter(
    usersList,
    getComparator(order, orderBy),
    filterName
  );

  const isNotFound = !filteredUsers.length && !!filterName;

  return (
    <>
      <Helmet>
        <title> Care In India - Doctor Details </title>
      </Helmet>

      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Doctor Details
          </Typography>
          <Button
            variant="contained"
            startIcon={<Iconify icon="eva:plus-fill" />}
            onClick={handleClickOpen}
          >
            New Doctor
          </Button>
          {openDialog && (
            <AddDoctor setOpenDialog={setOpenDialog} openDialog={openDialog} />
          )}
        </Stack>

        <Card>
          <DoctorListToolbar
            numSelected={selected.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
          />

          <Scrollbar>
            <TableContainer>
              <Table>
                <DoctorListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={usersList.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {!isLoading &&
                    filteredUsers
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => {
                        const {
                          _id,
                          firstname,
                          lastname,
                          // email,
                          country,
                          city,
                          phone,
                          language,
                          specalization,
                          createdAt,
                          status,
                        } = row;
                        const selectedUser = selected.indexOf(firstname) !== -1;

                        return (
                          <TableRow
                            hover
                            key={_id}
                            tabIndex={-1}
                            role="checkbox"
                            selected={selectedUser}
                          >
                            <TableCell padding="checkbox">
                              <Checkbox
                                checked={selectedUser}
                                onChange={(event) =>
                                  handleClick(event, firstname)
                                }
                              />
                            </TableCell>

                            <TableCell width={200}>
                              <Stack
                                direction="row"
                                alignItems="center"
                                spacing={2}
                              >
                                {/* <Avatar alt={name} src={avatarUrl} /> */}
                                <Typography variant="subtitle2">
                                  {firstname} {lastname}
                                </Typography>
                              </Stack>
                            </TableCell>

                            {/* <TableCell align="left" width={240}>
                              {email}
                            </TableCell> */}
                            <TableCell align="left" width={200}>
                              {city}, {country}
                            </TableCell>
                            <TableCell align="left" width={200}>
                              {phone}
                            </TableCell>
                            <TableCell align="left" width={200}>
                              {language}
                            </TableCell>
                            <TableCell align="left" width={200}>
                              {specalization}
                            </TableCell>                            
                            <TableCell align="left" width={200}>
                              {createdAt}
                            </TableCell>

                            {/* <TableCell align="left">
                            {status ? "Active" : "Inactive"}
                          </TableCell>

                          <TableCell align="left">
                            <Label
                              color={
                                (status && "error") || "success"
                              }
                            >
                              {status}
                            </Label>
                          </TableCell> */}
                            <TableCell align="left">
                              <Switch
                                color="success"
                                checked={status}
                                onChange={() => handleStatusSwitch(_id, status)}
                              />
                            </TableCell>

                            <TableCell align="right">
                              <Button 
                                disabled={status ? false : true}
                                onClick={() => {}}>
                                <Iconify
                                  icon={"eva:edit-fill"}
                                  sx={{ m: "auto" }}
                                />
                              </Button>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>

                {isNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <Paper
                          sx={{
                            textAlign: "center",
                          }}
                        >
                          <Typography variant="h6" paragraph>
                            Not found
                          </Typography>

                          <Typography variant="body2">
                            No results found for &nbsp;
                            <strong>&quot;{filterName}&quot;</strong>.
                            <br /> Try checking for typos or using complete
                            words.
                          </Typography>
                        </Paper>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={usersList.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>
      <ToastContainer />
    </>
  );
}
