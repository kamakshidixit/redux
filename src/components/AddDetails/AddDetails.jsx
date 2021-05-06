import React, {useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const initialFormState = { id: null, name: '', city: '', mobile: '', company: '' }

export default function AddDetails(props) {
  const [open, setOpen] = useState(false);
  const [employee, setEmployee] = useState(initialFormState);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getData = (key) => {
      return employee.hasOwnProperty(key) ? employee[key] : '';
  };

  const setData = (key, value) => {
      return setEmployee({ ...employee, [key]: value });
  };

 
  return (
    <div align="right">
      <Button 
      variant="outlined" 
      color="primary" 
      style={{marginTop:"20px" }} 
      onClick={handleClickOpen}
      >
        ADD EMPLOYEE
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Employee</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter your employee details
          </DialogContentText>
          <form onSubmit={(e) => props.onSubmit(e,employee)}>
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            name="name"
            id="name"
            label="Name"
            type="text"
            value={getData('name')} 
            onChange={(e) => setData('name', e.target.value)} 
            fullWidth
          />
           <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            name="city"
            id="name"
            label="City"
            type="text"
            value={getData('city')}
            onChange={(e) => setData('city', e.target.value)} 
            fullWidth
          />
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            name="mobile"
            id="name"
            label="Mobile"
            type="text"
            value={getData('mobile')} 
            onChange={(e) => setData('mobile', e.target.value)} 
            fullWidth
          />
           <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            name="company"
            id="name"
            label="Company"
            type="text"
            value={getData('company')} 
            onChange={(e) => setData('company', e.target.value)} 
            fullWidth
          />
          <DialogActions>
          <Button 
          type="submit" 
          color="primary" 
          variant="contained" 
          >
            Submit
          </Button>
          <Button 
          color="primary"
          onClick={handleClose}
          variant="contained"
          >
            Cancel
          </Button>
          </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

