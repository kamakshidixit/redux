/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import photo from "../images/photo.jpg";
import barcode from "../images/barcode.png";
import "./style.css";

export default class AadharCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      demo: "",
    };
  }
  render() {
    const { name, dob, gender, fathername, address } = this.props;
    console.log("---------------->>", this.props);
    return (
      //    <Container component="main" maxWidth="sm">
      //     <Box boxShadow={6} p={6} mt={20}>
      <div className="bgimage">
        <div>
          <img
            src={photo}
            style={{ width: "100px", marginTop: "140px", marginLeft: "90px" }}
          />
        </div>
        <div className="Bcode">
          <img
            id={photo}
            src={barcode}
            style={{
              width: "100px",
              height: "80px",
              marginTop: "200px",
              marginLeft: "10px",
            }}
            alt="barcode"
          ></img>
        </div>

        <div className="element">
          <div className="details">
            <ul>
              <li>Name : {name}</li>
              <li>Gender : {gender}</li>
              <li>DOB : {dob} </li>
              <li>Father Name : {fathername}</li>
              <li>Address : {address} </li>
            </ul>
          </div>
        </div>
      </div>
      // </Box>
      // </Container>
    );
  }
}
