// import React, { Component } from "react";
// import { AadharCard } from "../AadharCard";
// import Select from "@material-ui/core/Select";
// import MenuItem from "@material-ui/core/MenuItem";
// import {
//   Box,
//   Container,
//   Grid,
//   TextField,
//   withStyles,
//   Button,
//   Card,
//   Typography,
//   InputLabel,
//   FormControl,
// } from "@material-ui/core";
// import "./todo.css";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import IconButton from "@material-ui/core/IconButton";

// const { ResumeForm } = require("./ResumeForm");

// class Form extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "",
//       dob: "",
//       gender: "",
//       address: "",
//       fatherName: "",
//       flag: true,
//     };
//   }

//   handleChange = (e, attr) => {
//     this.setState({ [attr]: e.target.value });
//   };

//   handleSubmit = (event) => {
//     console.log("111111111111111111111111", this.state);
//     if (
//       this.state.Name !== "" &&
//       this.state.DOB !== "" &&
//       this.state.Gender !== "" &&
//       this.state.FatherName !== "" &&
//       this.state.Address !== ""
//     ) {
//       this.setState({ flag: true });
//     }
//     event.preventDefault();
//   };

//   render() {
//     const { name, flag, dob, gender, fatherName, address } = this.state;
//     console.log("name is ", this.state.Name, this.state.flag);

//     return (
//       <>
//         <Container component="main" maxWidth="sm">
//           <Box boxShadow={2} p={2} mt={15} bgcolor="grey.300" my={0.5}>
//             <Typography
//               component="h1"
//               variant="h5"
//               align="center"
//               style={{ marginBottom: "40px" }}
//             >
//               AadharCard Form
//             </Typography>
           
//             <form>
//                   <TextField
//                     variant="outlined"
//                     margin="normal"
//                     fullWidth
//                     value={this.state.name}
//                     onChange={(e) => this.handleChange(e, "name")}
//                     id="email"
//                     label="Name"
//                     name="name"
//                     type="name"
//                     autoComplete="name"
//                   />

//                   <TextField
//                     variant="outlined"
//                     margin="normal"
//                     fullWidth
//                     name="dob"
//                     id="dob"
//                     type="date"
//                     label="DOB"
//                     value={this.state.dob}
//                     onChange={(e) => this.handleChange(e, "dob")}
//                     autoComplete="current-date"
//                   />

//                   <TextField
//                     variant="outlined"
//                     margin="normal"
//                     fullWidth
//                     name="fatherName"
//                     id="fatherName"
//                     type="text"
//                     label="Father Name"
//                     value={this.state.fatherName}
//                     onChange={(e) => this.handleChange(e, "fatherName")}
//                     autoComplete="fatherName"
//                   />

//                   <TextField
//                     variant="outlined"
//                     // style={{
//                     //     backgroundColor: "grey",
//                     // }}
//                     margin="normal"
//                     fullWidth
//                     name="address"
//                     id="address"
//                     label="Address"
//                     value={this.state.address}
//                     onChange={(e) => this.handleChange(e, "address")}
//                     autoComplete="address"
//                   />

//                   <FormControl variant="outlined" style={{ width: "500px" }}>
//                     <InputLabel id="gender">Gender</InputLabel>
//                     <Select
//                       margin="normal"
//                       fullWidth
//                       label="Gender"
//                       id="gender"
//                       value={this.state.gender}
//                       defaultValue="Select Gender"
//                       name="gender"
//                       onChange={(e) => this.handleChange(e, "gender")}
//                     >
//                       <MenuItem defaultValue>Select Gender</MenuItem>
//                       <MenuItem value="male">Male</MenuItem>
//                       <MenuItem value="female">Female</MenuItem>
//                     </Select>
//                   </FormControl>
//                   <br />

//                   <Button
//                     variant="contained"
//                     style={{
//                       width: "300px",
//                       height: "50px",
//                       marginTop: "20px",
//                       marginLeft: "100px",
//                     }}
//                     color="primary"
//                     onClick={this.handleSubmit}
//                   >
//                     Submit
//                   </Button>
//             </form>
        
//           </Box>
//         </Container>

//         {flag === true ? (
//           <>  
//           <AadharCard
//             name={name}
//             dob={dob}
//             gender={gender}
//             fathername={fatherName}
//             address={address}
//           />
//           <AadharCard
//             name={name}
//             dob={dob}
//             gender={gender}
//             fathername={fatherName}
//             address={address}
//           />
//           <AadharCard
//             name={name}
//             dob={dob}
//             gender={gender}
//             fathername={fatherName}
//             address={address}
//           />
//           <AadharCard
//             name={name}
//             dob={dob}
//             gender={gender}
//             fathername={fatherName}
//             address={address}
//           />
//           </>
//         ) : (
//           ""
//         )}
//       </>
//     );
//   }
// }

// export default Form;


// import React, { useState } from 'react'
// import Button from '@material-ui/core/Button'
// import Dialog from '@material-ui/core/Dialog'
// import DialogActions from '@material-ui/core/DialogActions'
// import DialogContent from '@material-ui/core/DialogContent'
// import DialogContentText from '@material-ui/core/DialogContentText'
// import DialogTitle from '@material-ui/core/DialogTitle'
// import PropTypes from 'prop-types'
// import Switch from '@material-ui/core/Switch'
// import TextField from '@material-ui/core/TextField'
// // import Tooltip from '@material-ui/core/Tooltip'


