import React, {useState} from 'react';
import {
Box,
Container,
TextField,
Button,
Typography,
Grid,
CssBaseline,
} from "@material-ui/core";
import Resume from '../Resume/Resume';

const initialState = { name: '', email: '' , mobile: '', location: '', address:'', education: '', interests: '', professionalSummary: '', workExperience: '', projects: ''}

export default function ResumeForm() {
// const [values, setValues] = useState({});
const [details, setDetails]= useState(initialState);


const handleSubmit = (e, details) => {
    e.preventDefault();
    setDetails(initialState);
  };


const getData = (key) => {
    return details.hasOwnProperty(key) ? details[key] : '';
};

const setData = (key, value) => {
    console.log('bhbhbh',details);
    return setDetails({ ...details, [key]: value });

};


return(
<>
<div style={{ padding: 8, margin: 'auto', maxWidth: 600 }}>
<Container component="main" maxWidth="sm" > 
<Box boxShadow={2} p={3} mt={4} marginBottom={200} bgcolor="grey.300" my={0.5}> 
<CssBaseline />
<Typography variant="h4" align="center" component="h1" gutterBottom>
Build Your Own Resume
</Typography>

<form>

<Grid container alignItems="flex-start" spacing={2}>
<Grid item xs={12}>
<TextField
variant="outlined"
margin="normal"
fullWidth
label="Name"
name="name"
type="text"
id="name"
placeholder= "Enter your name"
value={getData('name')} 
onChange={(e) => setData('name', e.target.value)} 
/>
</Grid>

<Grid item xs={12}>
<TextField
variant="outlined"
margin="normal"
fullWidth
name="email"
id="email"
label="Email"
type="text"
placeholder="name@gmail.com"
value={getData('email')} 
onChange={(e) => setData('email', e.target.value)} 
/>
</Grid>

<Grid item xs={6}>
<TextField
variant="outlined"
margin="normal"
fullWidth
label="Mobile"
name="mobile"
type="text"
id="number"
placeholder="Enter mobile number"
value={getData('mobile')} 
onChange={(e) => setData('mobile', e.target.value)} 
/>
</Grid>

<Grid item xs={6}>
<TextField
variant="outlined"
margin="normal"
fullWidth
name="location"
id="location"
label="Location"
type="text"
placeholder= "Enter your current location"
value={getData('location')} 
onChange={(e) => setData('location', e.target.value)} 
/>
</Grid>

<Grid item xs={12}>
<TextField
variant="outlined"
margin="normal"
fullWidth
name="address"
id="address"
label="Address"
type="text"
placeholder= "Enter your address"
value={getData('address')} 
onChange={(e) => setData('address', e.target.value)} 
/>
</Grid>

<Grid item xs={12}>
<TextField
variant="outlined"
margin="normal"
fullWidth
name="education"
type="text"
label="Eduaction "
placeholder="Enter your education details"
value={getData('education')} 
onChange={(e) => setData('education', e.target.value)} 
/>
</Grid>

<Grid item xs={12}>
<TextField
variant="outlined"
margin="normal"
fullWidth
name="interests"
type="text"
label="Interests"
id="interests"
placeholder="Enter your interests"
value={getData('interests')} 
onChange={(e) => setData('interests', e.target.value)} 
/>
</Grid>

<Grid  item xs={12}>
<TextField
 variant="outlined" 
 margin="normal"
 fullWidth
 label="Professional Summary"
 id="professionalSummary"
 name="professionalSummary"
 type="text"
 placeholder="Enter your professional summary"
 value={getData('professionalSummary')} 
 onChange={(e) => setData('professionalSummary', e.target.value)}
 />
</Grid> 

<Grid item xs={12}>
<TextField
variant="outlined"
margin="normal"
fullWidth
name="workExperience"
type="text"
label="Work Experience"
id="workExperience"
placeholder="Enter your experience"
value={getData('workExperience')} 
onChange={(e) => setData('workExperience', e.target.value)} 
/>
</Grid>

<Grid item xs={12}>
<TextField
variant="outlined"
margin="normal"
fullWidth
name="project"
type="text"
label="Project"
id="project"
placeholder="Enter your project details"
value={getData('project')} 
onChange={(e) => setData('project', e.target.value)} 
/>
</Grid>

<br />
<Grid item style={{ marginTop: 16 }}>
<Button
variant="contained"
color="primary"
onClick={handleSubmit}
>
Submit
</Button>
</Grid>
</Grid>
</form>
</Box>
</Container> 
</div>
<div>
<Resume
setDetails={setDetails}
details={details}
/>
</div>
</>
)
}