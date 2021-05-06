import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";


const EditDetails = (props) => {
  console.log("in edit detail", props);

  const handleClose = () => {
    props.setEditing(false);
  };

  const handleChange = (event) => 
  {
    const { name, value } = event.target;
    props.setCurrentEmployee({ ...props.currentEmployee, [name]: value });
  };

  return (
    <div align="right">
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Employee</DialogTitle>
        <DialogContent>
          <DialogContentText>Edit your employee details</DialogContentText>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              props.updatedEmployee(props.currentEmployee);
            }}
          >
            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              name="name"
              label="Name"
              type="text"
              defaultValue={props.currentEmployee.name}
              onChange={handleChange}
              fullWidth
            />

            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              name="city"
              label="City"
              type="text"
              defaultValue={props.currentEmployee.city}
              onChange={handleChange}
              fullWidth
            />

            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              name="mobile"
              label="Mobile"
              type="text"
              defaultValue={props.currentEmployee.mobile}
              onChange={handleChange}
              fullWidth
            />

            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              name="company"
              label="Company"
              type="text"
              defaultValue={props.currentEmployee.company}
              onChange={handleChange}
              fullWidth
            />
            <DialogActions>
              <Button color="primary"  variant="contained" type="submit">Update Employee</Button>
              <Button color="primary"  variant="contained" onClick={() => props.setEditing(false)}>
                Cancel
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default EditDetails;