// const initialUser = {
//   id: '',
//   name: '',
//   city: '',
//   mobile: '',
//   company: '',
//   subRows: undefined,
// }

// // const rows = [
// //   (1,"Kamakshi Dixit","Lucknow",7489000000,"Successive Technologies"),
// //   // createData(2, "Bhavya Rajan", "Delhi", 9088876781, "Infosys"),
// //   // createData(3, "Kavya Srivastava", "Kanpur", 9657945325, "Wipro"),
// // ];
// const AddDetails = props => {
//   const [user, setUser] = useState(initialUser)
//   // const {tableRow, setTableRow } = useState(rows)
//   const [open, setOpen] = useState(false)

//   const [switchState, setSwitchState] = useState({
//     addMultiple: false,
//   })

//   const handleSwitchChange = name => event => {
//     setSwitchState({ ...switchState, [name]: event.target.checked })
//   }

//   const resetSwitch = () => {
//     setSwitchState({ addMultiple: false })
//   }

//   const handleClickOpen = () => {
//     setOpen(true)
//   }

//   const handleClose = () => {
//     setOpen(false)
//      resetSwitch()
//   }

//   // const handleSubmit = event => {
//   //   setTableRow(rows)
//   //   setUser(initialUser)
//   //   // switchState.addMultiple ? setOpen(true) : setOpen(false)
//   // }

  // const handleChange = name => ({ target: { value } }) => {
  //   setUser({ ...user, [name]: value })
  // }

//   return (
//     <div>
//       <div align="right">
//        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//          ADD EMPLOYEE
//        </Button>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="form-dialog-title"
//       >
//         <DialogTitle id="form-dialog-title">Add Employee</DialogTitle>
//         <DialogContent>
//           <DialogContentText>Enter your details</DialogContentText>
//           <TextField
//             autoFocus
//             margin="dense"
//             label="Id"
//             type="text"
//             fullWidth
//             value={user.id}
//             onChange={handleChange('id')}
//           />
//           <TextField
//             autoFocus
//             margin="dense"
//             label="Name"
//             type="text"
//             fullWidth
//             value={user.name}
//             onChange={handleChange('name')}
//           />
//           <TextField
//             margin="dense"
//             label="City"
//             type="text"
//             fullWidth
//             value={user.city}
//             onChange={handleChange('city')}
//           />
//           <TextField
//             margin="dense"
//             label="Mobile"
//             type="text"
//             fullWidth
//             value={user.mobile}
//             onChange={handleChange('mobile')}
//           />
//           <TextField
//             margin="dense"
//             label="Company"
//             type="text"
//             fullWidth
//             value={user.company}
//             onChange={handleChange('company')}
//           />
//         </DialogContent>
//         <DialogActions>
//           {/* <Tooltip title="Add multiple">
//             <Switch
//               checked={switchState.addMultiple}
//               onChange={handleSwitchChange('addMultiple')}
//               value="addMultiple"
//               inputProps={{ 'aria-label': 'secondary checkbox' }}
//             />
//           </Tooltip> */}
//           <Button onClick={handleClose} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={props.onSubmit} color="primary">
//             Add
//           </Button>
//         </DialogActions>
//       </Dialog>
//       </div>
//     </div>
//   )
// }

// AddDetails.propTypes = {
//   addUserHandler: PropTypes.func.isRequired,
// }

// export default AddDetails;

// import React from 'react';
// import PropTypes from 'prop-types';
// import {
//   Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions,
// } from '@material-ui/core';
// import { LocationCity,Call, Home, Person } from '@material-ui/icons';
// import { withStyles } from '@material-ui/core/styles';
// import DialogField from './DialogField';
// import TextField from '@material-ui/core/TextField';

// const stylePassword = () => ({
//   passwordField: {
//     display: 'flex',
//     flexdirection: 'row',
//   },
//   passwordItem: {
//     flex: 1,
//   },
// });

// const constant = {
//   id: '',
//   name: Person,
//   city: LocationCity,
//   mobile: Call,
//   address: Home,
// };

// class AddDetails extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       id: '',
//       name: '',
//       city: '',
//       mobile: '',
//       address: '',
//       loading: false,
//       touched: {
//         id: false,
//         name: false,
//         city: false,
//         mobile: false,
//         address: false,
//       },
//     };
//   }

//   handleChange = (key) => ({ target: { value } }) => {
//     this.setState({ [key]: value });
//   };

//   // hasErrors = () => {
//   //   try {
//   //     schema.validateSync(this.state);
//   //   } catch (err) {
//   //     return true;
//   //   }
//   //   return false;
//   // }

//   // getError = (field) => {
//   //   const { touched } = this.state;
//   //   if (touched[field] && this.hasErrors()) {
//   //     try {
//   //       schema.validateSyncAt(field, this.state);
//   //       return '';
//   //     } catch (err) {
//   //       return err.message;
//   //     }
//   //   }
//   //   return '';
//   // };

//   isTouched = (field) => {
//     const { touched } = this.state;
//     this.setState({
//       touched: {
//         ...touched,
//         [field]: true,
//       },
//     });
//   }

//   // passwordType = (key) => {
//   //   if (key === 'password' || key === 'Confirm Password') {
//   //     return 'password';
//   //   }
//   //   return '';
//   // }

