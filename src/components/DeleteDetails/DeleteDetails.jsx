import React, {useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// const initEmployee = {
//   id: '',
//   name: '',
//   city: '',
//   mobile: '',
//   company: '',
//   subRows: undefined,
// }


export default function DeleteDetails(props) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  
  return (
    <div align="right">
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Remove Employee</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you really want to remove employee details?
          </DialogContentText>
          <form >
            <DialogActions>
             <Button 
             type="submit" 
             variant="contained"
             color="primary"
             >
             Submit
            </Button>
           <Button color="primary" onClick={handleClose}> Cancel </Button>
          </DialogActions>
          </form>
          </DialogContent>
      </Dialog>
   </div>
  );
}

