/* eslint-disable no-undef */
import React, { Component } from "react";
import { AadharCard } from "../AadharCard";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import "./todo.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      dob: "",
      gender: "",
      address: "",
      fatherName: "",
      flag: true,
    };
  }

  handleChange = (e, attr) => {
    this.setState({ [attr]: e.target.value });
  };

  handleSubmit = (event) => {
    console.log("111111111111111111111111", this.state);
    if (
      this.state.Name !== "" &&
      this.state.DOB !== "" &&
      this.state.Gender !== "" &&
      this.state.FatherName !== "" &&
      this.state.Address !== ""
    ) {
      this.setState({ flag: true });
    }
    event.preventDefault();
  };

  render() {
    const { name, flag, dob, gender, fatherName, address } = this.state;
    console.log("name is ", this.state.Name, this.state.flag);

    return (
      <>
        <Container component="main" maxWidth="sm">
          <Box boxShadow={2} p={2} mt={15} bgcolor="grey.300" my={0.5}>
            <Typography
              component="h1"
              variant="h5"
              align="center"
              style={{ marginBottom: "40px" }}
            >
              AadharCard Form
            </Typography>

            <form>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                value={this.state.name}
                onChange={(e) => this.handleChange(e, "name")}
                id="email"
                label="Name"
                name="name"
                type="name"
                autoComplete="name"
              />

              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="dob"
                id="date"
                type="date"
               // label="DOB"
                value={this.state.dob}
                onChange={(e) => this.handleChange(e, "dob")}
                autoComplete="current-date"
              />

              {/* <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="date"
                label="DOB"
                type="date"
                // defaultValue="2017-05-24"
                InputLabelProps={{
                  shrink: true,
                }}
              /> */}

              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="fatherName"
                id="fatherName"
                type="text"
                label="Father Name"
                value={this.state.fatherName}
                onChange={(e) => this.handleChange(e, "fatherName")}
                autoComplete="fatherName"
              />

              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="address"
                id="address"
                label="Address"
                value={this.state.address}
                onChange={(e) => this.handleChange(e, "address")}
                autoComplete="address"
              />

              <FormControl variant="outlined" style={{ width: "520px" }}>
                <InputLabel id="gender">Gender</InputLabel>
                <Select
                  margin="normal"
                  fullWidth
                  label="Gender"
                  id="gender"
                  value={this.state.gender}
                  defaultValue="Select Gender"
                  name="gender"
                  onChange={(e) => this.handleChange(e, "gender")}
                >
                  <MenuItem defaultValue>Select Gender</MenuItem>
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                </Select>
              </FormControl>
              <br />

              <Button
                variant="contained"
                style={{
                  width: "300px",
                  height: "50px",
                  marginTop: "20px",
                  marginLeft: "100px",
                }}
                color="primary"
                onClick={this.handleSubmit}
              >
                Submit
              </Button>
            </form>
          </Box>
        </Container>

        {flag === true ? (
          <>
            <AadharCard
              name={name}
              dob={dob}
              gender={gender}
              fathername={fatherName}
              address={address}
            />
            <AadharCard
              name={name}
              dob={dob}
              gender={gender}
              fathername={fatherName}
              address={address}
            />
            <AadharCard
              name={name}
              dob={dob}
              gender={gender}
              fathername={fatherName}
              address={address}
            />
            <AadharCard
              name={name}
              dob={dob}
              gender={gender}
              fathername={fatherName}
              address={address}
            />
          </>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default Form;