//   onClickHandler = async (data, openSnackBar) => {
//     this.setState({
//       loading: true,
//       hasError: true,
//     });
//     const { onClose } = this.props;
//     this.setState({ loading: false });
//     onClose();
//   }

//   formReset = () => {
//     this.setState({
//       id: '',
//       name: '',
//       city: '',
//       mobile: '',
//       address: '',
//       touched: {}
//     });
//   }

//   render() {
//     const {
//       open, onClose, classes,
//     } = this.props;
//     const {
//       id,name, city, mobile, address, 
//     } = this.state;
//     const textBox = [];
//     Object.keys(constant).forEach((key) => {
//       textBox.push(<DialogField
//         label={key}
//         onChange={this.handleChange(key)}
//         onBlur={() => this.isTouched(key)}
//         icons={constant[key]}
//       />);
//     });

//     return (
//       <>
//         <Dialog open={open} onClose={onClose}>
//           <DialogTitle id="form-dialog-title">Add Trainee</DialogTitle>
//           <DialogContent>
//             <DialogContentText>
//               Enter your trainee details
//               </DialogContentText>
//             <DialogContent>
//             <TextField
//             autoFocus
//             margin="dense"
//             label="Id"
//             type="text"
//             fullWidth
//             // value={user.id}
//             // onChange={this.handleChange('id')}
//           />
//           <TextField
//             autoFocus
//             margin="dense"
//             label="Name"
//             type="text"
//             fullWidth
//             // value={user.name}
//             // onChange={thihandleChange('name')}
//           />
//           <TextField
//             margin="dense"
//             label="City"
//             type="text"
//             fullWidth
//             // value={user.city}
//             // onChange={handleChange('city')}
//           />
//           <TextField
//             margin="dense"
//             label="Mobile"
//             type="text"
//             fullWidth
//             // value={user.mobile}
//             // onChange={handleChange('mobile')}
//           />
//           <TextField
//             margin="dense"
//             label="Company"
//             type="text"
//             fullWidth
//             // value={user.company}
//             // onChange={handleChange('company')}
//           />
//           </DialogContent>
//           <DialogActions>
//             <div align="right">
//               <Button onClick={onClose} color="primary">CANCEL</Button>
//               <Button
//                     color="primary"
//                     variant="contained"
//                     onClick={() => {
//                       this.onClickHandler({
//                         id, name, city, mobile, address, 
//                       }, );
//                       this.formReset();
//                     }}
//                   >
//                   </Button>
//             </div>
//           </DialogActions>
//          </DialogContent>
//         </Dialog>
//       </>
//     );
//   }
// }
// export default withStyles(stylePassword)(AddDetails);
// AddDetails.propTypes = {
//   open: PropTypes.bool.isRequired,
//   onClose: PropTypes.func.isRequired,
//  // onSubmit: PropTypes.func.isRequired,
//   classes: PropTypes.objectOf(PropTypes.string).isRequired,
// };

// export default function TableComponents() {
//   const classes = useStyles();
//   const [open, setOpen] = useState(false);
//   const [editing, setEditing] = useState(false);
//   // const [tableRow, setTableRow] = useState(rows);
//   const [tableRow, setTableRow] = useState(employeeData);
//  // const [ users, setUsers ] = useState(usersData)
//   // const [documents, setDocuments] = useState(documentData)
//   const [currentEmployee, setCurrentEmployee] = useState(initialFormState)
//   // const [currentDocument, setCurrentDocument] = useState(initialFormState)
//   // const [employee, setEmployee] = useState(rows);

//   const handleSubmit = (e, employee) => {
//     e.preventDefault();
//     setTableRow([...tableRow,employee]);
//   };



//   const handleDrawer = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     console.log("ghgjkjkjkkj");
//     setOpen(false);
//   };
 
//   //add data
//   // const handleSubmit = employee => {
// 	// employee.id = tableRow.length + 1
// 	// 	setTableRow([ ...tableRow, employee ])
// 	// }

//  // delete data
//   const deleteHandler = id => {
//    setEditing(false)
//    setTableRow(tableRow.filter(employee => employee.id !== id))
//   }

//   // set value for edit employee form...
//   const editHandler = (employee) => {
//   setEditing(true)
//   setCurrentEmployee({
//   id: employee.id,
//   name: employee.name,
//   city: employee.city,
//   mobile :employee.mobile, 
//   company: employee.company
//   })
//   }

//   // const updatedName = employeeData.name;
//   // for ( i=0; i<tableRow.length;i++){
//   //    if(tableRow[i].name === name ){
//   //        resultIndex = i;
//   //    }
//   //    if(tableRow[resultIndex].name === name){
//   //        setTableRow(tableRow[resultIndex] = updatedEmployee);
//   //    }
//   // }
  
//   const updatedEmployee = (updatedEmployee) => {
//   setEditing(false)
//   // console.log(name,'iddddd')
//   console.log(updatedEmployee, 'fgfg')
//   // const updatedName = updatedEmployee.name;
//   // for (i=0;i<tableRow.length;i++){
//   //  if(tableRow[i].name === name ){
//   //      resultIndex = i;
//   //  }
//   //  if(tableRow[resultIndex].name === name){
// //   //      setTableRow(tableRow[resultIndex] = updatedEmployee);
// //    }
// // }
  
//   setTableRow(tableRow.map((employee)=> (employee.name ===  employee? updatedEmployee : employee)))
//   // const entries = Object.entries(employee);
//   // setTableRow(tableRow.map((employee, i) => console.log(employee)))
//   // console.log("arr", tableRow);
//   }
  
