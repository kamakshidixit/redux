import React, { Component } from "react";
// import TableComponents from "./components/TableComponent/TableComponent";
import RoutePage from "./components/RoutePage";
import {Resume} from '../src/components/Resume';
import ResumeForm from "./components/ResumeForm/ResumeForm"
import {Form} from './components'
class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          {/* <ImageUpload /> */}
          {/* {/* <BrowserRouter> */}
          {/* <TableComponents /> */}
          {/* </BrowserRouter> */}
          {/* < Resume /> */}
          {/* <Form /> */}
          {/* <ResumeForm/> */}
          <RoutePage/>
          {/* <ResumeForm/> */}
        </div>
      </>
    );
  }
}

export default App;