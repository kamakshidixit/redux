import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
      width: '100%',
  },
  heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
  },
}));


export default function SimpleAccordion(props) {

  const classes = useStyles();
  return (
    <>
      <div hidden ={props.index === 1} className={classes.root}>
      <Accordion>
          <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
          >
              <Typography className={classes.heading}>Address</Typography>
          </AccordionSummary>
          <AccordionDetails>
              <Typography>
              {props.Add}
              </Typography>
          </AccordionDetails>
      </Accordion>
      <Accordion>
          <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
          >
              <Typography className={classes.heading}>Education</Typography>
          </AccordionSummary>
          <AccordionDetails>
              <Typography>
              {props.Edu}
              </Typography>
          </AccordionDetails>
      </Accordion>
      <Accordion>
          <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
          >
              <Typography className={classes.heading}>Intrests</Typography>
          </AccordionSummary>
          <AccordionDetails>
              <Typography>
                  {props.Int}
              </Typography>
          </AccordionDetails>
      </Accordion>
      </div>
      <div hidden ={props.index === 0} >
      <Accordion>
          <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
          >
              <Typography className={classes.heading}>Professional Summary</Typography>
          </AccordionSummary>
          <AccordionDetails>
              <Typography>
              {props.Prof}
              </Typography>
          </AccordionDetails>
      </Accordion>
     <Accordion>
          <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
          >
              <Typography className={classes.heading}>Work Experience</Typography>
          </AccordionSummary>
          <AccordionDetails>
              <Typography>
              {props.Exp}
              </Typography>
          </AccordionDetails>
      </Accordion>
      <Accordion>
          <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
          >
              <Typography className={classes.heading}>Project</Typography>
          </AccordionSummary>
          <AccordionDetails>
              <Typography>
              {props.Proj}
              </Typography>
          </AccordionDetails>
      </Accordion>
      </div>
 
  </>
  )
}