//   return (
//     <div>
//       <AppBar position="static">
//         <Toolbar variant="dense">
//           <IconButton
//             onClick={handleDrawer}
//             edge="start"
//             className={classes.menuButton}
//             color="inherit"
//             aria-label="menu"
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" color="inherit">
//             Employees Details
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
//         <div>
//           <List>
//             {["All mail", "Trash", "Spam"].map((text, index) => (
//               <ListItem button key={text}>
//                 <ListItemIcon>
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItem>
//             ))}
//           </List>
//         </div>
//       </Drawer>
//       <Paper>
//         <div className={classes.dialog}>
//           <AddDetails
//             open={open}
//             onClose={handleClose}
//             onSubmit={handleSubmit}
//           />
//           <EditDetails
//             open={editing}
//             editing={editing}
//             setEditing={setEditing}
//             currentEmployee={currentEmployee}
//             updatedName={updatedEmployee}
//           /> 
//            <DeleteDetails
//            deleteHandler={deleteHandler}
//           />  
//           <TableContainer component={Paper} style={{ marginTop: "30px" }}>
//             <Table className={classes.table} aria-label="customized table">
//               <TableHead>
//                 <TableRow>
//                   {/* <StyledTableCell>Id</StyledTableCell> */}
//                   <StyledTableCell align="right">Name</StyledTableCell>
//                   <StyledTableCell align="right">City</StyledTableCell>
//                   <StyledTableCell align="right">Mobile</StyledTableCell>
//                   <StyledTableCell align="right">Company</StyledTableCell>
//                   <StyledTableCell align="right">Action</StyledTableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//               {tableRow.length > 0 ? (
//               tableRow.map(employee  => (
//                 // {tableRow.map((row) => (
//                   // <StyledTableRow key={row.id}>
//                   <StyledTableRow key ={employee.id}>
//                     {/* <StyledTableCell component="th" scope="row">
//                       {employee.id}
//                     </StyledTableCell> */}
//                     <StyledTableCell align="right">{employee.name}</StyledTableCell>
//                     <StyledTableCell align="right">{employee.city}</StyledTableCell>
//                     <StyledTableCell align="right" >
//                       {employee.mobile}
//                     </StyledTableCell>
//                     <StyledTableCell align="right">
//                       {employee.company}
//                     </StyledTableCell>
//                     <StyledTableCell>
//                       <IconButton
//                         onClick={() => editHandler(employee)}
                        
//                         className="button muted-button"
//                       >
//                       <EditIcon />
//                       </IconButton>
//                       <IconButton
//                         onClick={() => deleteHandler(employee.id)}
                       
//                         className="button muted-button"
//                       >
//                      < DeleteIcon />
//                       </IconButton>
//                     </StyledTableCell>
//                   </StyledTableRow>
//                 ))
//               ):(
//                 <StyledTableRow>
//                 <StyledTableCell colSpan={3}>No users</StyledTableCell>
//               </StyledTableRow>
//             )
//         }
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </div>
//       </Paper>
//     </div>
//   );
// }


// import React, { useState } from "react";
// import {
//   withStyles,
//   makeStyles,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   AppBar,
//   Typography,
//   Toolbar,
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   IconButton,
//   Button,
// } from "@material-ui/core";
// import MenuIcon from "@material-ui/icons/Menu";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";
// import { AddDetails } from "../AddDetails";
// import { EditDetails } from "../EditDetails";
// import { DeleteDetails } from "../DeleteDetails";
// import EditIcon from "@material-ui/icons/Edit";
// import DeleteIcon from "@material-ui/icons/Delete";

// // let a;

// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     "&:nth-of-type(odd)": {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
// }))(TableRow);

// // function employeeData(props) {
// //   return { props };
// // }

// // let rows = [
// //   createData(1,"Kamakshi Dixit","Lucknow",7489000000,"Successive Technologies"),
// //   createData(2, "Bhavya Rajan", "Delhi", 9088876781, "Infosys"),
// //   createData(3, "Kavya Srivastava", "Kanpur", 9657945325, "Wipro"),
// // ];

// const employeeData = [
//   { id: 1, name: 'Kamakshi Dixit', city: 'Lucknow', mobile: '7489000000', company:'Successive Technologies' },
//   { id: 2, name: 'Bhavya Rajan', city: 'Delhi', mobile: '9088876781', company:'Infosys' },
//   { id: 3, name: 'Kavya Srivastava', city: 'Kanpur', mobile: '9657945325', company:'Wipro' },
// ]

// const initialFormState = {  name: '', city: '', mobile: '', company: '' }

// const useStyles = makeStyles({
//   table: {
//     minWidth: 700,
//   },
// });

// export default function TableComponents() {
//   const classes = useStyles();
//   const [open, setOpen] = useState(false);
//   const [editing, setEditing] = useState(false);
//   const [tableRow, setTableRow] = useState(employeeData);
//   const [currentEmployee, setCurrentEmployee] = useState(initialFormState)

//   const handleSubmit = (e, employee) => {
//     e.preventDefault();
//     setTableRow([...tableRow,employee]);
//   };



//   const handleDrawer = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     console.log("ghgjkjkjkkj");
//     setOpen(false);
//   };
 
//   //add data
//   // const handleSubmit = employee => {
// 	// employee.id = tableRow.length + 1
// 	// 	setTableRow([ ...tableRow, employee ])
// 	// }

