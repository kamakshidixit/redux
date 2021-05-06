import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
// import DialogActions from "@material-ui/core/DialogActions";
// import Typography from "@material-ui/core/Typography";
// import { withStyles } from "@material-ui/core/styles";
// import Fab from "@material-ui/core/Fab";
import { IconButton } from "@material-ui/core";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";

// const withStyles = theme => ({
// button: {
//         color: blue[900],
//         margin: 10
//       },
//     });

export default function ImageUpload(props) {
   
  const [image, setImage] = useState({ preview: "", raw: "" });
 
  const handleImageChange = (e) => {
      console.log(e.target)
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

    // const handleUpload = async e => {
    //   e.preventDefault();
    //   const formData = new FormData();
    //   formData.append("image", image.raw);

    //   await fetch("YOUR_URL", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "multipart/form-data"
    //     },
    //     body: formData
    //   });
    // };

  return (
    <React.Fragment>
      <TextField
        accept="image/*"
        multiple
        type="file"
        id="upload-button"
        name="Upload Image"
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
      <label htmlFor="upload-button">
        {image.preview ? (
          <Avatar src={image.preview} width="100" height="100" />
         ) : ( 
          <>
            <IconButton component="span" >
            <AddPhotoAlternateIcon />
            </IconButton>
          </>
      )}
      </label>  
      {/* <DialogActions>
      <Button onClick={handleUpload} variant="outlined">Upload</Button>
       </DialogActions> */}
    </React.Fragment>
  );
}














