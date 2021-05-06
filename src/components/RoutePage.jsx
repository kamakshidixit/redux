import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
} from "@material-ui/core";
import ResumeForm from "../components/ResumeForm/ResumeForm";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import TableComponents from "../components/TableComponent/TableComponent";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: "inherit" },
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
}));

function RoutePage() {
  const [DrawerOpen, setDrawerOpen] = useState(false);
  const [Toolbartitle, setToolbartitle] = useState("Employee Details");
  const classes = useStyles();
  const Dopenclose = () => {
    setDrawerOpen(!DrawerOpen);
  };

  return (
    <>
      <Router>
        <Container>
          <AppBar
            position="static"
            style={{ backgroundColor: "lightblue", color: "black" }}
          >
            <Toolbar variant="dense">
              <IconButton
                onClick={Dopenclose}
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon onClick={Dopenclose} />
              </IconButton>
              <Typography variant="h6" color="inherit">
                {Toolbartitle}
              </Typography>
            </Toolbar>
          </AppBar>
        </Container>

        <div style={{ display: "flex" }}>
          <Drawer
            style={{ width: "220px" }}
            variant="temporary"
            anchor="left"
            open={DrawerOpen}
            classes={{ paper: classes.drawerPaper }}
          >
            <List>
              <ListItem onClick={Dopenclose}>
                <ListItemIcon>
                  <ArrowBackIcon />
                </ListItemIcon>
                <ListItemText primary={"Back"} />
              </ListItem>
              <Link to="/home" className={classes.link}>
                <ListItem
                  onClick={() => setToolbartitle("Employee Details")}
                  button
                >
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Home"} />
                </ListItem>
              </Link>
              <Link to="/resume" className={classes.link}>
                <ListItem onClick={() => setToolbartitle("Resume")} button>
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText primary={"ResumeForm"} />
                </ListItem>
              </Link>
            </List>
          </Drawer>
          <Switch>
            <Route exact path="/home">
              <Container>
                <TableComponents />
              </Container>
            </Route>
            <Route exact path="/resume">
              <Container>
                <ResumeForm/>
              </Container>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default RoutePage;
