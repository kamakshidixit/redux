// import React from 'react';
// import { Form, Field } from 'react-final-form';
// import { TextField} from 'final-form-material-ui';
// import {
//   Typography, Paper, Grid,
//   Button, CssBaseline,
// } from '@material-ui/core';
// import Details from "../Resume/Details."

// const onSubmit = async values => {
//   const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
//   await sleep(300);


// };


// // const validate = values => {
// //   const errors = {};
// //   if (!values.firstName) {
// //     errors.firstName = 'Required';
// //   }
// //   if (!values.lastName) {
// //     errors.lastName = 'Required';
// //   }
// //   if (!values.email) {
// //     errors.email = 'Required';
// //   }
// //   return errors;
// // };


// function FillForm() {
//   return (
//     <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
//       <CssBaseline />
//       <Typography variant="h4" align="center" component="h1" gutterBottom>
//         Build Your Own Resume
//       </Typography>
//       <Form
//         onSubmit={onSubmit}
//         // validate={validate}
//         render={({ handleSubmit, submitting, values }) => (
//           <form onSubmit={handleSubmit}>
//             <Paper style={{ padding: 16 }}>
//               <Grid container alignItems="flex-start" spacing={2}>
//                 <Grid item xs={6}>
//                   <Field
//                     fullWidth
//                     required
//                     name="firstName"
//                     component={TextField}
//                     type="text"
//                     label="First Name"
//                   />
//                 </Grid>
//                 <Grid item xs={6}>
//                   <Field
//                     fullWidth
//                     required
//                     name="lastName"
//                     component={TextField}
//                     type="text"
//                     label="Last Name"
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Field
//                     name="email"
//                     fullWidth
//                     required
//                     component={TextField}
//                     type="email"
//                     label="Email"
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Field
//                     fullWidth
//                     name="Phone"
//                     component={TextField}
//                     multiline
//                     label="Phone Number"
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Field
//                     fullWidth
//                     name="Address"
//                     component={TextField}
//                     multiline
//                     label="Address"
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Field
//                     fullWidth
//                     name="Work"
//                     component={TextField}
//                     multiline
//                     label="Work Experiance"
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Field
//                     fullWidth
//                     name="Project"
//                     component={TextField}
//                     multiline
//                     label="Project"
//                   />
//                 </Grid>
//                 <Grid item style={{ marginTop: 16 }}>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     type="submit"
//                     disabled={submitting}
//                   >
//                     Submit
//                   </Button>
//                 </Grid>
//               </Grid>
//             </Paper>
//             <pre>{JSON.stringify(values, 0, 2)}</pre>
//           </form>
//         )}
//       />
//     </div>
//   );
// }

// export default FillForm;