//  // delete data
//   const deleteHandler = id => {
//    setEditing(false)
//    setTableRow(tableRow.filter(employee => employee.id !== id))
//   }

//   // set value for edit employee form...
//   const editHandler = (employee) => {
//   setEditing(true)
//   setCurrentEmployee({
//   id: employee.id,
//   name: employee.name,
//   city: employee.city,
//   mobile :employee.mobile, 
//   company: employee.company
//   })
//   }

//   const updatedEmployee = (id,updatedEmployee) => {
//   setEditing(false)
//   console.log(id,'iddddd')
//   // console.log(updatedEmployee, 'fgfg')
//   // let updatedName = updatedEmployee.name;
//   // for (i=0;i<tableRow.length;i++){
//   //  if(tableRow[i].name === name ){
//   //      resultIndex = i;
//   //  }
//   //  if(tableRow[resultIndex].name === name){
//   //      setTableRow(tableRow[resultIndex] = updatedEmployee);
// //    }
// // }
  
//   setTableRow(tableRow.map((employee)=> (employee.id ===  employee? updatedEmployee : employee)))
//   // const entries = Object.entries(employee);
//   // setTableRow(tableRow.map((employee, i) => console.log(employee)))
//   // console.log("arr", tableRow);
//   }
  
//   return (
//     <div>
//       <AppBar position="static">
//         <Toolbar variant="dense">
//           <IconButton
//             onClick={handleDrawer}
//             edge="start"
//             className={classes.menuButton}
//             color="inherit"
//             aria-label="menu"
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" color="inherit">
//             Employees Details
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
//         <div>
//           <List>
//             {["All mail", "Trash", "Spam"].map((text, index) => (
//               <ListItem button key={text}>
//                 <ListItemIcon>
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItem>
//             ))}
//           </List>
//         </div>
//       </Drawer>
//       <Paper>
//         <div className={classes.dialog}>
//           <AddDetails
//             open={open}
//             onClose={handleClose}
//             onSubmit={handleSubmit}
//           />
//           <EditDetails
//             open={editing}
//             editing={editing}
//             setEditing={setEditing}
//             currentEmployee={currentEmployee}
//             updatedEmployee={updatedEmployee}
//             editHandler={editHandler}
//           /> 
//            <DeleteDetails
//            deleteHandler={deleteHandler}
//           />  
//           <TableContainer component={Paper} style={{ marginTop: "30px" }}>
//             <Table className={classes.table} aria-label="customized table">
//               <TableHead>
//                 <TableRow>
//                   {/* <StyledTableCell>Id</StyledTableCell> */}
//                   <StyledTableCell align="right">Name</StyledTableCell>
//                   <StyledTableCell align="right">City</StyledTableCell>
//                   <StyledTableCell align="right">Mobile</StyledTableCell>
//                   <StyledTableCell align="right">Company</StyledTableCell>
//                   <StyledTableCell align="right">Action</StyledTableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//               {tableRow.length > 0 ? (
//               tableRow.map(employee  => (
//                 // {tableRow.map((row) => (
//                   // <StyledTableRow key={row.id}>
//                   <StyledTableRow key ={employee.id}>
//                     {/* <StyledTableCell component="th" scope="row">
//                       {employee.id}
//                     </StyledTableCell> */}
//                     <StyledTableCell align="right">{employee.name}</StyledTableCell>
//                     <StyledTableCell align="right">{employee.city}</StyledTableCell>
//                     <StyledTableCell align="right" >
//                       {employee.mobile}
//                     </StyledTableCell>
//                     <StyledTableCell align="right">
//                       {employee.company}
//                     </StyledTableCell>
//                     <StyledTableCell>
//                       <IconButton
//                         onClick={() => editHandler(employee)}
                        
//                         className="button muted-button"
//                       >
//                       <EditIcon />
//                       </IconButton>
//                       <IconButton
//                         onClick={() => deleteHandler(employee.id)}
                       
//                         className="button muted-button"
//                       >
//                      < DeleteIcon />
//                       </IconButton>
//                     </StyledTableCell>
//                   </StyledTableRow>
//                 ))
//               ):(
//                 <StyledTableRow>
//                 <StyledTableCell colSpan={3}>No users</StyledTableCell>
//               </StyledTableRow>
//             )
//         }
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </div>
//       </Paper>
//     </div>
//   );
//}



///image

// import React, { useState } from "react";
// import {
//   withStyles,
//   makeStyles,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   AppBar,
//   Typography,
//   Toolbar,
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   IconButton,
// } from "@material-ui/core";
// import MenuIcon from "@material-ui/icons/Menu";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";
// import { AddDetails } from "../AddDetails";
// import { EditDetails } from "../EditDetails";
// import { DeleteDetails } from "../DeleteDetails";
// import EditIcon from "@material-ui/icons/Edit";
// import DeleteIcon from "@material-ui/icons/Delete";
// import PersonIcon from '@material-ui/icons/Person';
// import Avatar from "@material-ui/core/Avatar";
// import CollectionsIcon from "@material-ui/icons/Collections";
// import ImageUpload from "../ImageUpload/ImageUpload";
// import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
// import { useFileUpload } from "use-file-upload";
// import {Resume}  from "../Resume";
// import RoutePage from "../RoutePage"
// import {Link } from "react-router-dom"



// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     "&:nth-of-type(odd)": {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
// }))(TableRow);

// const employeeData = [
//   {
//     id: 1,
//     name: "Kamakshi Dixit",
//     city: "Lucknow",
//     mobile: "7489000000",
//     company: "Successive Technologies",
//   },
//   {
//     id: 2,
//     name: "Bhavya Rajan",
//     city: "Delhi",
//     mobile: "9088876781",
//     company: "Infosys",
//   },
//   {
//     id: 3,
//     name: "Kavya Srivastava",
//     city: "Kanpur",
//     mobile: "9657945325",
//     company: "Wipro",
//   },
// ];

// const initialFormState = {
//   id: null,
//   name: "",
//   city: "",
//   mobile: "",
//   company: "",
// };

// const useStyles = makeStyles({
//   table: {
//     minWidth: 700,
//   },
// });

// export default function TableComponents() {
//   const classes = useStyles();
//   const [open, setOpen] = useState(false);
//   const [editing, setEditing] = useState(false);
//   const [tableRow, setTableRow] = useState(employeeData);
//   const [currentEmployee, setCurrentEmployee] = useState(initialFormState);
//   const [image, setImage] = useState({ preview: "", raw: "" });
//   // const defaultSrc =
//   // "https://www.pngkit.com/png/full/301-3012694_account-user-profile-avatar-comments-fa-user-circle.png";

//   // const [files, selectFiles] = useFileUpload();
  

//   const handleSubmit = (e, employee) => {
//     e.preventDefault();
//     setTableRow([...tableRow, employee]);
//   };

//   const handleDrawer = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     console.log("ghgjkjkjkkj");
//     setOpen(false);
//   };

//   // delete data
//   const deleteHandler = (id) => {
//     setEditing(false);
//     setTableRow(tableRow.filter((employee) => employee.id !== id));
//   };

//   // set value for edit employee form...
//   const editHandler = (employee) => {
//     setEditing(true);
//     setCurrentEmployee({
//       id: employee.id,
//       name: employee.name,
//       city: employee.city,
//       mobile: employee.mobile,
//       company: employee.company,
//     });
//   };

//   const updatedEmployee = (updatedEmployee) => {
//     setEditing(false);
//     console.log("updatedEmployee", updatedEmployee);
//     console.log("data", tableRow);
//     const data = tableRow.map((employee) => {
//       if (employee.name === updatedEmployee.name) {
//         employee.city = updatedEmployee.city;
//         employee.mobile = updatedEmployee.mobile;
//         employee.company = updatedEmployee.company;
//       }
//       return employee;
//     });
//     console.log("updated", data);
//     setTableRow(data);
//   };


//   return (
//     <div>
//       <AppBar position="static">
//         <Toolbar variant="dense">
//           <IconButton
//             onClick={handleDrawer}
//             edge="start"
//             className={classes.menuButton}
//             color="inherit"
//             aria-label="menu"
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" color="inherit">
//             Employees Details
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
//         <div>
//           <List>
//               <ListItem button key="All Mail">
//                 <ListItemIcon>
//                 <InboxIcon />
//                 </ListItemIcon>
//                 <ListItemText primary="All Mail" />
//               </ListItem>
//               <ListItem button key="All Mail">
//                 <ListItemIcon>
//                 <InboxIcon />
//                 {/* <Link to = "/resume"></Link> */}
//                 </ListItemIcon>
//                 <ListItemText primary="Res"  />
//               </ListItem>
//           </List>
//         </div>
//       </Drawer>
//       <Paper>
//         <div className={classes.dialog}>
//           <AddDetails
//             open={open}
//             onClose={handleClose}
//             onSubmit={handleSubmit}
//           />
//           <EditDetails
//             open={editing}
//             editing={editing}
//             setEditing={setEditing}
//             currentEmployee={currentEmployee}
//             updatedEmployee={updatedEmployee}
//             editHandler={editHandler}
//             setCurrentEmployee={setCurrentEmployee}
//           />
//          {/* <ImageUpload cardName="Input Image" imageGallery={galleryImageList} /> */}
//           <DeleteDetails 
//             open={open}
//             onClose={handleClose}
//             deleteHandler={deleteHandler}
//           />
//           <TableContainer component={Paper} style={{ marginTop: "30px" }}>
//             <Table className={classes.table} aria-label="customized table">
//               <TableHead>
//                 <TableRow>
//                   <StyledTableCell>Name</StyledTableCell>
//                   <StyledTableCell align="right">City</StyledTableCell>
//                   <StyledTableCell align="right">Mobile</StyledTableCell>
//                   <StyledTableCell align="right">Company</StyledTableCell>
//                   <StyledTableCell align="right">Action</StyledTableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {tableRow.length > 0 ? (
//                   tableRow.map((employee) => (
//                     <StyledTableRow key={employee.id}>
//                       <StyledTableCell component="th" scope="row">
//                         {employee.name}
//                       </StyledTableCell>
//                       <StyledTableCell align="right">
//                         {employee.city}
//                       </StyledTableCell>
//                       <StyledTableCell align="right">
//                         {employee.mobile}
//                       </StyledTableCell>
//                       <StyledTableCell align="right">
//                         {employee.company}{" "}
//                       </StyledTableCell>
//                       <StyledTableCell>
//                         <IconButton
//                           onClick={() => editHandler(employee)}
//                           align="left"
//                           className="button muted-button"
//                         >
//                           <EditIcon />
//                         </IconButton>
//                         <IconButton
//                           onClick={() => deleteHandler(employee.id)}
//                           align="left"
//                           className="button muted-button"
//                         >
//                           <DeleteIcon />
//                         </IconButton>
//                         {/* <img src={files?.source} alt="preview" /> */}
//                         {/* <IconButton
//                          onClick={() =>
//                           selectFiles({ accept: "image/*" }, ({ name, size, source, file }) => {
//                             console.log("Files Selected", { name, size, source, file });
//                           })
//                         }
//                         className="button muted-button"
//                         >
//                           <AddPhotoAlternateIcon />
//                         </IconButton>  */}
//                         <ImageUpload cardName="Input Image"  />
//                       </StyledTableCell>
//                     </StyledTableRow>
//                   ))
//                 ) : (
//                   <StyledTableRow>
//                     <StyledTableCell colSpan={3}>No users</StyledTableCell>
//                   </StyledTableRow>
//                 )}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </div>
//       </Paper>
//     </div>
//   );
// }

