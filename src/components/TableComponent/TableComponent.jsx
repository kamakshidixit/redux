import React, { useState } from "react";
import {
  withStyles,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  
} from "@material-ui/core";
import { AddDetails } from "../AddDetails";
import { EditDetails } from "../EditDetails";
import { DeleteDetails } from "../DeleteDetails";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ImageUpload from "../ImageUpload/ImageUpload";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const employeeData = [
  {
    id: 1,
    name: "Kamakshi Dixit",
    city: "Lucknow",
    mobile: "7489000000",
    company: "Successive Technologies",
  },
  {
    id: 2,
    name: "Bhavya Rajan",
    city: "Delhi",
    mobile: "9088876781",
    company: "Infosys",
  },
  {
    id: 3,
    name: "Kavya Srivastava",
    city: "Kanpur",
    mobile: "9657945325",
    company: "Wipro",
  },
];

const initialFormState = {
  id: null,
  name: "",
  city: "",
  mobile: "",
  company: "",
};

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  drawerPaper: { width: "inherit" },
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
}));

export default function TableComponents() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [tableRow, setTableRow] = useState(employeeData);
  const [currentEmployee, setCurrentEmployee] = useState(initialFormState);
 
  const handleSubmit = (e, employee) => {
    e.preventDefault();
    setTableRow([...tableRow, employee]);
  };

  const handleClose = () => {
    console.log("ghgjkjkjkkj");
    setOpen(false);
  };

  // delete data
  const deleteHandler = (id) => {
    setEditing(false);
    setTableRow(tableRow.filter((employee) => employee.id !== id));
  };

  // set value for edit employee form...
  const editHandler = (employee) => {
    setEditing(true);
    setCurrentEmployee({
      id: employee.id,
      name: employee.name,
      city: employee.city,
      mobile: employee.mobile,
      company: employee.company,
    });
  };

  const updatedEmployee = (updatedEmployee) => {
    setEditing(false);
    console.log("updatedEmployee", updatedEmployee);
    console.log("data", tableRow);
    const data = tableRow.map((employee) => {
      if (employee.name === updatedEmployee.name) {
        employee.city = updatedEmployee.city;
        employee.mobile = updatedEmployee.mobile;
        employee.company = updatedEmployee.company;
      }
      return employee;
    });
    console.log("updated", data);
    setTableRow(data);
  };

  return (
    <div>

      <Paper>
        <div className={classes.dialog}>
          <AddDetails
            open={open}
            onClose={handleClose}
            onSubmit={handleSubmit}
          />
          <EditDetails
            open={editing}
            editing={editing}
            setEditing={setEditing}
            currentEmployee={currentEmployee}
            updatedEmployee={updatedEmployee}
            editHandler={editHandler}
            setCurrentEmployee={setCurrentEmployee}
          />
          <DeleteDetails
            open={open}
            onClose={handleClose}
            deleteHandler={deleteHandler}
          />
          <TableContainer component={Paper} style={{ marginTop: "30px" }}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell align="right">City</StyledTableCell>
                  <StyledTableCell align="right">Mobile</StyledTableCell>
                  <StyledTableCell align="right">Company</StyledTableCell>
                  <StyledTableCell align="right">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableRow.length > 0 ? (
                  tableRow.map((employee) => (
                    <StyledTableRow key={employee.id}>
                      <StyledTableCell component="th" scope="row">
                        {employee.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {employee.city}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {employee.mobile}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {employee.company}{" "}
                      </StyledTableCell>
                      <StyledTableCell>
                        <IconButton
                          onClick={() => editHandler(employee)}
                          align="left"
                          className="button muted-button"
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          onClick={() => deleteHandler(employee.id)}
                          align="left"
                          className="button muted-button"
                        >
                          <DeleteIcon />
                        </IconButton>
                        <ImageUpload cardName="Input Image" />
                      </StyledTableCell>
                    </StyledTableRow>
                  ))
                ) : (
                  <StyledTableRow>
                    <StyledTableCell colSpan={3}>No users</StyledTableCell>
                  </StyledTableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Paper>
    </div>
  );
}
