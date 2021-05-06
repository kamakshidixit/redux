import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { AppBar, IconButton } from "@material-ui/core";
import SimpleAccordion from "./Accordian";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { makeStyles } from '@material-ui/core/styles';

const Resume =(props) => {
  console.log('props',props.details)
  const [index, setIndex] = useState(0);
  
  const onTabClicked = (e, index) => {
    setIndex(index);
  };

  // const handleChange = (event) => 
  // {
  //   const { name, value } = event.target;
  //   console.log('jhjhjh',props.details)
  //   props.setDetails({ ...props.details, [name]: value });
  // };

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

  const Panel = (props) => (
    <div hidden={props.value !== props.index}>
      {props.value === props.index && <Typography>{props.children}</Typography>}
    </div>
  );
  const Appbarstyle = { top: "107px", backgroundColor: "white" };
  const classes = useStyles();

  return (
    <>
    <div className={classes.root}>
    </div>
      <Card>
        <CardContent style={{ backgroundColor: "lightblue" }}>
          <Typography variant="h4" component="h4">
           {props.details.name}
          </Typography>
          <Typography>
            <IconButton>
              <MailIcon />
            </IconButton>
          {props.details.email}
          </Typography>
          <Typography>
            <IconButton>
              <PhoneIcon />
            </IconButton>
           {props.details.mobile}
          </Typography>
          <Typography>
            <IconButton>
              <LocationOnIcon/>
            </IconButton>
            {props.details.location}
          </Typography>
        </CardContent>
      </Card>
      <AppBar position="static" style={Appbarstyle}>
        <Tabs
          value={index}
          indicatorColor="primary"
          textColor="primary"
          onChange={onTabClicked}
        >
          <Tab label="Personal Details" style={{ margin: "2px 60px" }} />
          <Tab label="Professional Details" />
        </Tabs>
      </AppBar>
      <Panel value={index} index={0}>
        <SimpleAccordion index={index}  Add={props.details.address}  Edu={props.details.education} Int = {props.details.interests} />
      </Panel>
      <Panel value={index} index={1}>
        <SimpleAccordion index={index} Prof={props.details.professionalSummary}  Exp={props.details.workExperience}  Proj={props.details.project}   />
      </Panel>
    </>
  );
}
export default Resume;