// import React, { Component } from 'react';
// // import TableComponents from './components/TableComponent/TableComponent';
// // import { BrowserRouter } from "react-router-dom";
// import {Resume} from "../src/components/Resume/Resume";

// class App extends Component {
//   render() {
//     return (

//       <div className="App">
//         <Resume />
//         {/* <BrowserRouter>
//         <TableComponents />     
//         </BrowserRouter>      */}
//       </div>  
//     );
//   }
// }

// export default App;



// import React,{useState } from "react";
// import { 
//     Paper,Drawer,List,
//     ListItem,ListItemIcon,ListItemText,
//     Container,} from "@material-ui/core";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// import HomeIcon from "@material-ui/icons/Home";
// import InfoIcon from "@material-ui/icons/Info";
// import { Resume } from "../components/Resume";

// export default function RoutePage() {
//   const [Mainpage, setMainpage] = useState(false);
//   const classes = useStyles();
//   const [open, setOpen] = useState(false);
//   return (
//     <>
//       <Router>
//         <div style={{ display: "flex" }}>
//           <Drawer
//             style={{ width: "180px" }}
//             variant="persistent"
//             anchor="left"
//             open={open}
//             classes={{ paper: classes.drawerPaper }}
//           >
//             <List>
//               <ListItem  button>
//                 <ListItemIcon>
//                   <ArrowBackIcon />
//                 </ListItemIcon>
//                 <ListItemText />
//               </ListItem>
//               <Link exact to="/" className={classes.link}>
//                 <ListItem  button>
//                   <ListItemIcon>
//                     <HomeIcon />
//                   </ListItemIcon>
//                   <ListItemText primary={"Home"} />
//                 </ListItem>
//               </Link>
//               <Link exact to="/resume" className={classes.link}>
//                 <ListItem  button>
//                   <ListItemIcon>
//                     <InfoIcon />
//                   </ListItemIcon>
//                   <ListItemText primary={"Resume"} />
//                 </ListItem>
//               </Link>
//             </List>
//           </Drawer>
//           <Switch>
//             <Route exact path="/">
//               <Container>
//                 <Paper />
//               </Container>
//             </Route>
//             <Route exact path="/resume">
//               <Container>
//                 <Resume />
//               </Container>
//             </Route>
//           </Switch>
//         </div>
//       </Router>
//     </>
//   );
//}

// ResumeForm=
// import React, {useState} from 'react';
// import {
// Box,
// Container,
// TextField,
// Button,
// Typography,
// TextareaAutosize,
// Modal,
// makeStyles,
// } from "@material-ui/core";
// // import './todo1.css';

// const useStyles = makeStyles(theme => ({
//   paper: {
//     width: 300,
//     height:50,
//     backgroundColor: theme.palette.background.paper,
//     // border: '2px solid #000',
//     // boxShadow: theme.shadows[5],
  
//   },
// }));

// export default function ResumeForm() {
// const [values, setValues] = useState({});
// const classes = useStyles();
 
// const handleSubmit = (event) => {
// if (event) {
// event.preventDefault();
// // alert(`Resume Created!
// // Name: ${values.fullName} ${inputs.lastName}
// // Email: ${inputs.email}`);
// }
// }

// const handleInputChange = (event) => {
// event.persist();
// setValues(vaules => ({...values, [event.target.name]: event.target.value}));
// }
 

// return(
// <div>
// <Container component="main" maxWidth="sm" > 
// <Box boxShadow={2} p={3} mt={15} bgcolor="grey.300" my={0.5}> 
// <Typography
// component="h1"
// variant="h5"
// align="center"
// style={{ marginBottom: "40px" }}
// >
// Resume Form
// </Typography>

// <form onSubmit={handleSubmit}>
// <TextField
// variant="outlined"
// margin="normal"
// fullWidth
// label="FullName"
// name="fullName"
// type="text"
// id="fullname"
// placeholder= "Enter your name"
// value={values.fullname}
// onChange={handleInputChange}
// />

// <TextField
// variant="outlined"
// margin="normal"
// fullWidth
// label="Mobile"
// name="phone"
// type="text"
// id="number"
// placeholder="Enter mobile number"
// value={values.mobile}
// onChange={handleInputChange}
// />

// <TextField
// variant="outlined"
// margin="normal"
// fullWidth
// name="location"
// id="location"
// label="Location"
// type="text"
// placeholder= "Enter your current location"
// value={values.address}
// onChange={handleInputChange}
// />

// <TextField
// variant="outlined"
// margin="normal"
// fullWidth
// name="address"
// id="address"
// label="Address"
// type="text"
// placeholder= "Enter your address"
// value={values.address}
// onChange={handleInputChange}
// />

// <TextField
// variant="outlined"
// margin="normal"
// fullWidth
// name="email"
// id="email"
// label="Email"
// type="text"
// placeholder="Enter your email address"
// value={values.email}
// onChange={handleInputChange}
// />

// <TextField
// variant="outlined"
// margin="normal"
// fullWidth
// name="education"
// type="text"
// label="Eduaction "
// placeholder="Enter your education details"
// value={values.education}
// onChange={handleInputChange}
// />

// <TextField
// variant="outlined"
// margin="normal"
// fullWidth
// name="Interests"
// type="text"
// label="Interests"
// placeholder="Enter your interests"
// value={values.interests}
// onChange={handleInputChange}
// />

// <TextareaAutosize 
//  variant="outlined" 
//  style={{ 
//      width: "515px",
//      height: "100px",
//      backgroundColor:"lightgrey",
//      fontSize: "16px"
//  }}
//  label="Professional Summary"
//  id="professionalSummary"
//  name="professionalSummary"
//  placeholder="Enter your professional summary"
//  value={values.professionalSummary}
//  onChange={handleInputChange}
//  />

// <br />

// <Button
// variant="contained"
// style={{
// width: "300px",
// height: "50px",
// marginTop: "20px",
// marginLeft: "100px",
// }}
// color="primary"
// onClick={handleSubmit}
// >
// Submit
// </Button>
// </form>
// </Box>
// </Container> 
// </div>
// )
// }

// Resume=
// import React, { useState } from "react";
// import Typography from "@material-ui/core/Typography";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
// import { AppBar, IconButton } from "@material-ui/core";
// import SimpleAccordion from "./Accordian";
// import MailIcon from "@material-ui/icons/Mail";
// import PhoneIcon from "@material-ui/icons/Phone";
// import LocationOnIcon from '@material-ui/icons/LocationOn';
// import Button from "@material-ui/core/Button";
// import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
// import {ResumeForm} from '../ResumeForm';
// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();
//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

// export default function Resume() {
//   const [index, setIndex] = useState(0);
//   const [modalStyle] = useState(getModalStyle);
//   const [open, setOpen] = useState(false);

//   const onTabClicked = (e, index) => {
//     setIndex(index);
//   };

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };


//   const useStyles = makeStyles((theme) => ({
//     root: {
//       '& > *': {
//         margin: theme.spacing(1),
//       },
//     },
//     root1: {
//       height: 100,
//       flexGrow: 1,
//       minWidth: 300,
//       transform: 'translateZ(0)',
      
//       '@media all and (-ms-high-contrast: none)': {
//         display: 'none',
//       },
//     },
//     modal: {
//       display: 'flex',
//       // paddingLeft: '150px',
//       height:'10',
//       marginBottom: '300px',
//       marginLeft:'300px',
//       // alignItems: 'center',
//       justifyContent: 'center',
//     },
//   }));

//   const body = (
//     <div style={modalStyle} >
//        {/* <h2 id="simple-modal-title">Text in a modal</h2>
//        <p id="simple-modal-description">
//          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//        </p> */}
//       <ResumeForm />
//     </div>
//   );

//   const Panel = (props) => (
//     <div hidden={props.value !== props.index}>
//       {props.value === props.index && <Typography>{props.children}</Typography>}
//     </div>
//   );
//   const Appbarstyle = { top: "107px", backgroundColor: "white" };
//   const classes = useStyles();

//   return (
//     <>
//     <div className={classes.root}>
//     <Button color ="primary" variant="contained" onClick={handleOpen}>Build Resume</Button>
//     <Modal
//         className={classes.modal}
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="simple-modal-title"
//         aria-describedby="simple-modal-description"
//       >
//         {body}
//       </Modal>
//     </div>
//       <Card>
//         <CardContent style={{ backgroundColor: "lightblue" }}>
//           <Typography variant="h4" component="h4">
//             Aarushi Singh
//           </Typography>
//           <Typography variant="subtitle1" color="textSecondary">
//             Software Engineer
//           </Typography>
//           <Typography>
//             <IconButton>
//               <MailIcon />
//             </IconButton>
//             aarushi@gmail.com
//           </Typography>
//           <Typography>
//             <IconButton>
//               <PhoneIcon />
//             </IconButton>
//             9876543210
//           </Typography>
//           <Typography>
//             <IconButton>
//               <LocationOnIcon/>
//             </IconButton>
//             Noida
//           </Typography>
//         </CardContent>
//       </Card>
//       <AppBar position="static" style={Appbarstyle}>
//         <Tabs
//           value={index}
//           indicatorColor="primary"
//           textColor="primary"
//           onChange={onTabClicked}
//         >
//           <Tab label="Personal Details" style={{ margin: "2px 60px" }} />
//           <Tab label="Professional Details" />
//         </Tabs>
//       </AppBar>
//       <Panel value={index} index={0}>
//         <SimpleAccordion index={index} />
//       </Panel>
//       <Panel value={index} index={1}>
//         <SimpleAccordion index={index} />
//       </Panel>
//     </>
//   );
// }

